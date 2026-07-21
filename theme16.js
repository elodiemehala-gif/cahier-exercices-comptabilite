window.EXERCISES=window.EXERCISES||{};
Object.assign(window.EXERCISES,{
'T16-S1':{
 statement:`Une entreprise cède le 15 octobre N un terrain à bâtir pour 32 000 € HT. La TVA est de 20 % et le règlement est reçu par banque. Le terrain figurait à l'actif pour 27 000 € et une dépréciation de 4 050 € avait été constatée. Le 10 décembre N, elle cède également 150 titres immobilisés au prix unitaire de 325 €. Leur valeur d'origine est de 285 € par titre et une dépréciation de 15 € par titre avait été constituée.`,
 questions:[
  {text:'Quel est le montant TTC encaissé pour la cession du terrain ?',choices:['38 400 €','32 000 €','27 000 €','6 400 €']},
  {text:'Quel montant de dépréciation du terrain doit être repris ?',choices:['4 050 €','5 000 €','27 000 €','0 €']},
  {text:'Quelle est la valeur comptable du terrain sorti du patrimoine ?',choices:['27 000 €','32 000 €','22 950 €','38 400 €']},
  {text:'Quel montant de dépréciation doit être repris sur les 150 titres cédés ?',choices:['2 250 €','4 500 €','42 750 €','6 000 €']},
  {text:'Enregistrez les écritures de cession et de sortie du patrimoine.'}
 ],
 correction:`Terrain : encaissement TTC = 32 000 × 1,20 = <b>38 400 €</b>. La dépréciation de <b>4 050 €</b> est reprise, puis le terrain est sorti pour sa valeur d'origine de <b>27 000 €</b>.<br>Titres : prix de cession = 150 × 325 = <b>48 750 €</b>. Reprise de dépréciation = 150 × 15 = <b>2 250 €</b>. Valeur comptable sortie = 150 × 285 = <b>42 750 €</b>.`,
 correctionTable:{headers:['Écriture','Débit','Crédit'],rows:[['512 / 775 + 44571 – cession du terrain','38 400 €','32 000 € + 6 400 €'],['2911 / 7816 – reprise terrain','4 050 €','4 050 €'],['675 / 211 – sortie terrain','27 000 €','27 000 €'],['512 / 775 – cession titres immobilisés','48 750 €','48 750 €'],['2971 / 7866 – reprise sur titres','2 250 €','2 250 €'],['675 / 271 – sortie des titres','42 750 €','42 750 €']]}
},
'T16-S2':{
 statement:`Une entreprise cède au cours de l'exercice N un véhicule utilitaire acquis 20 000 € HT et une machine-outil acquise 14 000 €. Le véhicule est amorti linéairement à 20 %. La machine est amortie comptablement sur 8 ans et fiscalement selon le mode dégressif. La première annuité fiscale a été de 1 312,73 € et la première annuité comptable de 486,11 €. Au début de N, le solde d'amortissement dérogatoire relatif à la machine est encore de 3 554 €.`,
 questions:[
  {text:'Quelle est l'annuité comptable annuelle de la machine ?',choices:['1 750 €','1 312,73 €','486,11 €','3 554 €']},
  {text:'Quel est le principe applicable aux amortissements dérogatoires lors de la cession ?'},
  {text:'Calculez l'amortissement complémentaire du véhicule jusqu'à sa date de cession à partir des données de l'énoncé.'},
  {text:'Enregistrez la cession, la dotation complémentaire, la sortie des immobilisations et la reprise des amortissements dérogatoires.'}
 ],
 correction:`Annuité comptable de la machine : 14 000 / 8 = <b>1 750 €</b>.<br>Lors de la cession, il faut constater l'amortissement complémentaire jusqu'à la date de sortie, enregistrer le prix de cession, sortir le bien pour sa valeur brute et annuler les amortissements cumulés. Le solde d'amortissement dérogatoire restant devient sans objet et doit être repris.`,
 correctionTable:{headers:['Étape','Traitement'],rows:[['1','Constatation du prix de cession'],['2','Dotation complémentaire aux amortissements jusqu’à la date de cession'],['3','Sortie du bien : débit 28 et 675, crédit 21'],['4','Reprise du solde d’amortissement dérogatoire : débit 145, crédit 78725']]}
},
'T16-S3':{
 statement:`Une immobilisation avait une base amortissable initiale de 6 900 €. À la fin de N+2, ses amortissements cumulés s'élèvent à 3 162,50 € et une dépréciation de 747,50 € a été constatée, ramenant sa valeur nette comptable à 2 990 €. Elle est cédée ultérieurement pour 1 800 € HT, TVA 20 %, alors que les amortissements cumulés atteignent 5 992,50 €.`,
 questions:[
  {text:'Quelle est la valeur nette comptable avant prise en compte de la dépréciation à la fin de N+2 ?',choices:['3 737,50 €','2 990 €','747,50 €','6 900 €']},
  {text:'Quelle est la valeur nette comptable lors de la cession ?',choices:['160 €','907,50 €','1 800 €','2 990 €']},
  {text:'Quel montant de dépréciation doit être repris lors de la cession ?',choices:['747,50 €','920 €','230 €','0 €']},
  {text:'Enregistrez le prix de cession, la reprise de dépréciation et la sortie de l'immobilisation.'}
 ],
 correction:`À la fin de N+2, VNC avant dépréciation = 6 900 – 3 162,50 = <b>3 737,50 €</b>, puis 3 737,50 – 747,50 = <b>2 990 €</b>.<br>Lors de la cession, la dépréciation restante de <b>747,50 €</b> est reprise. La valeur comptable brute résiduelle avant dépréciation est 6 900 – 5 992,50 = <b>907,50 €</b>.`,
 correctionTable:{headers:['Écriture','Débit','Crédit'],rows:[['512 / 775 + 44571 – prix de cession','2 160 €','1 800 € + 360 €'],['29 / 7816 – reprise de la dépréciation','747,50 €','747,50 €'],['28 + 675 / 21 – sortie du bien','5 992,50 € + 907,50 €','6 900 €']]}
},
'T16-S4':{
 statement:`Une entreprise détient deux catégories de valeurs mobilières de placement. Les VMP X ont été acquises à 340 € l'unité : 10 titres sont cédés le 25 juillet N à 305 €. Les VMP Y ont été acquises à 275 € l'unité : 40 titres sont cédés le 20 août N à 290 €. Au 31 décembre N−1, les cours étaient respectivement de 285 € et 260 €.`,
 questions:[
  {text:'Quel est le résultat de cession des 10 VMP X ?',choices:['Moins-value de 350 €','Plus-value de 350 €','Moins-value de 550 €','Plus-value de 550 €']},
  {text:'Quel est le résultat de cession des 40 VMP Y ?',choices:['Plus-value de 600 €','Moins-value de 600 €','Plus-value de 1 200 €','0 €']},
  {text:'Quels comptes enregistrent respectivement une moins-value et une plus-value de cession de VMP ?',choices:['667 et 767','675 et 775','6866 et 7866','503 et 512']},
  {text:'Enregistrez les cessions et la régularisation des dépréciations correspondantes.'}
 ],
 correction:`VMP X : prix de cession 10 × 305 = 3 050 € ; coût d'acquisition 10 × 340 = 3 400 € ; <b>moins-value de 350 €</b>, enregistrée au compte 667.<br>VMP Y : prix de cession 40 × 290 = 11 600 € ; coût d'acquisition 40 × 275 = 11 000 € ; <b>plus-value de 600 €</b>, enregistrée au compte 767.<br>Les dépréciations attachées aux titres cédés doivent être reprises.`,
 correctionTable:{headers:['Écriture','Débit','Crédit'],rows:[['512 + 667 / 50 – cession VMP X','3 050 € + 350 €','3 400 €'],['512 / 50 + 767 – cession VMP Y','11 600 €','11 000 € + 600 €'],['59 / 7866 – reprise des dépréciations des titres cédés','Montant calculé','Même montant']]}
}
});