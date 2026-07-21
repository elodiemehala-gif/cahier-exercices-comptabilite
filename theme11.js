window.EXERCISES=window.EXERCISES||{};
Object.assign(window.EXERCISES,{
'T11-S1':{
 statement:`La société CRCC clôture son exercice le 31 décembre N. Elle communique les informations suivantes pendant la période d’inventaire :<br><br>– la prime annuelle d’assurance a été réglée le 1er octobre pour 824 € ;<br>– le loyer du garage du dernier trimestre N, soit 260 €, sera payé le 20 janvier N+1 ;<br>– il reste des fournitures de bureau non stockées pour 354 € HT, TVA 20 % ;<br>– des marchandises ont été livrées le 17 décembre par le fournisseur Fagot ; la facture de 600 € HT, TVA 20 %, arrivera en janvier N+1 ;<br>– les intérêts d’un emprunt sont versés à terme échu le 1er juillet ; capital restant dû : 8 000 €, taux annuel : 4,5 %.`,
 questions:[
  {text:'Quel montant de prime d’assurance doit être constaté d’avance ?',choices:['618 €','206 €','824 €','354 €']},
  {text:'Quel montant d’intérêts courus doit être rattaché à N ?',choices:['180 €','360 €','90 €','260 €']},
  {text:'Enregistrez toutes les écritures nécessaires au 31 décembre N.'}
 ],
 correction:`La prime concerne neuf mois de N+1 : 824 × 9/12 = <b>618 €</b> de charge constatée d’avance.<br>Les fournitures non consommées, soit <b>354 €</b>, sont également constatées d’avance.<br>Le loyer de <b>260 €</b>, la facture Fagot de <b>720 € TTC</b> et les intérêts courus de <b>180 €</b> constituent des charges à payer.`,
 correctionTable:{headers:['Compte débité','Débit','Compte crédité','Crédit'],rows:[['486 Charges constatées d’avance','618 €','616 Primes d’assurances','618 €'],['486 Charges constatées d’avance','354 €','6064 Fournitures administratives','354 €'],['613 Locations','260 €','4686 Divers – charges à payer','260 €'],['607 Achats de marchandises','600 €','408 Fournisseurs – factures non parvenues','720 €'],['44586 TVA sur factures non parvenues','120 €','',''],['661 Charges d’intérêts','180 €','1688 Intérêts courus','180 €']]}
},
'T11-S2':{
 statement:`À la clôture de l’exercice, le 31 décembre N, l’entreprise Vita constate les faits suivants :<br><br>– le loyer de janvier N+1 d’un entrepôt loué à une société voisine a été perçu le 5 décembre N : 450 € ;<br>– des marchandises ont été expédiées au client Zora pour 1 700 € HT, TVA 20 %, mais la facture sera établie en janvier N+1 ;<br>– un prêt de 6 000 € a été accordé à un salarié le 1er octobre N ; les intérêts au taux de 3 % sont perçus annuellement à terme échu le 1er octobre ;<br>– une facture de 176 € HT, TVA 20 %, a été adressée le 22 décembre au client Lang alors que la livraison n’aura lieu qu’en janvier N+1.`,
 questions:[
  {text:'Quel produit doit être constaté d’avance pour le loyer ?',choices:['450 €','1 700 €','176 €','45 €']},
  {text:'Quel est le montant des intérêts courus à recevoir ?',choices:['45 €','180 €','135 €','60 €']},
  {text:'Enregistrez les écritures de régularisation au 31 décembre N.'}
 ],
 correction:`Le loyer de janvier et la vente facturée au client Lang concernent N+1 : produits constatés d’avance de <b>450 €</b> et <b>176 €</b>.<br>La vente Zora doit être rattachée à N : facture à établir de <b>2 040 € TTC</b>.<br>Intérêts courus : 6 000 × 3 % × 3/12 = <b>45 €</b>.`,
 correctionTable:{headers:['Compte débité','Débit','Compte crédité','Crédit'],rows:[['7083 Locations diverses','450 €','487 Produits constatés d’avance','450 €'],['4181 Clients – factures à établir','2 040 €','707 Ventes de marchandises','1 700 €'],['','','44587 TVA sur factures à établir','340 €'],['27684 Intérêts courus sur prêts','45 €','7626 Revenus des prêts','45 €'],['707 Ventes de marchandises','176 €','487 Produits constatés d’avance','176 €']]}
},
'T11-S3':{
 statement:`La société Xéris, soumise à l’impôt sur les sociétés, a recensé à l’inventaire N les ajustements suivants :<br><br>– ristournes à accorder aux clients : 480 € HT, TVA 20 % ;<br>– droits à congés payés acquis : 4 500 € ; charges sociales correspondantes : 2 160 € ;<br>– abonnement à une revue : 84 € HT, TVA 2,10 %, du 1er mars N au 28 février N+1 ;<br>– communications téléphoniques de novembre et décembre estimées à 487 € HT, TVA 20 % ;<br>– ristournes à recevoir des fournisseurs : 263 € HT, TVA 20 % ;<br>– vente de marchandises facturée le 15 décembre pour 735 € HT, TVA 20 %, alors que la livraison aura lieu en janvier ;<br>– rémunérations brutes éligibles au CICE de janvier à novembre : 69 500 € ; part éligible de décembre : 6 318 € ; taux du CICE : 6 %.`,
 questions:[
  {text:'Quel principe impose ces régularisations ?',choices:['Indépendance des exercices','Prudence','Permanence des méthodes','Non-compensation']},
  {text:'Quel montant d’abonnement doit être constaté d’avance ?',choices:['14 €','84 €','70 €','7 €']},
  {text:'Quel est le produit à recevoir au titre du CICE de décembre ?',choices:['379,08 €','4 170 €','6 318 €','417 €']},
  {text:'Enregistrez les écritures de régularisation nécessaires.'},
  {text:'Quelle opération doit être effectuée à l’ouverture de N+1 ?'}
 ],
 correction:`Le principe applicable est le <b>principe d’indépendance des exercices</b>.<br>Abonnement constaté d’avance : 84 × 2/12 = <b>14 €</b>.<br>CICE à recevoir pour décembre : 6 318 × 6 % = <b>379,08 €</b>.<br>À l’ouverture de N+1, toutes les écritures de régularisation doivent être <b>contrepassées</b>.`,
 correctionTable:{headers:['Écriture','Débit','Crédit'],rows:[['709 RRR accordés / 44587 TVA / 4198 Avoirs à établir','480 € + 96 €','576 €'],['641 + 645 / 4282 + 4382','4 500 € + 2 160 €','4 500 € + 2 160 €'],['486 / 618 Abonnement revue','14 €','14 €'],['626 + 44586 / 408 Téléphone','487 € + 97,40 €','584,40 €'],['4098 / 609 + 44586 Ristournes à recevoir','315,60 €','263 € + 52,60 €'],['707 / 487 Vente livrée en N+1','735 €','735 €'],['4487 État – produit à recevoir / 649 Produit d’impôt CICE','379,08 €','379,08 €']]}
}
});