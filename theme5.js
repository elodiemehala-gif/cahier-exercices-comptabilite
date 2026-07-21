window.EXERCISES=window.EXERCISES||{};
Object.assign(window.EXERCISES,{
'T5-S1':{
 statement:`L’entreprise Le Berre a adressé et reçu, durant le mois de janvier, les factures suivantes :<br><br>3/1 Reçu la facture n° 4 781 du fournisseur Lierre. Marchandises : 1 570 € HT, TVA 20 % ; paiement ce jour par chèque bancaire.<br>10/1 Envoyé au client Lanède la facture n° B 201. Marchandises : 380 € HT, TVA 20 % ; paiement sous huitaine.<br>15/1 Envoyé au client Lemaître la facture n° B 202. Marchandises : 1 250 € HT, remise 10 %, TVA 20 % ; paiement le 28 février.<br>18/1 Reçu la facture n° 347 du fournisseur Joncourt. Matières premières : 2 000 € HT, remises 20 % et 10 %, TVA 20 % ; règlement ce jour par chèque bancaire.<br>20/1 Envoyé au client Legars la facture n° B 203. Prestations de services : 300 € HT, remise 10 %, TVA 20 % ; paiement à 60 jours.<br>25/1 Reçu la facture n° 775 du fournisseur Blanco. Produits d’entretien stockés : 340 € HT, remises 10 % et 5 %, TVA 20 % ; paiement à réception.`,
 questions:[
  {text:'Présentez schématiquement le calcul des différentes factures.',choices:['Calculer d’abord les réductions puis la TVA','Calculer la TVA avant les réductions','Ne calculer que le TTC']},
  {text:'Quel est le net à payer de la facture Lierre ?',choices:['1 884 €','1 570 €','1 256 €']},
  {text:'Quel est le net à payer de la facture Joncourt ?',choices:['1 728 €','1 920 €','1 440 €']},
  {text:'Comptabilisez au journal l’ensemble des factures du mois de janvier.'}
 ],
 table:{headers:['Date','Tiers','Nature','Brut HT','Réductions','TVA','Net à payer'],rows:[['3/1','Lierre','Marchandises','1 570 €','—','314 €','1 884 €'],['10/1','Lanède','Marchandises','380 €','—','76 €','456 €'],['15/1','Lemaître','Marchandises','1 250 €','Remise 10 %','225 €','1 350 €'],['18/1','Joncourt','Matières premières','2 000 €','20 % puis 10 %','288 €','1 728 €'],['20/1','Legars','Prestations','300 €','Remise 10 %','54 €','324 €'],['25/1','Blanco','Entretien stocké','340 €','10 % puis 5 %','58,14 €','348,84 €']]},
 correction:`Les réductions commerciales sont déduites successivement avant la TVA.<br><br>Factures : Lierre 1 884 € ; Lanède 456 € ; Lemaître 1 350 € ; Joncourt 1 728 € ; Legars 324 € ; Blanco 348,84 €.<br><br>Au journal, les achats sont débités pour leur net commercial, la TVA déductible est débitée et le fournisseur ou la banque est crédité. Pour les ventes, le client est débité du TTC, le produit et la TVA collectée sont crédités.`
},
'T5-S2':{
 statement:`L’entreprise Blanc, durant le mois de novembre, adresse à ses clients et reçoit de ses fournisseurs les factures du dossier.<br><br>10/11 Facture Perey n° 1324 : marchandises 1 570 €, remise 15 %, escompte 2 %, TVA 20 %.<br>17/11 Facture Ballet n° 9875 : marchandises 1 250 €, escompte 2 %, TVA 20 %.<br>25/11 Facture Cachemaille n° 874 : marchandises 1 050 €, remises 20 % puis 10 %, TVA 20 %.<br>30/11 Facture Blanc n° 3272 au client Regard : montant brut à reconstituer à partir d’un net à payer de 871,22 €, remises 20 % puis 10 %, TVA 20 %.`,
 questions:[
  {text:'Quelle différence existe entre les réductions commerciales et l’escompte ?',choices:['Les réductions commerciales relèvent du prix ; l’escompte des conditions de paiement','Il n’existe aucune différence','L’escompte est toujours une remise commerciale']},
  {text:'Quel est le net à payer de la facture Perey ?',choices:['1 569,37 €','1 601,40 €','1 334,50 €']},
  {text:'Quel est le net à payer de la facture Ballet ?',choices:['1 470 €','1 500 €','1 225 €']},
  {text:'Quel est le montant brut de la facture Blanc n° 3272 ?',choices:['1 008,36 €','871,22 €','726,02 €']},
  {text:'Comptabilisez les factures avec réductions commerciales et financières.'}
 ],
 table:{headers:['Facture','Brut','Réductions','Net commercial','Escompte','TVA','Net à payer'],rows:[['Perey 1324','1 570 €','15 %','1 334,50 €','26,69 €','261,56 €','1 569,37 €'],['Ballet 9875','1 250 €','—','1 250 €','25 €','245 €','1 470 €'],['Cachemaille 874','1 050 €','20 % puis 10 %','756 €','—','151,20 €','907,20 €'],['Blanc 3272','1 008,36 €','20 % puis 10 %','726,02 €','—','145,20 €','871,22 €']]},
 correction:`Les rabais, remises et ristournes diminuent le prix commercial. L’escompte rémunère un règlement anticipé et se comptabilise en produit financier chez l’acheteur ou en charge financière chez le vendeur.<br><br>Facture Perey : net à payer 1 569,37 €.<br>Facture Ballet : net à payer 1 470 €.<br>Facture Cachemaille : net à payer 907,20 €.<br>Facture Blanc : brut reconstitué 1 008,36 €.`
},
'T5-S3':{
 statement:`L’entreprise Gavillon est spécialisée dans la vente en gros de bois et matériaux divers. Le dossier de novembre comprend notamment :<br><br>1/11 Facture Gavillon n° 212 au client Hervé : gouttière 200 m à 17 €, remise 10 %, escompte 2 %, TVA 20 %, net à payer 3 598,56 €.<br>5/11 Avoir Gavillon n° 51 au client Costa : ristourne mensuelle 350 €, TVA 20 %, net porté au compte 420 €.<br>10/11 Facture Coenca n° 3745 à Gavillon : gouttière 10 000 m à 5 €, escompte 2 %, TVA 20 %, net à payer 58 800 €.<br>12/11 Facture Gavillon n° 213 au client Papin : lambris 250 m à 6,60 €, remise 20 %, TVA 20 %, net à payer 1 584 €.<br>17/11 Facture Forte Paule n° 1055 à Gavillon : lambris 5 000 m à 25 €, remises 10 % puis 10 %, escompte 2 %, TVA 20 %, net à payer 119 070 €, réglée ce jour par chèque bancaire.<br>20/11 Avoir Coenca n° 219 à Gavillon : retour de gouttière 250 m à 5 €, escompte 2 %, TVA 20 %, net à payer 1 470 €.`,
 questions:[
  {text:'Quel est le net financier de la facture Gavillon n° 212 ?',choices:['2 998,80 €','3 060 €','3 598,56 €']},
  {text:'Quel compte est débité lors d’un avoir accordé à un client pour ristourne ?',choices:['709 Rabais, remises et ristournes accordés','609 Rabais, remises et ristournes obtenus','707 Ventes de marchandises']},
  {text:'Quel est le net commercial de la facture Forte Paule ?',choices:['101 250 €','112 500 €','99 225 €']},
  {text:'Quel est le montant TTC de l’avoir Coenca ?',choices:['1 470 €','1 225 €','1 250 €']},
  {text:'Enregistrez toutes les factures et tous les avoirs au journal de Gavillon.'}
 ],
 table:{headers:['Date','Document','Nature','HT / base','TVA','TTC / net'],rows:[['1/11','FA 212 Hervé','Vente','2 998,80 €','599,76 €','3 598,56 €'],['5/11','AV 51 Costa','Ristourne accordée','350 €','70 €','420 €'],['10/11','FA 3745 Coenca','Achat','49 000 €','9 800 €','58 800 €'],['12/11','FA 213 Papin','Vente','1 320 €','264 €','1 584 €'],['17/11','FA 1055 Forte Paule','Achat réglé banque','99 225 €','19 845 €','119 070 €'],['20/11','AV 219 Coenca','Retour sur achat','1 225 €','245 €','1 470 €']]},
 correction:`Principaux traitements :<br>— ventes : débit du client pour le TTC, crédit des ventes pour le net commercial, crédit de la TVA collectée ; l’escompte accordé est débité en 665 ;<br>— achats : débit des achats pour le net commercial, débit de la TVA déductible, crédit du fournisseur ou de la banque ; l’escompte obtenu est crédité en 765 ;<br>— avoir accordé à un client : débit du compte 709 et de la TVA collectée à régulariser, crédit du client ;<br>— avoir reçu d’un fournisseur : débit du fournisseur, crédit du compte 609 et de la TVA déductible à régulariser.`
}
});