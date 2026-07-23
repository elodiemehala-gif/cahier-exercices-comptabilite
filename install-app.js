(()=>{
  const button=document.querySelector('#installBtn');
  if(!button)return;

  let installPrompt=null;
  const isStandalone=()=>window.matchMedia('(display-mode: standalone)').matches||window.navigator.standalone===true;

  function toast(message){
    document.querySelector('.install-toast')?.remove();
    const node=document.createElement('div');
    node.className='install-toast';
    node.setAttribute('role','status');
    node.textContent=message;
    document.body.appendChild(node);
    requestAnimationFrame(()=>node.classList.add('visible'));
    setTimeout(()=>{node.classList.remove('visible');setTimeout(()=>node.remove(),250)},4200);
  }

  function instructions(){
    document.querySelector('.install-dialog')?.remove();
    const overlay=document.createElement('div');
    overlay.className='install-dialog';
    overlay.innerHTML=`<div class="install-dialog-card" role="dialog" aria-modal="true" aria-labelledby="installTitle">
      <button type="button" class="install-dialog-close" aria-label="Fermer">×</button>
      <div class="install-dialog-icon">▥</div>
      <p class="eyebrow">INSTALLATION ANDROID</p>
      <h2 id="installTitle">Installer Comptabilité</h2>
      <p>Ouvre cette page dans <b>Google Chrome</b>, puis touche le menu <b>⋮</b> en haut à droite et choisis <b>Installer l’application</b>.</p>
      <p class="install-dialog-note">Choisis bien « Installer l’application » plutôt que la création d’un simple raccourci. L’application apparaîtra alors parmi tes autres applications et s’ouvrira sans barre Internet.</p>
      <button type="button" class="install-dialog-ok">J’ai compris</button>
    </div>`;
    const close=()=>overlay.remove();
    overlay.addEventListener('click',event=>{if(event.target===overlay)close()});
    overlay.querySelector('.install-dialog-close').addEventListener('click',close);
    overlay.querySelector('.install-dialog-ok').addEventListener('click',close);
    document.body.appendChild(overlay);
  }

  function updateButton(){
    if(isStandalone()){
      button.hidden=true;
      document.documentElement.classList.add('installed-app');
      return;
    }
    document.documentElement.classList.remove('installed-app');
    button.hidden=false;
    button.textContent='Installer l’app';
    button.setAttribute('aria-label','Installer Comptabilité sur ce téléphone');
  }

  window.addEventListener('beforeinstallprompt',event=>{
    event.preventDefault();
    installPrompt=event;
    button.onclick=null;
    updateButton();
  });

  button.addEventListener('click',async event=>{
    event.preventDefault();
    if(isStandalone())return;
    if(!installPrompt){instructions();return}
    try{
      await installPrompt.prompt();
      const choice=await installPrompt.userChoice;
      installPrompt=null;
      if(choice.outcome==='accepted'){
        try{await navigator.storage?.persist?.()}catch{}
        toast('Installation lancée. L’icône Comptabilité va apparaître parmi tes applications.');
      }
    }catch{
      instructions();
    }
  });

  window.addEventListener('appinstalled',async()=>{
    installPrompt=null;
    try{await navigator.storage?.persist?.()}catch{}
    updateButton();
    toast('Comptabilité est installée et prête à fonctionner hors connexion.');
  });

  window.matchMedia('(display-mode: standalone)').addEventListener?.('change',updateButton);
  updateButton();
})();