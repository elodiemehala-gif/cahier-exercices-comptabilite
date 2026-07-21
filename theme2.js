window.EXERCISES=window.EXERCISES||{};
Object.assign(window.EXERCISES,{
'T2-S1':{
 statement:`L’entreprise Coutellelion a un solde débiteur du compte « 512 Banques » de 11 630 € au 1er septembre N.<br><br>Opérations du mois :<br>– 5/9 : remise de chèques pour les ventes au comptant : 8 932 €<br>– 10/9 : prélèvement des frais de tenue de compte : 21 €<br>– 18/9 : virement du client Dixon : 1 544 €<br>– 26/9 : prélèvement SEPA d’Orange : 1 363 €<br>– 29/9 : règlement de la facture de publicité par chèque : 3 722 €`,
 questions:[
  {text:'Pour la remise de chèques du 5/9, quel est l’emploi ?',choices:['Banque','Ventes','Frais bancaires']},
  {text:'Pour le prélèvement de frais du 10/9, quelle est la ressource ?',choices:['Banque','Frais bancaires','Client']},
  {text:'Quel est le solde du compte Banque au 30 septembre N ?',choices:['17 000 € débiteur','16 000 € débiteur','17 000 € créditeur']},
  {text:'Présentez et arrêtez le compte 512 Banques.'}
 ],
 table:{headers:['Date','Opération','Montant'],rows:[['1/9','Solde débiteur initial','11 630 €'],['5/9','Remise de chèques','8 932 €'],['10/9','Frais de tenue de compte','21 €'],['18/9','Virement client Dixon','1 544 €'],['26/9','Prélèvement Orange','1 363 €'],['29/9','Facture de publicité','3 722 €']]},
 correction:`Les encaissements augmentent le compte Banque au débit ; les paiements le diminuent au crédit.<br>Solde final = 11 630 + 8 932 + 1 544 − 21 − 1 363 − 3 722 = <b>17 000 € débiteur</b>.`,
 correctionTable:{headers:['Débit','Montant','Crédit','Montant'],rows:[['Solde initial','11 630 €','Frais bancaires','21 €'],['Remise de chèques','8 932 €','Orange','1 363 €'],['Virement client','1 544 €','Publicité','3 722 €'],['Total','22 106 €','Total mouvements','5 106 €'],['Solde débiteur','17 000 €','','']]}
},
'T2-S2':{
 statement:`L’entreprise Martin communique plusieurs comptes en T. Calculez le solde de chaque compte puis indiquez sa nature.`,
 table:{headers:['Compte','Débits','Crédits'],rows:[['512 Banques','3 995 ; 2 000 ; 1 360 ; 6 718','867 ; 1 114 ; 954'],['411 Clients','2 320 ; 8 785 ; 4 966','—'],['707 Ventes de marchandises','—','1 815 ; 432 ; 15 380 ; 6 762 ; 12 946'],['607 Achats de marchandises','6 327 ; 4 845 ; 7 320','1 853 ; 782'],['401 Fournisseurs','8 970','4 485 ; 4 485'],['101 Capital','—','8 500']]},
 questions:[
  {text:'Nature du solde du compte 512 Banques',choices:['Débiteur','Créditeur','Nul']},
  {text:'Nature du solde du compte 411 Clients',choices:['Débiteur','Créditeur','Nul']},
  {text:'Nature du solde du compte 707 Ventes',choices:['Créditeur','Débiteur','Nul']},
  {text:'Nature du solde du compte 401 Fournisseurs',choices:['Nul','Débiteur','Créditeur']},
  {text:'Calculez et arrêtez chaque compte.'}
 ],
 correction:`512 Banques : débit 14 073 €, crédit 2 935 €, solde débiteur 11 138 €.<br>411 Clients : solde débiteur 16 071 €.<br>707 Ventes : solde créditeur 37 335 €.<br>607 Achats : débit 18 492 €, crédit 2 635 €, solde débiteur 15 857 €.<br>401 Fournisseurs : solde nul.<br>101 Capital : solde créditeur 8 500 €.`,
 correctionTable:{headers:['Compte','Solde','Nature'],rows:[['512 Banques','11 138 €','Débiteur'],['411 Clients','16 071 €','Débiteur'],['707 Ventes','37 335 €','Créditeur'],['607 Achats','15 857 €','Débiteur'],['401 Fournisseurs','0 €','Nul'],['101 Capital','8 500 €','Créditeur']]}
},
'T2-S3':{
 statement:`Pour chaque élément, indiquez son numéro de compte et sa place dans les tableaux de synthèse : bilan ou compte de résultat.`,
 table:{headers:['Élément','Compte'],rows:[['Emprunt','164'],['Fournitures d’entretien','6063'],['Achat de mobilier','2184'],['Abonnement offre Internet','626'],['Publications','623'],['Locations diverses perçues','7083'],['Facture d’intérimaire','6211'],['Capital','101'],['Intérêt de l’emprunt','6611'],['Clients','411'],['Honoraires','6226'],['Variation des stocks de marchandises','6037'],['Fournisseurs','401'],['Électricité','6061'],['Brevets','205'],['Cadeaux à la clientèle','6234'],['Stocks de marchandises','37'],['Pénalités fiscales','6712']]},
 questions:[
  {text:'164 Emprunt',choices:['Passif — Dettes','Actif immobilisé','Charge financière']},
  {text:'6063 Fournitures d’entretien',choices:['Charge d’exploitation','Actif circulant','Produit d’exploitation']},
  {text:'2184 Mobilier',choices:['Actif immobilisé','Charge d’exploitation','Passif']},
  {text:'7083 Locations diverses perçues',choices:['Produit d’exploitation','Produit financier','Charge d’exploitation']},
  {text:'6611 Intérêt de l’emprunt',choices:['Charge financière','Dette financière','Produit financier']},
  {text:'6712 Pénalités fiscales',choices:['Charge exceptionnelle','Charge d’exploitation','Dette fiscale']},
  {text:'Classez tous les comptes dans les tableaux de synthèse.'}
 ],
 correction:`Emprunt : passif, dettes financières. Les intérêts sont une charge financière.<br>Mobilier et brevets : actif immobilisé.<br>Clients et stocks : actif circulant.<br>Capital : capitaux propres.<br>Fournisseurs : dettes.<br>Comptes 60, 61, 62 et 6234 : charges d’exploitation ; 6037 : charge d’exploitation ; 7083 : produit d’exploitation ; 6712 : charge exceptionnelle.`
},
'T2-S4':{
 statement:`L’entreprise Roulet communique dix opérations indépendantes. Pour chacune, indiquez la ressource et l’emploi, sélectionnez les comptes concernés puis effectuez la traduction comptable.`,
 table:{headers:['Repère','Opération','Montant'],rows:[['A','Apport d’un capital déposé à la banque','80 000 €'],['B','Achat d’un matériel de transport à crédit','35 000 €'],['C','Achats de marchandises à crédit','18 000 €'],['D','Ventes de marchandises à crédit','3 000 €'],['E','Des clients règlent en espèces','850 €'],['F','Fournitures administratives payées en espèces','150 €'],['G','Achats de marchandises réglés par chèque','6 400 €'],['H','Frais bancaires prélevés','15 €'],['I','Ouverture d’un compte chèque postal par virement bancaire','15 000 €'],['J','Salaires payés par chèques postaux','12 000 €']]},
 questions:[
  {text:'A — Compte débité',choices:['512 Banques','101 Capital','164 Emprunts']},
  {text:'A — Compte crédité',choices:['101 Capital','512 Banques','707 Ventes']},
  {text:'B — Compte débité',choices:['2182 Matériel de transport','404 Fournisseurs d’immobilisations','607 Achats']},
  {text:'D — Compte crédité',choices:['707 Ventes de marchandises','411 Clients','512 Banques']},
  {text:'I — Traduction correcte',choices:['Débit 514 / Crédit 512','Débit 512 / Crédit 514','Débit 514 / Crédit 101']},
  {text:'Traduisez les dix opérations.'}
 ],
 correction:`A : Débit 512 Banque 80 000 / Crédit 101 Capital 80 000.<br>B : Débit 2182 Matériel de transport 35 000 / Crédit 404 Fournisseurs d’immobilisations 35 000.<br>C : Débit 607 Achats 18 000 / Crédit 401 Fournisseurs 18 000.<br>D : Débit 411 Clients 3 000 / Crédit 707 Ventes 3 000.<br>E : Débit 530 Caisse 850 / Crédit 411 Clients 850.<br>F : Débit 6064 Fournitures administratives 150 / Crédit 530 Caisse 150.<br>G : Débit 607 Achats 6 400 / Crédit 512 Banque 6 400.<br>H : Débit 627 Services bancaires 15 / Crédit 512 Banque 15.<br>I : Débit 514 Chèques postaux 15 000 / Crédit 512 Banque 15 000.<br>J : Débit 641 Rémunérations 12 000 / Crédit 514 Chèques postaux 12 000.`
},
'T2-S5':{
 statement:`Des associés créent l’entreprise Balen. Ils apportent du matériel industriel pour 13 500 €, du mobilier pour 1 500 € et un avoir en banque de 6 000 €.<br><br>Puis l’entreprise réalise les opérations suivantes : achats de marchandises à crédit 1 200 € ; ouverture d’un compte chèque postal par virement bancaire 2 400 € ; ventes au comptant par chèque bancaire 3 850 € ; paiement du loyer par chèque 320 € ; emprunt bancaire par virement 4 000 € ; achat d’actions de placement par prélèvement bancaire 820 € ; règlement d’un fournisseur par chèque 600 € ; dépôt de garantie 95 € ; acquisition d’un brevet 1 200 € à crédit ; honoraires 460 €.`,
 questions:[
  {text:'Montant du capital à l’ouverture',choices:['21 000 €','15 000 €','27 000 €']},
  {text:'Le compte 503 Actions est normalement',choices:['Débiteur','Créditeur','Nul']},
  {text:'Le compte 401 Fournisseurs est normalement',choices:['Créditeur','Débiteur','Nul']},
  {text:'Le compte 607 Achats est normalement',choices:['Débiteur','Créditeur','Nul']},
  {text:'Ouvrez les comptes, comptabilisez les opérations et calculez les soldes.'}
 ],
 correction:`Le capital est égal au total des apports : 13 500 + 1 500 + 6 000 = <b>21 000 €</b>.<br>Les comptes d’actif et de charges ont en principe un solde débiteur ; les comptes de passif et de produits un solde créditeur.<br>Le total des soldes débiteurs est égal au total des soldes créditeurs : <b>30 650 €</b>.`
},
'T2-S6':{
 statement:`La société de services « Passe et Repasse » démarre avec un capital de 100 000 €. Les principales opérations de l’exercice sont les suivantes : prestations de services 120 000 € dont 80 000 € à crédit et 40 000 € encaissées ; achats de fournitures non stockables 3 480 € à crédit ; fournitures d’entretien 5 170 € à crédit ; publicité 1 900 € payée par banque ; entretien et réparations 4 640 € payés par banque ; emprunt bancaire 20 000 €, dont 2 400 € remboursés ; charges d’intérêts 1 200 € ; encaissement de chèques clients 2 800 € ; retrait d’espèces 1 500 € ; règlement fournisseurs 3 660 € ; assurance 4 500 € ; salaires 12 850 €. Les immobilisations comprennent du matériel industriel 40 000 € et du matériel de transport 70 000 €.`,
 questions:[
  {text:'Solde final du compte Banque',choices:['20 150 € débiteur','32 650 € débiteur','20 150 € créditeur']},
  {text:'Solde final du compte Clients',choices:['77 200 € débiteur','80 000 € débiteur','2 800 € créditeur']},
  {text:'Résultat de l’exercice',choices:['Bénéfice de 86 260 €','Perte de 86 260 €','Bénéfice de 120 000 €']},
  {text:'Total du bilan au 31 décembre N',choices:['208 850 €','186 260 €','120 000 €']},
  {text:'Ouvrez et arrêtez les comptes, puis établissez le compte de résultat et le bilan.'}
 ],
 correction:`Le compte Banque présente un solde débiteur de <b>20 150 €</b>. Le compte Clients présente un solde débiteur de <b>77 200 €</b>.<br>Produits : 120 000 €. Charges : 33 740 €. Résultat : <b>bénéfice de 86 260 €</b>.<br>Le total général du bilan est de <b>208 850 €</b>.`,
 correctionTable:{headers:['Bilan au 31/12/N','Actif','Passif'],rows:[['Matériel industriel','40 000 €','Capital','100 000 €'],['Matériel de transport','70 000 €','Résultat','86 260 €'],['Clients','77 200 €','Emprunt','17 600 €'],['Disponibilités','21 650 €','Fournisseurs','4 990 €'],['TOTAL','208 850 €','TOTAL','208 850 €']]}
}
});