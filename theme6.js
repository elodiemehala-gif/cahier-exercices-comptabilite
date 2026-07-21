window.EXERCISES=window.EXERCISES||{};
Object.assign(window.EXERCISES,{
'T6-S1':{
 statement:`L’entreprise Maupin a réalisé, au cours du mois de mars N, les opérations suivantes. Enregistrez-les au journal.<br><br>1/3 : location d’un coffre-fort, 30 € HT, TVA 20 %, prélèvement bancaire.<br>3/3 : remboursement en espèces des frais de déplacement du commercial, 350 € TTC ; TVA non déductible.<br>5/3 : encaissement de dividendes d’actions détenues en valeurs mobilières de placement : 750 €.<br>7/3 : achat de 15 clefs USB à 13 € HT l’unité, TVA 20 %, règlement par carte bancaire.<br>9/3 : intérêts du découvert bancaire : 335 €.<br>11/3 : achat de cartouches d’encre, 270 € HT, TVA 20 %, paiement par chèque.<br>13/3 : timbre-amende dématérialisé : 38 €.<br>15/3 : marquage de stylos publicitaires, 370 € HT, TVA 20 %, facture à payer.<br>17/3 : paiement de la CFE : 1 200 €.<br>19/3 : fuel domestique non stocké, 600 € HT, TVA 20 %, paiement par chèque.<br>21/3 : encaissement du loyer d’un local : 412 €.<br>23/3 : produits d’entretien, 120 € TTC, TVA 20 %, règlement en espèces.<br>25/3 : subvention d’exploitation virée au compte postal : 3 049 €.<br>27/3 : prime annuelle d’assurance des véhicules : 4 192 €.<br>28/3 : masques chirurgicaux, 150 € HT, TVA 5,5 %, paiement par chèque.<br>29/3 : intérêts sur prêt reçus par virement : 120 €.<br>31/3 : honoraires de l’avocat 382 € HT et de l’expert-comptable 457 € HT, TVA 20 %, paiements par chèques.`,
 questions:[
  {text:'Quel compte de charge convient à la location du coffre-fort ?',choices:['627 Services bancaires et assimilés','613 Locations','616 Primes d’assurance']},
  {text:'Quel montant est enregistré pour les clefs USB hors TVA ?',choices:['195 €','234 €','13 €']},
  {text:'Quel compte enregistre la subvention d’exploitation ?',choices:['740 Subventions d’exploitation','131 Subventions d’investissement','758 Produits divers de gestion courante']},
  {text:'Enregistrez toutes les opérations du mois au journal.'}
 ],
 correction:`Les opérations exonérées de TVA sont notamment les dividendes, les intérêts bancaires, l’amende, la CFE, le loyer, la prime d’assurance et les intérêts sur prêt. Les frais de déplacement sont comptabilisés pour leur montant TTC puisque la TVA n’est pas déductible.`,
 correctionTable:{headers:['Date','Débit','Crédit','Montants principaux'],rows:[
 ['1/3','627 : 30 ; 44566 : 6','512','36'],['3/3','625','530','350'],['5/3','512','764','750'],['7/3','6064 : 195 ; 44566 : 39','512','234'],['9/3','661','512','335'],['11/3','6064 : 270 ; 44566 : 54','512','324'],['13/3','6712','512','38'],['15/3','623 : 370 ; 44566 : 74','401','444'],['17/3','63511','512','1 200'],['19/3','6061 : 600 ; 44566 : 120','512','720'],['21/3','512','752','412'],['23/3','615 : 100 ; 44566 : 20','530','120'],['25/3','514','740','3 049'],['27/3','616','512','4 192'],['28/3','6061 : 150 ; 44566 : 8,25','512','158,25'],['29/3','512','762','120'],['31/3','622 : 839 ; 44566 : 167,80','512','1 006,80'] ]}
},
'T6-S2':{
 statement:`La société Valo emploie six salariés. Elle fournit les éléments de paie du mois de mars N :<br><br>Acomptes versés le 18 mars : 1 311 €<br>Salaires de base : 12 958 €<br>Primes d’ancienneté : 1 067 €<br>Avantages en nature : 762 €<br>Indemnités de transport : 366 €<br>Cotisations de Sécurité sociale : 1 930 €<br>Cotisations de retraite complémentaire AGIRC-ARRCO : 480 €<br>Cotisations de mutuelle : 320 €<br>Impôt sur le revenu prélevé à la source : 828 €<br><br>Les salaires sont payés le 30 mars par virement bancaire.`,
 table:{headers:['Élément','Montant'],rows:[['Salaires de base','12 958 €'],['Primes d’ancienneté','1 067 €'],['Avantages en nature','762 €'],['Indemnités de transport','366 €'],['Cotisations sociales','2 410 €'],['Mutuelle','320 €'],['Acomptes','1 311 €'],['PAS','828 €']]},
 questions:[
  {text:'Calculez les salaires bruts.',choices:['14 787 €','14 025 €','15 153 €']},
  {text:'Calculez le salaire net à payer avant impôt sur le revenu.',choices:['10 350 €','9 522 €','11 112 €']},
  {text:'Quel est le montant effectivement versé aux salariés après PAS ?',choices:['9 522 €','10 350 €','8 694 €']},
  {text:'Enregistrez au journal les acomptes, la paie et le paiement des salaires.'},
  {text:'Précisez les obligations de l’employeur concernant le prélèvement à la source.'},
  {text:'Indiquez le traitement comptable de l’indemnité d’activité partielle et de l’allocation reçue de l’État.'}
 ],
 correction:`Salaires bruts = 12 958 + 1 067 + 762 = <b>14 787 €</b>.<br>Net à payer avant IR = 14 787 − 2 410 − 320 − 1 311 − 762 + 366 = <b>10 350 €</b>.<br>Net versé après PAS = 10 350 − 828 = <b>9 522 €</b>.<br><br>L’employeur collecte le PAS sur le salaire net imposable, le déclare dans la DSN et le reverse à l’administration fiscale. L’indemnité d’activité partielle est débitée au compte 6414 par le crédit du compte 421 ; l’allocation reçue de l’État est débitée au compte 443 par le crédit du compte 6414.`,
 correctionTable:{headers:['Date','Débit','Crédit','Montant'],rows:[['18/3','425 Personnel – Avances et acomptes','512 Banque','1 311 €'],['31/3','641 Rémunérations du personnel','421, 425, 431, 437, 4421','14 787 €'],['30/3','421 Personnel – Rémunérations dues','512 Banque','9 522 €']]}
},
'T6-S3':{
 statement:`La société Neck emploie quarante-huit salariés et verse les cotisations sociales le 15 du mois suivant. Pour le mois d’octobre N, l’état des cotisations indique :`,
 table:{headers:['Nature','Cotisations salariales','Cotisations globales'],rows:[['Sécurité sociale','39 282 €','140 760 €'],['Assurance chômage','—','14 634 €'],['Retraite complémentaire','9 288 €','23 538 €'],['Mutuelle','3 840 €','7 680 €'],['TOTAL','52 410 €','186 612 €']]},
 questions:[
  {text:'Calculez les charges sociales patronales.',choices:['134 202 €','186 612 €','52 410 €']},
  {text:'Quel montant est versé aux organismes sociaux le 15 novembre ?',choices:['186 612 €','134 202 €','155 394 €']},
  {text:'Quel montant de PAS est reversé le 20 novembre ?',choices:['19 440 €','52 410 €','14 634 €']},
  {text:'Comptabilisez les charges patronales et les versements effectués.'}
 ],
 correction:`Charges patronales = cotisations globales − cotisations salariales = 186 612 − 52 410 = <b>134 202 €</b>.<br>Détail : Sécurité sociale 101 478 € ; assurance chômage 14 634 € ; retraite complémentaire 14 250 € ; mutuelle 3 840 €.<br>Le 15 novembre, l’entreprise verse 186 612 € aux organismes sociaux. Le 20 novembre, elle reverse 19 440 € de prélèvement à la source.`,
 correctionTable:{headers:['Date','Débit','Crédit','Montant'],rows:[['15/11','645 Charges de sécurité sociale','431 URSSAF ; 437 autres organismes','134 202 €'],['15/11','431 : 155 394 ; 437 : 31 218','512 Banque','186 612 €'],['20/11','4421 Prélèvements à la source','512 Banque','19 440 €']]}
}
});