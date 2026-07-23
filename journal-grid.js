(()=>{
  const app=document.querySelector('#app');
  if(!app)return;

  const JOURNAL_PATTERN=/(?:au\s+journal|dans\s+le\s+journal|journalis(?:er|ez)|comptabilis(?:er|ez)|pass(?:er|ez)\s+(?:l['’]\s*)?écriture|enregistr(?:er|ez)[^.!?]*(?:écriture|opération)|écritures?\s+(?:comptables?|nécessaires?|d['’]inventaire|de\s+fin)|présent(?:er|ez)[^.!?]*écritures?)/i;

  function normalize(value){return String(value??'').replace(/\s+/g,' ').trim()}
  function exerciseKey(){
    const label=document.querySelector('.exercise .eyebrow')?.textContent||'';
    const match=label.match(/THÈME\s+(\d+)\s+·\s+SUJET\s+(\d+)\//i);
    return match?`T${match[1]}-S${match[2]}`:'journal-exercise';
  }
  function questionNumber(question){
    return normalize(question.querySelector('.question-label span')?.textContent)||'1';
  }
  function questionText(question){
    const node=[...question.children].find(child=>child.matches?.(':scope > p, :scope > span'));
    return normalize(node?.textContent);
  }
  function sourceOperations(){
    const statementPanel=[...document.querySelectorAll('.exercise-panel')].find(panel=>normalize(panel.querySelector('h3')?.textContent).toLowerCase()==='énoncé');
    if(!statementPanel)return[];
    const tables=[...statementPanel.querySelectorAll('.table-wrap table')].filter(table=>!table.closest('.answer-template'));
    for(const table of tables){
      const headers=[...table.querySelectorAll('thead th')].map(th=>normalize(th.textContent).toLowerCase());
      const dateIndex=headers.findIndex(h=>h.includes('date'));
      const operationIndex=headers.findIndex(h=>h.includes('opération')||h.includes('operation'));
      if(dateIndex<0||operationIndex<0)continue;
      return [...table.querySelectorAll('tbody tr')].map(row=>({
        date:normalize(row.cells[dateIndex]?.textContent),
        operation:normalize(row.cells[operationIndex]?.textContent)
      })).filter(item=>item.date||item.operation);
    }
    return[];
  }
  function storageBase(question,operationIndex){
    return `${exerciseKey()}-journal-q${questionNumber(question)}-op${operationIndex}`;
  }
  function input(field,base,rowIndex,placeholder,inputMode='text'){
    const element=document.createElement('input');
    element.type='text';
    element.className=`journal-input journal-${field}`;
    element.placeholder=placeholder;
    element.inputMode=inputMode;
    const key=`${base}-r${rowIndex}-${field}`;
    element.value=localStorage.getItem(key)||'';
    element.addEventListener('input',()=>localStorage.setItem(key,element.value));
    return element;
  }
  function addRow(tbody,base,rowIndex,withDate){
    const row=document.createElement('tr');
    row.dataset.row=String(rowIndex);
    if(withDate){
      const dateCell=document.createElement('td');
      dateCell.appendChild(input('date',base,rowIndex,'JJ/MM'));
      row.appendChild(dateCell);
    }
    const accountCell=document.createElement('td');
    accountCell.appendChild(input('account',base,rowIndex,'N° compte','numeric'));
    const labelCell=document.createElement('td');
    labelCell.appendChild(input('label',base,rowIndex,'Intitulé du compte'));
    const debitCell=document.createElement('td');
    debitCell.appendChild(input('debit',base,rowIndex,'0,00','decimal'));
    const creditCell=document.createElement('td');
    creditCell.appendChild(input('credit',base,rowIndex,'0,00','decimal'));
    row.append(accountCell,labelCell,debitCell,creditCell);
    tbody.appendChild(row);
  }
  function buildEntry(question,operation,operationIndex,totalOperations){
    const base=storageBase(question,operationIndex);
    const savedRows=Number(localStorage.getItem(`${base}-rows`));
    const defaultRows=operation?3:5;
    const rowCount=Number.isFinite(savedRows)&&savedRows>0?savedRows:defaultRows;
    const wrapper=document.createElement(operation?'details':'section');
    wrapper.className='journal-entry';
    if(operation&&operationIndex===0)wrapper.open=true;

    if(operation){
      const summary=document.createElement('summary');
      const date=document.createElement('span');
      date.className='journal-date';
      date.textContent=operation.date||`Opération ${operationIndex+1}`;
      const title=document.createElement('div');
      title.innerHTML=`<b>Écriture ${operationIndex+1}${totalOperations?` / ${totalOperations}`:''}</b><small></small>`;
      title.querySelector('small').textContent=operation.operation||'Opération à comptabiliser';
      const arrow=document.createElement('i');
      arrow.textContent='⌄';
      summary.append(date,title,arrow);
      wrapper.appendChild(summary);
    }

    const body=document.createElement('div');
    body.className='journal-entry-body';
    const tableWrap=document.createElement('div');
    tableWrap.className='journal-table-wrap';
    const table=document.createElement('table');
    table.className='journal-table';
    const withDate=!operation;
    table.innerHTML=`<thead><tr>${withDate?'<th>Date</th>':''}<th>N° de compte</th><th>Intitulé du compte</th><th>Débit</th><th>Crédit</th></tr></thead><tbody></tbody>`;
    const tbody=table.querySelector('tbody');
    for(let rowIndex=0;rowIndex<rowCount;rowIndex++)addRow(tbody,base,rowIndex,withDate);
    tableWrap.appendChild(table);

    const footer=document.createElement('div');
    footer.className='journal-entry-footer';
    const wording=document.createElement('label');
    wording.className='journal-wording';
    wording.innerHTML='<span>Libellé de l’écriture</span>';
    const wordingInput=document.createElement('input');
    wordingInput.type='text';
    wordingInput.placeholder='Motif, pièce justificative ou tiers concerné';
    wordingInput.value=localStorage.getItem(`${base}-wording`)||'';
    wordingInput.addEventListener('input',()=>localStorage.setItem(`${base}-wording`,wordingInput.value));
    wording.appendChild(wordingInput);

    const addButton=document.createElement('button');
    addButton.type='button';
    addButton.className='journal-add-row';
    addButton.textContent='＋ Ajouter une ligne';
    addButton.addEventListener('click',()=>{
      const next=tbody.rows.length;
      addRow(tbody,base,next,withDate);
      localStorage.setItem(`${base}-rows`,String(next+1));
      tbody.lastElementChild?.querySelector('input')?.focus();
    });

    footer.append(wording,addButton);
    body.append(tableWrap,footer);
    wrapper.appendChild(body);
    return wrapper;
  }
  function moveNotes(question){
    const textarea=question.querySelector(':scope > textarea');
    if(!textarea||question.querySelector('.journal-notes'))return;
    const voice=question.querySelector(':scope > .voice-controls');
    const notes=document.createElement('details');
    notes.className='journal-notes';
    const summary=document.createElement('summary');
    summary.textContent='Ajouter une explication écrite ou orale (facultatif)';
    notes.appendChild(summary);
    textarea.placeholder='Explication ou remarque complémentaire…';
    notes.appendChild(textarea);
    if(voice)notes.appendChild(voice);
    question.appendChild(notes);
  }
  function enhanceQuestion(question){
    if(question.dataset.journalReady)return;
    const text=questionText(question);
    if(!JOURNAL_PATTERN.test(text))return;
    question.dataset.journalReady='true';
    const workspace=document.createElement('div');
    workspace.className='journal-workspace';
    const heading=document.createElement('div');
    heading.className='journal-workspace-heading';
    heading.innerHTML='<span>▤</span><div><b>Journal comptable à compléter</b><small>Une ligne par compte : numéro, intitulé, montant au débit ou au crédit.</small></div>';
    workspace.appendChild(heading);

    const operations=sourceOperations();
    const useOperations=operations.length>0&&/(?:toutes?\s+les\s+opérations|opérations?[^.!?]*au\s+journal|enregistr(?:er|ez)[^.!?]*au\s+journal)/i.test(text);
    if(useOperations){
      operations.forEach((operation,index)=>workspace.appendChild(buildEntry(question,operation,index,operations.length)));
    }else{
      workspace.appendChild(buildEntry(question,null,0,0));
    }

    const textNode=[...question.children].find(child=>child.matches?.(':scope > p, :scope > span'));
    textNode?.insertAdjacentElement('afterend',workspace);
    moveNotes(question);
  }
  function enhance(){document.querySelectorAll('.question').forEach(enhanceQuestion)}
  new MutationObserver(enhance).observe(app,{childList:true,subtree:true});
  enhance();
})();