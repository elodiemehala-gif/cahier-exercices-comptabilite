window.EXERCISES=window.EXERCISES||{};
Object.assign(window.EXERCISES,{
'T1-S1':{
 statement:`Le 1er octobre N, M. Alméda crée une entreprise spécialisée dans la vente au détail de jouets en bois.<br><br>Il emprunte 50 000 € auprès de sa banque.<br>Il acquiert : un local de 95 000 €, des rayonnages pour 11 250 €, du mobilier de bureau pour 1 625 €, du matériel de bureau et informatique pour 12 000 €, un stock de jouets de 38 000 €.<br>Il dépose 16 200 € sur le compte bancaire de l’entreprise et 925 € en caisse.`,
 questions:[
  {text:'Déterminez le montant du capital.',choices:['125 000 €','175 000 €','50 000 €','225 000 €']},
  {text:'Présentez le bilan de départ simplifié.',choices:['Actif = 175 000 € ; Passif = 175 000 €','Actif = 125 000 € ; Passif = 125 000 €','Actif = 175 000 € ; Passif = 125 000 €']}
 ],
 table:{headers:['Éléments','Montant'],rows:[['Local','95 000 €'],['Rayonnages','11 250 €'],['Mobilier','1 625 €'],['Matériel de bureau et informatique','12 000 €'],['Stock','38 000 €'],['Banque','16 200 €'],['Caisse','925 €'],['Emprunt','50 000 €']]},
 correction:`Total de l’actif : 175 000 €.<br>Capital = Actif − Dettes = 175 000 − 50 000 = <b>125 000 €</b>.`,
 correctionTable:{headers:['ACTIF','Montant','PASSIF','Montant'],rows:[['Actif immobilisé','119 875 €','Capital','125 000 €'],['Stock','38 000 €','Emprunt','50 000 €'],['Disponibilités','17 125 €','',''],['TOTAL','175 000 €','TOTAL','175 000 €']]}
},
'T1-S2':{
 statement:`Au 1er janvier N, l’entreprise Fouache présente les comptes suivants : emprunt 30 000 €, matériel de bureau et informatique 7 440 €, mobilier 2 340 €, fonds commercial 40 000 €, stock 3 380 €, clients 7 280 €, fournisseurs 16 700 €, caisse 640 €, banques 5 620 €, capital 20 000 €.<br><br>Après 12 mois d’activité : emprunt 28 000 €, clients 9 000 €, matériel de bureau et informatique 6 800 €, mobilier 2 000 €, fonds commercial 40 000 €, valeurs mobilières de placement 2 500 €, stock 1 460 €, fournisseurs 9 300 €, caisse 360 €, sécurité sociale 500 €, État 1 000 €, banques 2 700 €.`,
 questions:[
  {text:'Quel est le total du bilan au 1er janvier N ?',choices:['66 700 €','49 780 €','46 700 €','20 000 €']},
  {text:'À la clôture, l’entreprise a-t-elle réalisé un bénéfice ou une perte ?',choices:['Une perte','Un bénéfice','Un résultat nul']},
  {text:'Établissez les bilans au 1er janvier et au 31 décembre N.'}
 ],
 correction:`Au 1er janvier, le total du bilan est de <b>66 700 €</b>.<br>Au 31 décembre : actif = 64 820 € ; dettes = 38 800 € ; capitaux propres = 26 020 €. Le capital étant de 20 000 €, le résultat est un <b>bénéfice de 6 020 €</b>.`,
 correctionTable:{headers:['Bilan au 31/12/N','Montant'],rows:[['Actif total','64 820 €'],['Dettes','38 800 €'],['Capitaux propres','26 020 €'],['Capital','20 000 €'],['Résultat bénéficiaire','6 020 €']]}
},
'T1-S3':{
 statement:`La société Pégase vend des articles de sellerie. Pendant l’exercice N : achats de marchandises 430 000 €, fournitures de bureau 3 400 €, ventes 786 000 €, eau-gaz-électricité 18 600 €, salaires 32 000 €, charges sociales patronales 15 800 €, revenus de placements 5 730 €, intérêts d’emprunt 6 915 €, télécommunications 22 600 €, taxe d’apprentissage 13 200 €, dotations aux amortissements 14 000 €.<br><br>Stock initial : 85 000 €. Stock final : 98 000 €.`,
 questions:[
  {text:'Calculez la variation des stocks.',choices:['− 13 000 €','+ 13 000 €','183 000 €','0 €']},
  {text:'Calculez le coût d’achat des marchandises vendues.',choices:['417 000 €','443 000 €','430 000 €','98 000 €']},
  {text:'Quel est le résultat de l’exercice ?',choices:['Bénéfice de 248 215 €','Perte de 248 215 €','Bénéfice de 242 300 €']},
  {text:'Établissez le compte de résultat.'}
 ],
 correction:`Variation = stock initial − stock final = 85 000 − 98 000 = <b>− 13 000 €</b>.<br>Coût d’achat des marchandises vendues = 430 000 − 13 000 = <b>417 000 €</b>.<br>Total des charges = 543 515 €. Total des produits = 791 730 €. Résultat = <b>bénéfice de 248 215 €</b>.`,
 correctionTable:{headers:['Compte de résultat','Charges','Produits'],rows:[['Exploitation','536 600 €','786 000 €'],['Financier','6 915 €','5 730 €'],['Total','543 515 €','791 730 €'],['Résultat','248 215 €','Bénéfice']]}
},
'T1-S4':{
 statement:`L’entreprise Mondette, prestataire de services, fournit son bilan d’ouverture : matériel de transport 38 450 €, mobilier 15 750 €, banques 23 000 €, fournisseurs 15 000 €, caisse 2 150 €, clients 25 650 €, emprunt 20 000 €.<br><br>En janvier : achat de fournitures de bureau à crédit 3 000 € ; prestations vendues 35 000 € réglées par banque ; achat de 10 enveloppes pré-timbrées pour 60 € en espèces ; acquisition d’un ensemble informatique 18 000 €, payable à 60 jours ; nouvel emprunt bancaire de 30 000 €.`,
 questions:[
  {text:'Quel est le capital au bilan d’ouverture ?',choices:['70 000 €','105 000 €','35 000 €','31 940 €']},
  {text:'Quelles opérations ne génèrent pas de résultat ?',choices:['Acquisition informatique et nouvel emprunt','Vente de prestations seulement','Achat de fournitures et enveloppes','Toutes les opérations']},
  {text:'Quel est le résultat au 31 janvier N ?',choices:['Bénéfice de 31 940 €','Bénéfice de 35 000 €','Perte de 31 940 €']},
  {text:'Présentez le bilan au 31 janvier N.'}
 ],
 correction:`Capital d’ouverture = actif 105 000 − dettes 35 000 = <b>70 000 €</b>.<br>Les opérations sans effet sur le résultat sont l’acquisition de l’ensemble informatique et le nouvel emprunt.<br>Résultat = 35 000 − 3 000 − 60 = <b>31 940 € de bénéfice</b>.`,
 correctionTable:{headers:['Bilan au 31 janvier','Actif','Passif'],rows:[['Actif immobilisé','72 200 €','Capitaux propres','101 940 €'],['Actif circulant','115 740 €','Dettes','86 000 €'],['TOTAL','187 940 €','TOTAL','187 940 €']]}
},
'T1-S5':{
 statement:`Pour chaque opération de l’entreprise Pereira, indiquez s’il s’agit d’un enrichissement, d’un appauvrissement ou d’une simple modification de structure du patrimoine.`,
 table:{headers:['Opération','À classer'],rows:[['Achat de marchandises à crédit','?'],['Achat de matériel industriel','?'],['Règlement des clients par chèques','?'],['Location d’une voiture','?'],['Vente de marchandises à crédit','?']]},
 questions:[
  {text:'Achat de marchandises à crédit',choices:['Appauvrissement','Enrichissement','Modification de structure']},
  {text:'Achat de matériel industriel',choices:['Modification de structure','Appauvrissement','Enrichissement']},
  {text:'Règlement des clients par chèques',choices:['Modification de structure','Enrichissement','Appauvrissement']},
  {text:'Location d’une voiture',choices:['Appauvrissement','Enrichissement','Modification de structure']},
  {text:'Vente de marchandises à crédit',choices:['Enrichissement','Appauvrissement','Modification de structure']}
 ],
 correction:`Achat de marchandises : appauvrissement (charge).<br>Achat de matériel : modification de structure (une immobilisation remplace de la trésorerie ou crée une dette).<br>Règlement des clients : modification de structure (banque augmente, clients diminuent).<br>Location d’une voiture : appauvrissement (charge).<br>Vente de marchandises : enrichissement (produit).`
},
'T1-S6':{
 statement:`Une entreprise commerciale communique les éléments nécessaires à la double détermination de son résultat.<br><br>Achats de marchandises : 561 200 € ; stock initial : 39 000 € ; stock final : 35 000 € ; autres achats et charges externes : 134 000 € ; impôts et taxes : 21 000 € ; salaires : 108 000 € ; charges sociales : 38 000 € ; intérêts d’emprunt : 7 800 € ; amendes et pénalités : 2 000 € ; ventes de marchandises : 891 000 € ; intérêts de prêt : 2 500 €.`,
 questions:[
  {text:'Calculez la variation des stocks.',choices:['+ 4 000 €','− 4 000 €','74 000 €']},
  {text:'Déterminez le résultat par le compte de résultat.',choices:['Bénéfice de 17 500 €','Perte de 17 500 €','Bénéfice de 24 000 €']},
  {text:'Présentez le compte de résultat et contrôlez le résultat par la variation des capitaux propres.'}
 ],
 correction:`Variation = 39 000 − 35 000 = <b>+ 4 000 €</b>.<br>Total des charges = 876 000 €. Total des produits = 893 500 €.<br>Résultat = <b>bénéfice de 17 500 €</b>. La comparaison des capitaux propres d’ouverture et de clôture conduit au même résultat.`,
 correctionTable:{headers:['Compte de résultat','Charges','Produits'],rows:[['Exploitation','866 200 €','891 000 €'],['Financier','7 800 €','2 500 €'],['Exceptionnel','2 000 €','0 €'],['TOTAL','876 000 €','893 500 €'],['Résultat','17 500 €','Bénéfice']]}
}
});