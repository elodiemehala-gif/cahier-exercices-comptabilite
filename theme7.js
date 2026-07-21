window.EXERCISES=window.EXERCISES||{};
Object.assign(window.EXERCISES,{
'T7-S1':{
 statement:`La société Rivage, spécialisée dans la distribution d’articles de sports nautiques, a réalisé au cours des mois de janvier et février les opérations suivantes avec des fournisseurs et clients étrangers.`,
 table:{headers:['Date','Opération'],rows:[
 ['5/1','Achat de marchandises au fournisseur autrichien Bauer : 33 315,74 €.'],
 ['8/1','Achat de marchandises au fournisseur portugais Dacuna : 6 543,80 €.'],
 ['11/1','Vente de marchandises au client américain Lee Surf : 3 500 $. Cours : 1 $ = 0,813 €.'],
 ['18/1','Achat de marchandises au fournisseur mexicain Calles : 8 300 pesos. Dédouanement le même jour. Cours : 100 pesos = 6,188 €.'],
 ['22/1','Vente de marchandises au client suédois Kavadios : 15 000 couronnes. Cours : 1 € = 8,6246 couronnes.'],
 ['25/1','Règlement de la dette envers le fournisseur portugais Dacuna par chèque.'],
 ['7/2','Règlement de la dette envers le fournisseur mexicain Calles par chèque. Cours : 100 pesos = 6,286 €.'],
 ['7/2','Encaissement de la facture adressée au client américain Lee Surf. Cours : 1 $ = 0,839 €.']
 ]},
 questions:[
  {text:'Distinguez les opérations intracommunautaires et les opérations d’import-export.',choices:['5/1, 8/1 et 22/1 : intracommunautaires ; 11/1 et 18/1 : import-export','Toutes les opérations sont intracommunautaires','11/1 et 18/1 : intracommunautaires ; les autres : import-export']},
  {text:'Repérez les opérations exonérées de TVA.',choices:['Vente à Kavadios le 22/1 et vente à Lee Surf le 11/1','Achats à Bauer et Dacuna','Achat à Calles uniquement']},
  {text:'Enregistrez les opérations au journal, au taux normal de TVA de 20 %, la société ayant opté pour l’autoliquidation de la TVA à l’importation en 2021.'}
 ],
 correction:`Les opérations des 5/1, 8/1 et 22/1 sont intracommunautaires. Celles des 11/1 et 18/1 sont respectivement une exportation et une importation. Les opérations exonérées sont la livraison intracommunautaire du 22/1 et l’exportation du 11/1.<br><br>Conversions : Lee Surf au 11/1 = 3 500 × 0,813 = <b>2 845,50 €</b> ; Calles au 18/1 = 8 300/100 × 6,188 = <b>513,60 €</b> ; Kavadios = 15 000/8,6246 = <b>1 739,21 €</b> ; Calles au règlement = <b>521,74 €</b>, soit une perte de change de <b>8,14 €</b> ; Lee Surf à l’encaissement = <b>2 936,50 €</b>, soit un gain de change de <b>91 €</b>.`,
 correctionTable:{headers:['Date','Débit','Crédit'],rows:[
 ['5/1','60712 : 33 315,74 € ; 445662 : 6 663,15 €','4452 : 6 663,15 € ; 40112 : 33 315,74 €'],
 ['8/1','60712 : 6 543,80 € ; 445662 : 1 308,76 €','4452 : 1 308,76 € ; 40112 : 6 543,80 €'],
 ['11/1','411 : 2 845,50 €','707 : 2 845,50 €'],
 ['18/1','607 : 513,60 € ; 44566 : 102,72 €','401 : 513,60 € ; TVA due sur achats : 102,72 €'],
 ['22/1','41112 : 1 739,21 €','70712 : 1 739,21 €'],
 ['25/1','40112 : 6 543,80 €','512 : 6 543,80 €'],
 ['7/2 — Calles','401 : 513,60 € ; 656 : 8,14 €','512 : 521,74 €'],
 ['7/2 — Lee Surf','512 : 2 936,50 €','411 : 2 845,50 € ; 756 : 91,00 €']
 ]}
},
'T7-S2':{
 statement:`La société Kléris, située à Nancy, est spécialisée dans le dépannage des matériels industriels. Elle a réalisé les opérations transfrontalières suivantes en mai.`,
 table:{headers:['Date','Opération'],rows:[
 ['3/5','Facture du fournisseur Klein, établi en Allemagne, pour la réparation d’un chariot élévateur appartenant à la société : 840 € HT. Règlement prévu le 5 juin par virement.'],
 ['8/5','Facture adressée au client Goethe, établi en Allemagne, pour la réparation d’une machine-outil : 790 € HT.'],
 ['15/5','Facture d’un consultant marketing établi en Allemagne : 1 200 € HT. Règlement comptant le 18 mai par virement.']
 ]},
 questions:[
  {text:'Enregistrez les opérations du mois au journal.'},
  {text:'La société Kléris doit-elle établir une déclaration européenne de services pour le mois de mai ?',choices:['Oui, pour la prestation du 8 mai fournie au client Goethe','Oui, pour les trois opérations','Non, aucune DES n’est nécessaire']}
 ],
 correction:`Pour les prestations de services intracommunautaires relevant du principe général entre assujettis, le preneur assujetti est redevable de la TVA. Kléris doit établir une DES pour l’opération du 8 mai, prestation fournie au client Goethe établi en Allemagne.`,
 correctionTable:{headers:['Date','Débit','Crédit'],rows:[
 ['3/5','615 : 840 € ; 44566 : 168 €','TVA due sur prestations : 168 € ; 401 : 840 €'],
 ['8/5','411 : 790 €','706 : 790 €'],
 ['15/5','622 : 1 200 € ; 44566 : 240 €','TVA due sur prestations : 240 € ; 401 : 1 200 €'],
 ['18/5','401 : 1 200 €','512 : 1 200 €']
 ]}
}
});