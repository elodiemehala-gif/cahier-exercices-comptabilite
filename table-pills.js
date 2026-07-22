(()=>{
  const app=document.querySelector('#app');
  if(!app)return;

  function hash(value){let h=0;for(const c of String(value))h=(h*31+c.charCodeAt(0))>>>0;return h}
  function normalize(value){return String(value??'').replace(/\s+/g,' ').trim()||'—'}
  function moneyNumber(value){
    const text=normalize(value);
    if(!/€/.test(text))return null;
    const match=text.match(/-?\d{1,3}(?:[ .\u202f]\d{3})*(?:,\d{1,2})?/);
    if(!match)return null;
    const number=Number(match[0].replace(/[ .\u202f]/g,'').replace(',','.'));
    return Number.isFinite(number)?number:null;
  }
  function formatEuro(value){return `${new Intl.NumberFormat('fr-FR',{minimumFractionDigits:Number.isInteger(value)?0:2,maximumFractionDigits:2}).format(value)} €`}
  function unique(values){return [...new Set(values.map(normalize))]}
  function choicesFor(correct,rowIndex,colIndex,matrix,exerciseKey){
    const answer=normalize(correct);
    const isMoney=moneyNumber(answer)!==null;
    let pool=[];
    const sameColumn=matrix.map(row=>normalize(row[colIndex])).filter(value=>value!==answer);
    const allValues=matrix.flat().map(normalize).filter(value=>value!==answer);

    if(isMoney){
      pool.push(...sameColumn.filter(value=>moneyNumber(value)!==null));
      pool.push(...allValues.filter(value=>moneyNumber(value)!==null));
      const amount=moneyNumber(answer);
      if(amount!==null){
        pool.push(formatEuro(Math.round(amount*.8*100)/100));
        pool.push(formatEuro(Math.round(amount*1.2*100)/100));
        pool.push(formatEuro(Math.round(amount*.9*100)/100));
        pool.push('0 €');
      }
    }else{
      pool.push(...sameColumn.filter(value=>moneyNumber(value)===null));
      pool.push(...allValues.filter(value=>moneyNumber(value)===null));
      pool.push('À déterminer','Aucun élément');
    }

    pool=unique(pool).filter(value=>value!==answer);
    pool.sort((a,b)=>hash(`${exerciseKey}-${rowIndex}-${colIndex}-${a}`)-hash(`${exerciseKey}-${rowIndex}-${colIndex}-${b}`));
    while(pool.length<2)pool.push(pool.length?'Autre réponse':'À déterminer');
    const choices=unique([answer,pool[0],pool[1]]);
    choices.sort((a,b)=>hash(`${exerciseKey}-order-${rowIndex}-${colIndex}-${a}`)-hash(`${exerciseKey}-order-${rowIndex}-${colIndex}-${b}`));
    return choices;
  }
  function exerciseKey(){
    const label=document.querySelector('.exercise .eyebrow')?.textContent||'';
    const match=label.match(/THÈME\s+(\d+)\s+·\s+SUJET\s+(\d+)\//i);
    return match?`T${match[1]}-S${match[2]}`:'table-exercise';
  }
  function buildPills(template,correctionTable,key){
    const correctionRows=[...correctionTable.querySelectorAll('tbody tr')];
    const matrix=correctionRows.map(row=>[...row.cells].map(cell=>normalize(cell.textContent)));
    const templateRows=[...template.querySelectorAll('tbody tr')];

    templateRows.forEach((row,rowIndex)=>{
      [...row.cells].forEach((cell,colIndex)=>{
        const correct=matrix[rowIndex]?.[colIndex]??'—';
        const answerKey=`${key}-table-${rowIndex}-${colIndex}`;
        const selected=localStorage.getItem(answerKey)||'';
        const group=document.createElement('div');
        group.className='table-cell-chips';
        group.dataset.correct=encodeURIComponent(correct);
        group.dataset.answerKey=answerKey;

        choicesFor(correct,rowIndex,colIndex,matrix,key).forEach(choice=>{
          const button=document.createElement('button');
          button.type='button';
          button.className='table-chip';
          button.textContent=choice;
          button.dataset.value=encodeURIComponent(choice);
          if(choice===selected)button.classList.add('selected');
          button.addEventListener('click',()=>{
            group.querySelectorAll('.table-chip').forEach(item=>item.classList.remove('selected'));
            button.classList.add('selected');
            localStorage.setItem(answerKey,choice);
          });
          group.appendChild(button);
        });
        cell.replaceChildren(group);
      });
    });
  }
  function enhance(){
    const template=document.querySelector('.answer-template:not([data-pills-ready])');
    if(!template)return;
    template.dataset.pillsReady='true';
    const guided=!!document.querySelector('.mode.active[data-mode="guided"]');
    const help=template.querySelector('.answer-template-title small');
    if(!guided){
      if(help)help.textContent='Complète librement le tableau, puis affiche le corrigé.';
      return;
    }
    const correctionTable=document.querySelector('#correction .table-wrap table');
    if(!correctionTable)return;
    if(help)help.textContent='Choisis une pastille dans chaque case, puis vérifie avec le corrigé.';
    buildPills(template,correctionTable,exerciseKey());
  }
  function grade(showAnswers){
    document.querySelectorAll('.table-cell-chips').forEach(group=>{
      const correct=decodeURIComponent(group.dataset.correct||'');
      group.querySelectorAll('.table-chip').forEach(button=>{
        button.classList.remove('correct','wrong');
        if(!showAnswers)return;
        const value=decodeURIComponent(button.dataset.value||'');
        if(value===correct)button.classList.add('correct');
        else if(button.classList.contains('selected'))button.classList.add('wrong');
      });
    });
  }

  app.addEventListener('click',event=>{
    if(!event.target.closest('#showCorrection'))return;
    setTimeout(()=>{
      const correction=document.querySelector('#correction');
      grade(correction&&!correction.hidden);
    },0);
  });

  new MutationObserver(enhance).observe(app,{childList:true,subtree:true});
  enhance();
})();