window.EXERCISES=window.EXERCISES||{};
Object.assign(window.EXERCISES,{
'T10-S1':{
 statement:`L’entreprise Waimox vous communique les informations suivantes relatives aux marchandises B2I :<br>– stock au 1er juin : 100 articles pour 1 000 € ;<br>– 5 juin, bon de sortie n° 1 : 50 articles ;<br>– 13 juin, bon d’entrée n° 1 : 150 articles à 12 € l’unité ;<br>– 18 juin, bon de sortie n° 2 : 80 articles ;<br>– 22 juin, bon d’entrée n° 2 : 200 articles à 13 € l’unité.`,
 questions:[{text:'Établissez la fiche de stock selon la méthode du CUMP en fin de période.',choices:['CUMP = 12 € ; stock final = 3 840 €','CUMP = 11 € ; stock final = 3 520 €','CUMP = 13 € ; stock final = 4 160 €']}],
 table:{headers:['Date','Mouvement','Quantité','Coût unitaire'],rows:[['01/06','Stock initial','100','10 €'],['05/06','Sortie n° 1','50','À déterminer'],['13/06','Entrée n° 1','150','12 €'],['18/06','Sortie n° 2','80','À déterminer'],['22/06','Entrée n° 2','200','13 €']]},
 correction:`CUMP de fin de période = (1 000 + 1 800 + 2 600) / (100 + 150 + 200) = <b>12 €</b>.<br>Entrées totales : 450 articles pour 5 400 €.<br>Sorties : 130 articles × 12 € = 1 560 €.<br>Stock final : 320 articles × 12 € = <b>3 840 €</b>.`,
 correctionTable:{headers:['Date','Entrées','Sorties','Stock'],rows:[['01/06','100 × 10 = 1 000 €','','100 = 1 000 €'],['05/06','','50 × 12 = 600 €','50'],['13/06','150 × 12 = 1 800 €','','200'],['18/06','','80 × 12 = 960 €','120'],['22/06','200 × 13 = 2 600 €','','320 × 12 = 3 840 €']]}
},
'T10-S2':{
 statement:`Au 31 décembre N avant inventaire, l’entreprise commerciale Maupas présente les soldes suivants :<br>– 370 Stocks de marchandises : 14 500 € ;<br>– 607 Achats de marchandises : 79 600 € ;<br>– 707 Ventes de marchandises : 124 863 €.<br><br>L’inventaire physique évalue le stock final à 16 300 €. Les escomptes de règlement correspondants s’élèvent à 780 €.`,
 questions:[{text:'Déterminez le stock final net d’escompte.',choices:['15 520 €','16 300 €','17 080 €']},{text:'Enregistrez les écritures de régularisation des stocks.'},{text:'Calculez le coût d’achat des marchandises vendues.',choices:['78 580 €','79 600 €','80 620 €']},{text:'Présentez l’extrait du compte de résultat correspondant.'}],
 correction:`Stock final net d’escompte = 16 300 − 780 = <b>15 520 €</b>.<br><br>Annulation du stock initial : débit 6037 pour 14 500 € ; crédit 370 pour 14 500 €.<br>Création du stock final : débit 370 pour 15 520 € ; crédit 6037 pour 15 520 €.<br><br>Variation = 14 500 − 15 520 = <b>− 1 020 €</b> : surstockage.<br>CAMV = 79 600 − 1 020 = <b>78 580 €</b>.`,
 correctionTable:{headers:['Extrait du compte de résultat','Montant'],rows:[['Achats de marchandises','79 600 €'],['Variation des stocks','− 1 020 €'],['Ventes de marchandises','124 863 €']]}
},
'T10-S3':{
 statement:`La société Jala fournit l’état des stocks au 31 décembre N.`,
 table:{headers:['Nature des stocks','Stock initial net','Stock final net'],rows:[['Matières premières','4 856,00 €','5 382,00 €'],['Emballages','1 335,00 €','1 213,00 €'],['Produits intermédiaires','4 637,00 €','3 594,00 €'],['Produits finis','6 493,40 €','7 262,80 €'],['Marchandises','2 211,30 €','1 624,30 €']]},
 questions:[{text:'Enregistrez les écritures de régularisation des stocks.'},{text:'Calculez et interprétez les soldes des comptes de variation des stocks.'}],
 correction:`Annulation des stocks initiaux : débit des comptes 6031, 6032, 6037, 71351 et 71355 ; crédit des comptes de stocks 310, 326, 351, 355 et 370 pour les valeurs initiales.<br><br>Création des stocks finals : débit des comptes 310, 326, 351, 355 et 370 ; crédit des comptes 6031, 6032, 6037, 71351 et 71355 pour les valeurs finales.`,
 correctionTable:{headers:['Compte de variation','Solde','Interprétation'],rows:[['6031 Matières premières','Créditeur 526,00 €','Surstockage'],['6032 Emballages','Débiteur 122,00 €','Consommation du stock'],['6037 Marchandises','Débiteur 587,00 €','Consommation du stock'],['71351 Produits intermédiaires','Débiteur 1 043,00 €','Consommation du stock'],['71355 Produits finis','Créditeur 769,40 €','Surstockage']]}
}
});