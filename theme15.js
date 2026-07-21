window.EXERCISES=window.EXERCISES||{};
Object.assign(window.EXERCISES,{
'T15-S1':{
 statement:`La société Xavier arrête ses exercices le 31 décembre. À l'issue de l'inventaire, on relève les faits suivants au 31 décembre N :<br><br>– l'entreprise est en litige avec le salarié Neker pour licenciement abusif : elle décide de créer une provision de 3 500 € ;<br>– une provision de 1 230 € a été constituée à l'inventaire précédent pour une amende fiscale, payée le 15 avril N pour 1 200 € ;<br>– le compte 476 Différence de conversion – Actif a été débité de 740 € à la suite de l'actualisation d'une créance en monnaie étrangère. Aucune autre écriture n'a été enregistrée.`,
 questions:[
  {text:'Quel montant doit être provisionné au titre du litige avec le salarié Neker ?',choices:['3 500 €','1 230 €','740 €','4 240 €']},
  {text:'Quelle opération faut-il enregistrer pour l'ancienne provision relative à l'amende fiscale ?',choices:['Une reprise de 1 230 €','Une dotation de 1 230 €','Une reprise de 1 200 €','Aucune écriture']},
  {text:'Quel montant doit être provisionné au titre de la perte latente de change ?',choices:['740 €','1 230 €','3 500 €','0 €']},
  {text:'Enregistrez les écritures d'inventaire nécessaires au 31 décembre N.'},
  {text:'Présentez l'extrait du bilan relatif aux provisions pour risques au 31 décembre N.'}
 ],
 correction:`La provision pour litige s'élève à <b>3 500 €</b>.<br>La provision pour amende fiscale est devenue sans objet : elle doit être reprise pour <b>1 230 €</b>.<br>La perte latente de change entraîne une provision de <b>740 €</b>.<br>Le poste « Provisions pour risques » au bilan s'élève à 1 230 + 3 500 + 740 – 1 230 = <b>4 240 €</b>.`,
 correctionTable:{headers:['Compte débité','Débit','Compte crédité','Crédit'],rows:[['6815 Dotations aux provisions d’exploitation','3 500 €','1511 Provisions pour litiges','3 500 €'],['1514 Provisions pour amendes et pénalités','1 230 €','7875 Reprises sur provisions exceptionnelles','1 230 €'],['6865 Dotations aux provisions pour risques et charges financières','740 €','1515 Provisions pour pertes de change','740 €']]}
},
'T15-S2':{
 statement:`La société Quik Net a acquis au cours de l'exercice N un matériel industriel de repassage qui nécessite des travaux de révision tous les trois ans. Le coût prévisible des travaux est évalué à 1 140 € hors taxes, TVA 20 %. La première révision sera réalisée en juin N+3.`,
 questions:[
  {text:'Quel montant de provision doit être constitué à la clôture de chacun des exercices N, N+1 et N+2 ?',choices:['380 €','1 140 €','456 €','228 €']},
  {text:'Quel est le solde du compte 1572 au 31 décembre N+2 ?',choices:['1 140 €','380 €','760 €','1 368 €']},
  {text:'Enregistrez l'écriture de dotation au 31 décembre N.'},
  {text:'Enregistrez les opérations de juin N+3 et celles de l'inventaire N+3.'}
 ],
 correction:`À chaque clôture N, N+1 et N+2, la société constitue un tiers de la provision : 1 140 / 3 = <b>380 €</b>.<br>Au 31 décembre N+2, le solde du compte 1572 atteint <b>1 140 €</b>.<br>En juin N+3, la dépense est comptabilisée pour 1 140 € HT et 228 € de TVA. À l'inventaire N+3, la provision globale de 1 140 € est reprise.`,
 correctionTable:{headers:['Date et écriture','Débit','Crédit'],rows:[['31/12/N — 6815 Dotations / 1572 Provision pour gros entretien','380 €','380 €'],['Juin N+3 — 615 Entretien et réparations','1 140 €','401 Fournisseurs : 1 368 €'],['Juin N+3 — 44566 TVA déductible','228 €',''],['31/12/N+3 — 1572 Provision / 7815 Reprise','1 140 €','1 140 €']]}
}
});