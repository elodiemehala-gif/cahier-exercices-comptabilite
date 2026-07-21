window.EXERCISES=window.EXERCISES||{};
Object.assign(window.EXERCISES,{
'T18-S1':{
 statement:`L’entreprise La Sanglière exerce à la fois une activité commerciale et une activité de production. Les éléments suivants sont communiqués pour l’exercice N :<br><br>– ventes de marchandises : 800 000 € ;<br>– achats de marchandises : 350 000 € ;<br>– variation de stock de marchandises : + 50 000 € ;<br>– production vendue : 2 200 000 € ;<br>– production stockée : 200 000 € ;<br>– achats de matières premières et autres charges externes : 800 000 € ;<br>– variation de stock de matières premières : – 40 000 € ;<br>– autres consommations externes : 240 000 €.<br><br>Présentez les soldes intermédiaires de gestion demandés.`,
 questions:[
  {text:'Quelle activité l’entreprise exerce-t-elle ?'},
  {text:'Calculez la marge commerciale.',choices:['400 000 €','350 000 €','450 000 €','800 000 €']},
  {text:'Calculez la production de l’exercice.',choices:['2 400 000 €','2 200 000 €','2 000 000 €','2 600 000 €']},
  {text:'Calculez la valeur ajoutée.',choices:['2 000 000 €','1 600 000 €','2 400 000 €','1 200 000 €']}
 ],
 correction:`L’entreprise exerce une <b>activité commerciale</b> et une <b>activité de production</b>.<br>Marge commerciale : 800 000 – (350 000 + 50 000) = <b>400 000 €</b>.<br>Production de l’exercice : 2 200 000 + 200 000 = <b>2 400 000 €</b>.<br>Valeur ajoutée : 400 000 + 2 400 000 – [(800 000 – 40 000) + 240 000] = <b>2 000 000 €</b>.`,
 correctionTable:{headers:['Solde','Calcul','Montant'],rows:[['Marge commerciale','800 000 – 400 000','400 000 €'],['Production de l’exercice','2 200 000 + 200 000','2 400 000 €'],['Valeur ajoutée','400 000 + 2 400 000 – 1 000 000','2 000 000 €']]}
},
'T18-S2':{
 statement:`Une entreprise communique les données suivantes pour l’exercice N :<br><br>– ventes de marchandises : 180 000 € ; coût d’achat des marchandises vendues : 108 000 € ;<br>– production vendue : 1 500 000 € ; production stockée : 105 000 € ; production immobilisée : 15 000 € ;<br>– consommations en provenance des tiers : 795 000 € ;<br>– subventions d’exploitation : 45 000 € ;<br>– impôts et taxes : 75 000 € ;<br>– charges de personnel : 375 000 € ;<br>– charges financières décaissables : 45 000 € ;<br>– produits financiers encaissables : 7 500 € ;<br>– produits exceptionnels encaissables : 7 500 € ;<br>– charges exceptionnelles décaissables : 4 000 € ;<br>– participation et impôt sur les bénéfices : 54 000 €.<br><br>Calculez l’EBE puis la capacité d’autofinancement par la méthode soustractive.`,
 questions:[
  {text:'Calculez la marge commerciale.',choices:['72 000 €','108 000 €','180 000 €','897 000 €']},
  {text:'Calculez la production de l’exercice.',choices:['1 620 000 €','1 500 000 €','1 605 000 €','1 515 000 €']},
  {text:'Calculez la valeur ajoutée.',choices:['897 000 €','492 000 €','1 620 000 €','825 000 €']},
  {text:'Calculez l’excédent brut d’exploitation.',choices:['492 000 €','897 000 €','447 000 €','417 000 €']},
  {text:'Déterminez la capacité d’autofinancement.'}
 ],
 correction:`Marge commerciale : 180 000 – 108 000 = <b>72 000 €</b>.<br>Production de l’exercice : 1 500 000 + 105 000 + 15 000 = <b>1 620 000 €</b>.<br>Valeur ajoutée : 72 000 + 1 620 000 – 795 000 = <b>897 000 €</b>.<br>EBE : 897 000 + 45 000 – 75 000 – 375 000 = <b>492 000 €</b>.<br>CAF : 492 000 + 7 500 + 7 500 – 45 000 – 4 000 – 54 000 = <b>404 000 €</b>.`,
 correctionTable:{headers:['Étape','Montant'],rows:[['Marge commerciale','72 000 €'],['Production de l’exercice','1 620 000 €'],['Valeur ajoutée','897 000 €'],['Excédent brut d’exploitation','492 000 €'],['Capacité d’autofinancement','404 000 €']]}
},
'T18-S3':{
 statement:`L’entreprise Soléna présente un compte de résultat simplifié pour l’exercice N :<br><br>Produits d’exploitation : ventes de marchandises 15 681 €, production vendue 278 000 €, production stockée 1 925 €, reprises et transferts de charges 7 550 €.<br><br>Charges d’exploitation : achats de marchandises 6 574 €, variation de stock + 375 €, achats de matières premières 69 626 €, variation de stock – 1 533 €, autres achats et charges externes 28 550 €, impôts et taxes 8 574 €, salaires 112 000 €, charges sociales 50 400 €, dotations aux amortissements 9 000 €, dotations aux dépréciations de l’actif circulant 6 485 €, autres charges 6 000 €.<br><br>Produits financiers : 2 550 € d’intérêts, 150 € de reprises et 87 € de produits nets sur cessions de VMP. Charges financières : 1 270 €.<br><br>Produits exceptionnels : 1 300 € sur opérations de gestion et 3 200 € sur opérations de capital. Charges exceptionnelles sur opérations de capital : 3 400 €. Impôt sur les bénéfices : 1 100 €. Résultat net : 9 722 €.`,
 questions:[
  {text:'Établissez le tableau des soldes intermédiaires de gestion.'},
  {text:'Quel est le résultat d’exploitation ?',choices:['7 105 €','9 722 €','8 622 €','1 517 €']},
  {text:'Quel est le résultat financier ?',choices:['1 517 €','2 787 €','1 270 €','1 100 €']},
  {text:'Déterminez la capacité d’autofinancement par la méthode additive à partir du résultat net.'}
 ],
 correction:`Résultat d’exploitation : 303 156 – 296 051 = <b>7 105 €</b>.<br>Résultat financier : 2 787 – 1 270 = <b>1 517 €</b>.<br>Résultat exceptionnel : 4 500 – 3 400 = <b>1 100 €</b>.<br>CAF par la méthode additive : résultat net 9 722 + dotations 15 485 – reprises 7 700 – produits de cession d’immobilisations 3 200 + valeur comptable des immobilisations cédées 3 400 = <b>17 707 €</b>.`,
 correctionTable:{headers:['Solde','Montant'],rows:[['Résultat d’exploitation','7 105 €'],['Résultat financier','1 517 €'],['Résultat courant avant impôts','8 622 €'],['Résultat exceptionnel','1 100 €'],['Résultat net','9 722 €'],['Capacité d’autofinancement','17 707 €']]}
}
});