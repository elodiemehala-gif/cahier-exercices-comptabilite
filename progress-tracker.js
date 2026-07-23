(()=>{
  const app=document.querySelector('#app');
  const nav=document.querySelector('#workspaceNav');
  if(!app||!nav)return;

  const STORAGE_KEY='workbook-tracking-v1';
  const DAY=86400000;
  let data=load();

  function load(){
    try{return JSON.parse(localStorage.getItem(STORAGE_KEY)||'{"subjects":{}}')}
    catch{return{subjects:{}}}
  }
  function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(data))}
  function esc(value){return String(value??'').replace(/[&<>"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[char]))}
  function normalize(value){return String(value??'').replace(/\s+/g,' ').trim()}
  function todayISO(offset=0){const d=new Date(Date.now()+offset*DAY);d.setMinutes(d.getMinutes()-d.getTimezoneOffset());return d.toISOString().slice(0,10)}
  function formatDate(value){if(!value)return'Non planifié';return new Intl.DateTimeFormat('fr-FR',{weekday:'short',day:'numeric',month:'short'}).format(new Date(`${value}T12:00:00`))}
  function currentKey(){
    const label=document.querySelector('.exercise .eyebrow')?.textContent||'';
    const match=label.match(/THÈME\s+(\d+)\s+·\s+SUJET\s+(\d+)\//i);
    return match?`T${match[1]}-S${match[2]}`:null;
  }
  function parseKey(key){const match=String(key).match(/^T(\d+)-S(\d+)$/);return match?{theme:+match[1],subject:+match[2]}:null}
  function subjectMeta(key){
    const parsed=parseKey(key);if(!parsed)return null;
    for(const part of window.WORKBOOK_PARTS||[]){
      const theme=part.themes.find(item=>item.n===parsed.theme);
      if(theme)return{part,theme,title:theme.s[parsed.subject-1]||`Sujet ${parsed.subject}`,subjectNumber:parsed.subject};
    }
    return null;
  }
  function subjectData(key){
    if(!data.subjects[key])data.subjects[key]={attempts:0,attemptDates:[],notes:'',errors:{}};
    if(!data.subjects[key].errors)data.subjects[key].errors={};
    if(!data.subjects[key].attemptDates)data.subjects[key].attemptDates=[];
    return data.subjects[key];
  }
  function recordError(key,id,label,type='manual'){
    const subject=subjectData(key);
    const now=new Date().toISOString();
    const current=subject.errors[id]||{id,label,type,count:0,note:'',scheduledDate:null,reviews:0,firstAt:now};
    current.label=label||current.label;
    current.type=type||current.type;
    current.count=(current.count||0)+1;
    current.lastAt=now;
    subject.errors[id]=current;
    save();
    return current;
  }
  function setActive(view){nav.querySelectorAll('[data-view]').forEach(button=>button.classList.toggle('active',button.dataset.view===view))}
  function openExercise(key){
    const parsed=parseKey(key);if(!parsed)return;
    setActive('parcours');
    if(typeof window.openSubject==='function')window.openSubject(parsed.theme,parsed.subject);
  }
  function allErrors(){
    const result=[];
    for(const [key,subject] of Object.entries(data.subjects||{})){
      for(const error of Object.values(subject.errors||{}))result.push({key,subject,error,meta:subjectMeta(key)});
    }
    return result;
  }
  function scheduledErrors(){return allErrors().filter(item=>item.error.scheduledDate).sort((a,b)=>a.error.scheduledDate.localeCompare(b.error.scheduledDate)||b.error.count-a.error.count)}
  function errorCount(subject){return Object.values(subject.errors||{}).reduce((sum,error)=>sum+(error.count||0),0)}
  function scheduleError(key,errorId,date){
    const error=subjectData(key).errors[errorId];if(!error)return;
    error.scheduledDate=date||null;save();
  }
  function markReviewed(key,errorId){
    const error=subjectData(key).errors[errorId];if(!error)return;
    error.reviews=(error.reviews||0)+1;
    error.lastReviewedAt=new Date().toISOString();
    error.scheduledDate=null;
    save();
  }
  function removeError(key,errorId){
    const subject=subjectData(key);delete subject.errors[errorId];save();
  }
  function progressState(){try{return JSON.parse(localStorage.getItem('workbook-progress')||'{}')}catch{return{}}}
  function attemptsByDate(subject){
    const counts={};for(const date of subject.attemptDates||[])counts[date]=(counts[date]||0)+1;
    return Object.entries(counts).sort((a,b)=>b[0].localeCompare(a[0])).slice(0,3);
  }
  function renderTracking(){
    setActive('suivi');
    data=load();
    const progress=progressState();
    const errors=allErrors();
    const totalAttempts=Object.values(data.subjects||{}).reduce((sum,subject)=>sum+(subject.attempts||0),0);
    const totalErrors=errors.reduce((sum,item)=>sum+(item.error.count||0),0);
    const planned=errors.filter(item=>item.error.scheduledDate).length;
    const frequent=errors.filter(item=>item.error.count>1).sort((a,b)=>b.error.count-a.error.count).slice(0,5);

    app.innerHTML=`<section class="tracking-view">
      <div class="tracking-heading"><div><p class="eyebrow">SUIVI PERSONNEL</p><h2>Ma progression et mes erreurs</h2><p>Les essais sont enregistrés lorsque tu affiches le corrigé. Tu peux aussi signaler manuellement un point à revoir dans chaque question.</p></div><button class="tracking-agenda-link" data-go-agenda>Voir l’agenda →</button></div>
      <div class="tracking-stats">
        <article><span>◎</span><div><b>${totalAttempts}</b><small>essais réalisés</small></div></article>
        <article><span>!</span><div><b>${totalErrors}</b><small>erreurs enregistrées</small></div></article>
        <article><span>↻</span><div><b>${frequent.length}</b><small>erreurs récurrentes</small></div></article>
        <article><span>▣</span><div><b>${planned}</b><small>révisions planifiées</small></div></article>
      </div>
      ${frequent.length?`<section class="frequent-errors"><div class="tracking-section-title"><div><p class="eyebrow">À SURVEILLER</p><h3>Mes erreurs les plus fréquentes</h3></div></div><div class="frequent-grid">${frequent.map(item=>`<button data-open-error="${item.key}" class="frequent-error"><span>${item.error.count}×</span><div><b>${esc(item.error.label)}</b><small>Thème ${item.meta?.theme.n||''} · ${esc(item.meta?.title||item.key)}</small></div></button>`).join('')}</div></section>`:''}
      <section class="theme-progress-list">${(window.WORKBOOK_PARTS||[]).flatMap(part=>part.themes.map(theme=>renderTheme(part,theme,progress))).join('')}</section>
    </section>`;
    bindTrackingEvents();
  }
  function renderTheme(part,theme,progress){
    const subjects=theme.s.map((title,index)=>{
      const key=`T${theme.n}-S${index+1}`;
      const subject=data.subjects[key]||{attempts:0,attemptDates:[],notes:'',errors:{}};
      return{key,title,number:index+1,subject,done:progress[key]==='done'};
    });
    const done=subjects.filter(item=>item.done).length;
    const attempts=subjects.reduce((sum,item)=>sum+(item.subject.attempts||0),0);
    const mistakes=subjects.reduce((sum,item)=>sum+errorCount(item.subject),0);
    const hasActivity=attempts||mistakes||subjects.some(item=>item.subject.notes);
    return `<details class="tracking-theme" ${hasActivity?'open':''}><summary><div class="tracking-theme-node">${theme.n}</div><div><b>Thème ${theme.n} — ${esc(theme.t)}</b><small>${done}/${subjects.length} sujets maîtrisés · ${attempts} essais · ${mistakes} erreurs</small></div><span>${Math.round(done/subjects.length*100)}%</span></summary><div class="tracking-subjects">${subjects.map(renderSubject).join('')}</div></details>`;
  }
  function renderSubject(item){
    const errors=Object.values(item.subject.errors||{}).sort((a,b)=>(b.count||0)-(a.count||0));
    const planned=errors.filter(error=>error.scheduledDate).length;
    const attemptDates=attemptsByDate(item.subject);
    return `<details class="tracking-subject ${errors.length||item.subject.notes?'has-data':''}"><summary><span class="subject-progress-status ${item.done?'done':''}">${item.done?'✓':item.number}</span><div><b>${esc(item.title)}</b><small>${item.subject.attempts||0} essai${item.subject.attempts===1?'':'s'} · ${errorCount(item.subject)} erreur${errorCount(item.subject)===1?'':'s'}${planned?` · ${planned} planifiée${planned>1?'s':''}`:''}</small></div><i>⌄</i></summary><div class="tracking-subject-body">
      <div class="subject-tracking-actions"><button data-open-subject="${item.key}">Ouvrir l’exercice</button>${attemptDates.length?`<span>${attemptDates.map(([date,count])=>`${count} essai${count>1?'s':''} le ${formatDate(date)}`).join(' · ')}</span>`:'<span>Aucun essai enregistré</span>'}</div>
      <label class="subject-note"><span>Mes notes sur ce sujet</span><textarea data-subject-note="${item.key}" placeholder="Ex. : je confonds le débit et le crédit du compte client ; à revoir avec un exemple…">${esc(item.subject.notes||'')}</textarea></label>
      <div class="subject-errors"><div class="tracking-section-title compact"><div><h4>Erreurs et points à revoir</h4><small>${errors.length?'Classement par fréquence':'Aucune erreur enregistrée pour le moment.'}</small></div></div>${errors.map(error=>renderError(item.key,error)).join('')}</div>
    </div></details>`;
  }
  function renderError(key,error){
    const due=error.scheduledDate?`Prévue ${formatDate(error.scheduledDate)}`:'Non planifiée';
    return `<article class="tracked-error" data-error-card="${key}|${esc(error.id)}"><div class="tracked-error-head"><span class="error-frequency">${error.count||1}×</span><div><b>${esc(error.label)}</b><small>${error.count>1?'Erreur récurrente':'Point à revoir'} · ${due}${error.reviews?` · révisée ${error.reviews} fois`:''}</small></div><button class="error-remove" data-remove-error="${key}|${esc(error.id)}" aria-label="Retirer cette erreur">×</button></div>
      <label class="error-note"><span>Pourquoi je me suis trompée / ce que je dois retenir</span><textarea data-error-note="${key}|${esc(error.id)}" placeholder="Ex. : je n’ai pas compris pourquoi le compte 411 est débité…">${esc(error.note||'')}</textarea></label>
      <div class="error-schedule"><span>Ajouter à l’agenda :</span><button data-schedule="${key}|${esc(error.id)}|2">+2 j</button><button data-schedule="${key}|${esc(error.id)}|3">+3 j</button><button data-schedule="${key}|${esc(error.id)}|4">+4 j</button><button data-schedule="${key}|${esc(error.id)}|5">+5 j</button><label><span>Date</span><input type="date" value="${error.scheduledDate||''}" data-custom-schedule="${key}|${esc(error.id)}"></label></div>
    </article>`;
  }
  function renderAgenda(){
    setActive('agenda');data=load();
    const items=scheduledErrors();
    const groups={};for(const item of items)(groups[item.error.scheduledDate]??=[]).push(item);
    const today=todayISO();
    const overdue=items.filter(item=>item.error.scheduledDate<today).length;
    const dueToday=items.filter(item=>item.error.scheduledDate===today).length;
    app.innerHTML=`<section class="agenda-view"><div class="tracking-heading"><div><p class="eyebrow">AGENDA DE RÉVISION</p><h2>Mes erreurs à revoir</h2><p>Chaque élément vient directement du suivi. Une fois révisé, il disparaît de l’agenda mais reste dans ton historique d’erreurs.</p></div><button class="tracking-agenda-link" data-go-tracking>Voir le suivi →</button></div>
      <div class="agenda-summary"><article><b>${dueToday}</b><small>à revoir aujourd’hui</small></article><article class="${overdue?'warning':''}"><b>${overdue}</b><small>en retard</small></article><article><b>${items.length}</b><small>révisions programmées</small></article></div>
      ${items.length?`<div class="agenda-groups">${Object.entries(groups).sort(([a],[b])=>a.localeCompare(b)).map(([date,group])=>renderAgendaGroup(date,group,today)).join('')}</div>`:`<div class="agenda-empty"><span>✓</span><h3>Aucune erreur planifiée</h3><p>Dans l’onglet Suivi, choisis une erreur puis programme-la dans 2, 3, 4 ou 5 jours.</p><button data-go-tracking>Ouvrir le suivi</button></div>`}
    </section>`;
    bindAgendaEvents();
  }
  function renderAgendaGroup(date,items,today){
    const state=date<today?'En retard':date===today?'Aujourd’hui':'À venir';
    return `<section class="agenda-day ${date<today?'overdue':date===today?'today':''}"><div class="agenda-day-heading"><div><span>${state}</span><h3>${formatDate(date)}</h3></div><b>${items.length}</b></div><div class="agenda-items">${items.map(item=>`<article class="agenda-item"><div class="agenda-item-main"><span class="error-frequency">${item.error.count||1}×</span><div><p>Thème ${item.meta?.theme.n||''} · Sujet ${item.meta?.subjectNumber||''}</p><h4>${esc(item.meta?.title||item.key)}</h4><b>${esc(item.error.label)}</b>${item.error.note?`<blockquote>${esc(item.error.note)}</blockquote>`:''}</div></div><div class="agenda-item-actions"><button data-agenda-open="${item.key}">Ouvrir l’exercice</button><button data-postpone="${item.key}|${esc(item.error.id)}|2">Reporter +2 j</button><button class="review-done" data-reviewed="${item.key}|${esc(item.error.id)}">Marquer comme révisé</button></div></article>`).join('')}</div></section>`;
  }
  function bindTrackingEvents(){
    app.querySelectorAll('[data-open-subject],[data-open-error]').forEach(button=>button.addEventListener('click',()=>openExercise(button.dataset.openSubject||button.dataset.openError)));
    app.querySelectorAll('[data-subject-note]').forEach(textarea=>textarea.addEventListener('input',()=>{subjectData(textarea.dataset.subjectNote).notes=textarea.value;save()}));
    app.querySelectorAll('[data-error-note]').forEach(textarea=>textarea.addEventListener('input',()=>{const [key,id]=textarea.dataset.errorNote.split('|');const error=subjectData(key).errors[id];if(error){error.note=textarea.value;save()}}));
    app.querySelectorAll('[data-schedule]').forEach(button=>button.addEventListener('click',()=>{const [key,id,days]=button.dataset.schedule.split('|');scheduleError(key,id,todayISO(+days));renderTracking()}));
    app.querySelectorAll('[data-custom-schedule]').forEach(input=>input.addEventListener('change',()=>{const [key,id]=input.dataset.customSchedule.split('|');scheduleError(key,id,input.value);renderTracking()}));
    app.querySelectorAll('[data-remove-error]').forEach(button=>button.addEventListener('click',()=>{const [key,id]=button.dataset.removeError.split('|');if(confirm('Retirer cette erreur du suivi ?')){removeError(key,id);renderTracking()}}));
    app.querySelectorAll('[data-go-agenda]').forEach(button=>button.addEventListener('click',renderAgenda));
  }
  function bindAgendaEvents(){
    app.querySelectorAll('[data-go-tracking]').forEach(button=>button.addEventListener('click',renderTracking));
    app.querySelectorAll('[data-agenda-open]').forEach(button=>button.addEventListener('click',()=>openExercise(button.dataset.agendaOpen)));
    app.querySelectorAll('[data-postpone]').forEach(button=>button.addEventListener('click',()=>{const [key,id,days]=button.dataset.postpone.split('|');scheduleError(key,id,todayISO(+days));renderAgenda()}));
    app.querySelectorAll('[data-reviewed]').forEach(button=>button.addEventListener('click',()=>{const [key,id]=button.dataset.reviewed.split('|');markReviewed(key,id);renderAgenda()}));
  }
  function enhanceQuestions(){
    const key=currentKey();if(!key)return;
    document.querySelectorAll('.question').forEach((question,index)=>{
      if(question.querySelector('.manual-error-button'))return;
      const prompt=normalize([...question.children].find(node=>node.tagName==='P'||node.tagName==='SPAN')?.textContent)||`Question ${index+1}`;
      const button=document.createElement('button');
      button.type='button';button.className='manual-error-button';button.textContent='⚑ Ajouter ce point à mes erreurs';
      button.addEventListener('click',()=>{if(button.dataset.logged)return;recordError(key,`manual-q${index}`,`Question ${index+1} — ${prompt}`,'manual');button.dataset.logged='true';button.textContent='✓ Ajouté au suivi';button.classList.add('logged')});
      question.appendChild(button);
    });
  }
  function captureAttempt(){
    const exercise=document.querySelector('.exercise');
    const key=currentKey();
    if(!exercise||!key||exercise.dataset.trackingAttempt)return;
    exercise.dataset.trackingAttempt='true';
    const subject=subjectData(key);subject.attempts=(subject.attempts||0)+1;subject.attemptDates.push(todayISO());
    document.querySelectorAll('.question').forEach((question,index)=>{
      const chips=[...question.querySelectorAll('.chips .chip')];
      if(!chips.length)return;
      const selected=chips.find(chip=>chip.classList.contains('selected'));
      if(selected&&selected!==chips[0]){
        const prompt=normalize([...question.children].find(node=>node.tagName==='P'||node.tagName==='SPAN')?.textContent)||`Question ${index+1}`;
        recordError(key,`qcm-q${index}`,`Question ${index+1} — ${prompt}`,'qcm');
      }
    });
    document.querySelectorAll('.table-cell-chips').forEach((group,index)=>{
      const selected=group.querySelector('.table-chip.selected');if(!selected)return;
      const correct=decodeURIComponent(group.dataset.correct||'');
      const value=decodeURIComponent(selected.dataset.value||'');
      if(value!==correct){
        const cell=group.closest('td');const row=cell?.parentElement;const rowIndex=row?[...row.parentElement.children].indexOf(row)+1:index+1;const colIndex=cell?[...row.children].indexOf(cell)+1:1;
        recordError(key,`table-r${rowIndex}-c${colIndex}`,`Tableau à compléter — ligne ${rowIndex}, colonne ${colIndex}`,'table');
      }
    });
    save();
  }
  function observeExercise(){
    enhanceQuestions();
    if(document.querySelector('.exercise')||document.querySelector('.section-heading'))setActive('parcours');
  }

  nav.addEventListener('click',event=>{
    const button=event.target.closest('[data-view]');if(!button)return;
    const view=button.dataset.view;
    if(view==='parcours'){setActive('parcours');if(typeof window.renderHome==='function')window.renderHome()}
    if(view==='suivi')renderTracking();
    if(view==='agenda')renderAgenda();
  });
  app.addEventListener('click',event=>{
    if(!event.target.closest('#showCorrection'))return;
    setTimeout(()=>{const correction=document.querySelector('#correction');if(correction&&!correction.hidden)captureAttempt()},0);
  });
  new MutationObserver(observeExercise).observe(app,{childList:true,subtree:true});
  observeExercise();
})();