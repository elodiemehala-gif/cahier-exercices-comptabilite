window.EXERCISES=window.EXERCISES||{};
Object.assign(window.EXERCISES,{
'T4-S1':{
 statement:`Au cours du mois de février N, un point de vente Maison de la presse a réalisé les opérations suivantes. Déterminez la TVA due au titre du mois de février N.`,
 table:{headers:['Opération','Montant','Base','Taux'],rows:[['Vente de presse','27 362,80 €','TTC','2,10 %'],['Vente de livres','12 027,00 €','TTC','5,5 %'],['Vente de fournitures de bureau','3 360,00 €','TTC','20 %'],['Achat de presse','20 100,00 €','HT','2,10 %'],['Achat de livres','4 000,00 €','HT','5,5 %'],['Achat de fournitures de bureau','800,00 €','HT','20 %'],['Achat d’une photocopieuse','1 800,00 €','HT','20 %'],['Billet de train SNCF','65,00 €','HT','10 %'],['Masques chirurgicaux','130,00 €','HT','5,5 %']]},
 questions:[
  {text:'Quel est le montant total de TVA collectée ?',choices:['1 749,80 €','815,75 €','934,05 €','2 565,55 €']},
  {text:'Quel est le montant total de TVA déductible ?',choices:['815,75 €','1 749,80 €','934,05 €','655,75 €']},
  {text:'Quel est le montant de TVA due ?',choices:['934,05 €','815,75 €','1 749,80 €','2 565,55 €']}
 ],
 correction:`TVA collectée : presse 562,80 € ; livres 627,00 € ; fournitures 560,00 €, soit <b>1 749,80 €</b>.<br>TVA déductible : presse 422,10 € ; livres 220,00 € ; fournitures 160,00 € ; train 6,50 € ; masques 7,15 €, soit <b>815,75 €</b>.<br>TVA due = 1 749,80 − 815,75 = <b>934,05 €</b>.`,
 correctionTable:{headers:['Calcul','Montant'],rows:[['TVA collectée','1 749,80 €'],['TVA déductible','815,75 €'],['TVA due','934,05 €']]}
},
'T4-S2':{
 statement:`L’entreprise Dunoy vous communique le dossier relatif aux opérations réalisées durant le mois d’octobre : ventes de marchandises hors taxes 63 500 € ; achats de marchandises hors taxes 25 480 € ; services extérieurs hors taxes 7 596 € ; acquisition d’un véhicule de tourisme toutes taxes comprises 9 406 € (TVA non déductible, coefficient de déduction égal à zéro). Le crédit de TVA du mois précédent est de 315,60 €.`,
 questions:[
  {text:'Quel est le montant de TVA collectée ?',choices:['12 700,00 €','6 615,20 €','5 769,20 €','1 881,20 €']},
  {text:'Quel est le montant de TVA déductible sur autres biens et services ?',choices:['6 615,20 €','12 700,00 €','7 596,00 €','1 881,20 €']},
  {text:'Quel est le montant de TVA à décaisser ?',choices:['5 769,20 €','6 084,80 €','12 700,00 €','5 453,60 €']},
  {text:'Comptabilisez la déclaration de TVA du mois d’octobre.'}
 ],
 correction:`TVA collectée = 63 500 × 20 % = <b>12 700,00 €</b>.<br>TVA déductible = (25 480 + 7 596) × 20 % = <b>6 615,20 €</b>. La TVA du véhicule de tourisme n’est pas déductible.<br>TVA à décaisser = 12 700 − 6 615,20 − 315,60 = <b>5 769,20 €</b>.`,
 correctionTable:{headers:['Compte','Libellé','Débit','Crédit'],rows:[['44571','TVA collectée','12 700,00 €',''],['44566','TVA sur autres biens et services','','6 615,20 €'],['44567','Crédit de TVA à reporter','','315,60 €'],['44551','TVA à décaisser','','5 769,20 €']]}
},
'T4-S3':{
 statement:`Une entreprise soumise au régime réel normal réalise en novembre des opérations en France, dans l’Union européenne et hors Union européenne. Les données comprennent notamment des achats taxables en France de 38 670 € HT, des services extérieurs de 9 565 € HT, une acquisition intracommunautaire générant 4 398,40 € de TVA et une prestation de services intracommunautaire de 2 840 € HT. Les exportations et livraisons intracommunautaires réunissant les conditions d’exonération ne supportent pas de TVA française.`,
 questions:[
  {text:'Quel est le montant total de TVA collectée et autoliquidée ?',choices:['22 637,20 €','17 670,80 €','14 613,40 €','8 023,80 €']},
  {text:'Quel est le montant total de TVA déductible ?',choices:['14 613,40 €','22 637,20 €','9 647,00 €','8 023,80 €']},
  {text:'Quel est le montant de TVA à décaisser ?',choices:['8 023,80 €','14 613,40 €','22 637,20 €','4 398,40 €']},
  {text:'Comptabilisez la déclaration de TVA puis son paiement.'}
 ],
 correction:`TVA collectée sur opérations nationales : <b>17 670,80 €</b>.<br>TVA due sur prestation de services intracommunautaire : 2 840 × 20 % = <b>568,00 €</b>.<br>TVA due intracommunautaire : <b>4 398,40 €</b>.<br>Total TVA collectée et autoliquidée : <b>22 637,20 €</b>.<br>TVA déductible : 9 647,00 + 568,00 + 4 398,40 = <b>14 613,40 €</b>.<br>TVA à décaisser = 22 637,20 − 14 613,40 = <b>8 023,80 €</b>.`,
 correctionTable:{headers:['Compte','Libellé','Débit','Crédit'],rows:[['44571','TVA collectée','17 670,80 €',''],['445 —','TVA due sur prestations de services','568,00 €',''],['4452','TVA due intracommunautaire','4 398,40 €',''],['44566','TVA sur autres biens et services','','10 215,00 €'],['445662','TVA déductible intracommunautaire','','4 398,40 €'],['44551','TVA à décaisser','','8 023,80 €'],['44551 / 512','Paiement de la TVA','8 023,80 €','8 023,80 €']]}
}
});