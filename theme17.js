window.EXERCISES=window.EXERCISES||{};
Object.assign(window.EXERCISES,{
'T17-S1':{
 statement:`Une entreprise prépare ses comptes annuels à la clôture de l'exercice N. Plusieurs utilisateurs souhaitent les consulter : dirigeants, associés, salariés, banques, fournisseurs, clients, administration fiscale et investisseurs potentiels.`,
 questions:[
  {text:'Quels documents composent les comptes annuels ?',choices:['Bilan, compte de résultat et annexe','Journal, grand livre et balance','Budget, devis et facture','Tableau de trésorerie uniquement']},
  {text:'Quel utilisateur s'intéresse surtout à la solvabilité de l'entreprise ?',choices:['La banque','Le salarié uniquement','Le client uniquement','Le greffe uniquement']},
  {text:'Pourquoi les associés consultent-ils les comptes annuels ?'},
  {text:'Associez chaque utilisateur à son besoin principal d'information.'}
 ],
 correction:`Les comptes annuels comprennent le <b>bilan</b>, le <b>compte de résultat</b> et l'<b>annexe</b>.<br>Les dirigeants pilotent l'activité ; les associés apprécient la rentabilité et le patrimoine ; les banques étudient la solvabilité ; les fournisseurs évaluent le risque de non-paiement ; l'administration contrôle notamment l'assiette fiscale ; les salariés s'intéressent à la pérennité de l'entreprise.`
},
'T17-S2':{
 statement:`La société Alizé vous communique les soldes suivants au 31 décembre N : ventes de marchandises 420 000 €, production vendue 68 000 €, achats de marchandises 246 000 €, variation de stock de marchandises – 8 000 €, autres achats et charges externes 74 500 €, impôts et taxes 12 600 €, salaires 82 000 €, charges sociales 36 500 €, dotations d'exploitation 18 400 €, autres produits d'exploitation 2 500 €, autres charges d'exploitation 1 700 €, produits financiers 1 200 €, charges financières 4 900 €, produits exceptionnels 3 600 €, charges exceptionnelles 2 100 €, impôt sur les bénéfices 4 800 €.`,
 questions:[
  {text:'Calculez le total des produits d’exploitation.',choices:['492 500 €','488 000 €','491 300 €','420 000 €']},
  {text:'Calculez le total des charges d’exploitation.',choices:['463 700 €','471 700 €','455 700 €','438 000 €']},
  {text:'Déterminez le résultat d’exploitation.'},
  {text:'Déterminez le résultat financier, le résultat exceptionnel et le résultat net.'},
  {text:'Présentez le compte de résultat en système de base.'}
 ],
 correction:`Produits d'exploitation : 420 000 + 68 000 + 2 500 = <b>490 500 €</b>.<br>Charges d'exploitation : 246 000 – 8 000 + 74 500 + 12 600 + 82 000 + 36 500 + 18 400 + 1 700 = <b>463 700 €</b>.<br>Résultat d'exploitation : <b>26 800 €</b>.<br>Résultat financier : 1 200 – 4 900 = <b>– 3 700 €</b>.<br>Résultat exceptionnel : 3 600 – 2 100 = <b>1 500 €</b>.<br>Résultat net : 26 800 – 3 700 + 1 500 – 4 800 = <b>19 800 €</b>.`
},
'T17-S3':{
 statement:`La société Boréal présente les éléments suivants au 31 décembre N : immobilisations brutes 310 000 €, amortissements et dépréciations 96 000 €, stocks 54 000 €, créances clients 83 000 €, autres créances 12 000 €, disponibilités 18 000 €, capital 120 000 €, réserves 36 000 €, résultat de l'exercice 19 800 €, emprunts 145 000 €, dettes fournisseurs 86 000 €, dettes fiscales et sociales 49 000 €, autres dettes 21 200 €.`,
 questions:[
  {text:'Quelle est la valeur nette des immobilisations ?',choices:['214 000 €','310 000 €','406 000 €','96 000 €']},
  {text:'Calculez le total de l’actif.'},
  {text:'Calculez le total des capitaux propres.'},
  {text:'Vérifiez l’égalité entre l’actif et le passif.'},
  {text:'Présentez le bilan en système de base.'}
 ],
 correction:`Immobilisations nettes : 310 000 – 96 000 = <b>214 000 €</b>.<br>Total actif : 214 000 + 54 000 + 83 000 + 12 000 + 18 000 = <b>381 000 €</b>.<br>Capitaux propres : 120 000 + 36 000 + 19 800 = <b>175 800 €</b>.<br>Total passif : 175 800 + 145 000 + 86 000 + 49 000 + 21 200 = <b>477 000 €</b>.<br>Les données ne permettent donc pas l'équilibre : il faut rechercher une omission ou une erreur de classement de <b>96 000 €</b>. Cette question entraîne précisément au contrôle de cohérence du bilan.`
},
'T17-S4':{
 statement:`La société Orion doit établir ses comptes annuels après inventaire. Les opérations suivantes restent à traiter : stock final de marchandises 41 000 €, dotation aux amortissements 12 500 €, créance client douteuse de 6 000 € TTC dépréciée à 60 %, prime d'assurance payée d'avance 1 800 € dont 1 350 € concernent N+1, facture fournisseur non parvenue 2 400 € HT, TVA 20 %, produit à recevoir 3 000 € HT, TVA 20 %. Avant inventaire, le résultat provisoire est bénéficiaire de 38 000 €.`,
 questions:[
  {text:'Quel est le montant de la dépréciation de la créance douteuse ?',choices:['3 000 €','3 600 €','6 000 €','2 500 €']},
  {text:'Quel montant doit être constaté en charge constatée d’avance ?',choices:['1 350 €','450 €','1 800 €','2 400 €']},
  {text:'Enregistrez les écritures d’inventaire.'},
  {text:'Expliquez l’incidence de chaque ajustement sur le résultat.'},
  {text:'Établissez ensuite le compte de résultat et le bilan après inventaire.'}
 ],
 correction:`La créance HT est de 6 000 / 1,20 = 5 000 € ; dépréciation : 5 000 × 60 % = <b>3 000 €</b>.<br>La charge constatée d'avance est de <b>1 350 €</b>.<br>La facture non parvenue entraîne une charge de 2 400 € et une TVA déductible de 480 € ; le produit à recevoir augmente les produits de 3 000 € et la TVA collectée de 600 €.<br>Les écritures d'inventaire doivent être intégrées avant l'établissement définitif du compte de résultat et du bilan.`
}
});