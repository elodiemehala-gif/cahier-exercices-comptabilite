window.EXERCISES=window.EXERCISES||{};
Object.assign(window.EXERCISES,{
'T8-S1':{
 statement:`L’entreprise Bonnel vous communique les opérations affectant la gestion de son portefeuille d’effets :<br><br>2/6 Envoi de la LCR n° 106 au client Canou en règlement de la facture n° 235, montant 3 450 €.<br>3/6 Réception du client Destel du BOR n° 36, en règlement de la facture n° 213, montant 6 270 €.<br>5/6 Réception de la LCR n° 1080 du fournisseur Lamille, montant 2 880 €.<br>7/6 Retour de la LCR n° 106 acceptée.<br>9/6 Envoi du BOR n° 18 au fournisseur Rali, montant 4 360 €.<br>15/6 Acceptation de la LCR n° 1080.`,
 questions:[
  {text:'Quelle opération donne lieu à une écriture le 3/6 ?',choices:['Réception d’un effet à recevoir','Aucune écriture','Paiement bancaire']},
  {text:'Quelle écriture constater le 7/6 ?',choices:['Débit 413 / Crédit 411 : 3 450 €','Débit 411 / Crédit 413 : 3 450 €','Débit 512 / Crédit 411 : 3 450 €']},
  {text:'Quelle écriture constater le 15/6 ?',choices:['Débit 401 / Crédit 403 : 2 880 €','Débit 403 / Crédit 401 : 2 880 €','Débit 512 / Crédit 401 : 2 880 €']},
  {text:'Enregistrez toutes les opérations nécessaires au journal.'}
 ],
 correction:`Les simples envois d’effets non encore acceptés ne sont pas comptabilisés. Le BOR reçu du client Destel constitue immédiatement un effet à recevoir : débit 413 / crédit 411 pour 6 270 €. Le retour accepté de la LCR Canou entraîne : débit 413 / crédit 411 pour 3 450 €. Le BOR envoyé au fournisseur Rali est un effet à payer : débit 401 / crédit 403 pour 4 360 €. L’acceptation de la LCR Lamille entraîne : débit 401 / crédit 403 pour 2 880 €.`
},
'T8-S2':{
 statement:`Les opérations suivantes se sont déroulées en juillet dans l’entreprise Pichot :<br><br>5/7 Envoi de la LCR n° 2135 au client Punto, montant 3 547 €, échéance 30 juillet.<br>8/7 Facture n° 745 du fournisseur Couzat : brut 15 000 €, remise 20 %, TVA 20 %. LCR n° 347 à accepter, échéance 30 juillet.<br>9/7 Retour de la LCR n° 2135 acceptée.<br>10/7 Facture n° 1450 au client Lajoie : brut 8 700 €, remises 20 % et 10 %, TVA 20 %. LCR n° 2136 jointe, échéance 30 août.<br>14/7 Cession de créances à la société d’affacturage JNB pour 22 000 € TTC.<br>17/7 Avis de paiement du factor : commission 220 € HT, TVA 44 €, retenue financière 165 €.<br>25/7 Remise à l’escompte de la LCR Lajoie : brut 7 516,80 €, escompte 66,82 €, commissions 140 €, TVA 28 €.<br>31/7 Encaissement de la LCR Punto : brut 3 547 €, commissions 120 €, TVA 24 €.`,
 questions:[
  {text:'Montant net de la facture Couzat ?',choices:['14 400 €','12 000 €','15 000 €']},
  {text:'Montant TTC de la facture Lajoie ?',choices:['7 516,80 €','6 264 €','8 700 €']},
  {text:'Net reçu du factor le 17/7 ?',choices:['21 571 €','22 000 €','21 615 €']},
  {text:'Net porté en compte lors de l’escompte du 25/7 ?',choices:['7 281,98 €','7 516,80 €','7 309,98 €']},
  {text:'Enregistrez les opérations au journal.'}
 ],
 correction:`8/7 : achat 12 000 €, TVA 2 400 €, fournisseur 14 400 €. 9/7 : débit 413 / crédit 411 pour 3 547 €. 10/7 : vente 6 264 €, TVA 1 252,80 €, client 7 516,80 €. 14/7 : débit 467 / crédit 411 pour 22 000 €. 17/7 : banque 21 571 €, rémunération d’affacturage 220 €, TVA 44 €, charge financière 165 €, contrepartie 467 pour 22 000 €. 25/7 : banque 7 281,98 €, services bancaires 140 €, TVA 28 €, intérêts 66,82 €, contrepartie 5114 pour 7 516,80 €. 31/7 : banque 3 403 €, services bancaires 120 €, TVA 24 €, contrepartie 413 pour 3 547 €.`
},
'T8-S3':{
 statement:`Une entreprise cède à sa banque, dans le cadre d’une cession de créances professionnelles, un ensemble de créances clients. La banque verse immédiatement le financement, puis prélève les intérêts et commissions prévus au contrat. À l’échéance, les créances sont réglées par les clients.`,
 questions:[
  {text:'Quel compte constate la créance cédée à la banque ?',choices:['519 Concours bancaires courants','411 Clients','512 Banques']},
  {text:'Le financement reçu constitue-t-il une extinction immédiate des créances clients ?',choices:['Non','Oui']},
  {text:'Présentez les trois étapes : cession, encaissement du financement, remboursement.'}
 ],
 correction:`La cession Dailly n’éteint pas immédiatement les créances clients. La banque accorde un financement de trésorerie, généralement comptabilisé au crédit du compte 519. Les intérêts et commissions sont enregistrés en charges financières et services bancaires. À l’échéance, le remboursement du concours bancaire est constaté lorsque les créances sont encaissées.`
},
'T8-S4':{
 statement:`Une entreprise place temporairement sa trésorerie dans des valeurs mobilières de placement. Au cours de l’exercice, elle réalise des acquisitions, des cessions avec gain ou perte, perçoit des revenus et constate éventuellement une dépréciation à la clôture.`,
 questions:[
  {text:'Une VMP est-elle une immobilisation financière ?',choices:['Non, c’est un actif circulant','Oui, toujours','Seulement si elle est cotée']},
  {text:'Compte principal utilisé lors de l’acquisition ?',choices:['50 — Valeurs mobilières de placement','26 — Participations','27 — Autres immobilisations financières']},
  {text:'Une cession au-dessus du coût d’acquisition génère quoi ?',choices:['Un produit financier','Une charge financière','Une dépréciation']},
  {text:'Présentez les écritures d’acquisition, cession, revenus et dépréciation.'}
 ],
 correction:`Les VMP sont des actifs circulants acquis pour placer à court terme une trésorerie disponible. Elles sont enregistrées dans les comptes 50. Les gains de cession sont portés en produits financiers, les pertes en charges financières. Les revenus sont comptabilisés en 764. À la clôture, une dépréciation est constatée si la valeur actuelle est inférieure à la valeur comptable.`
},
'T8-S5':{
 statement:`Une entreprise compare le solde de son compte 512 Banques au relevé transmis par la banque. Certains chèques ne sont pas encore débités, une remise de chèque n’est pas encore créditée et des frais bancaires ne figurent pas encore en comptabilité.`,
 questions:[
  {text:'Quel est l’objectif de l’état de rapprochement ?',choices:['Expliquer les écarts et retrouver un solde concordant','Modifier le relevé bancaire','Annuler les opérations non pointées']},
  {text:'Les chèques émis non encore débités nécessitent-ils une écriture supplémentaire ?',choices:['Non, ils sont déjà comptabilisés','Oui, toujours']},
  {text:'Les frais bancaires absents de la comptabilité nécessitent-ils une écriture ?',choices:['Oui','Non']},
  {text:'Établissez l’état de rapprochement et les écritures de redressement.'}
 ],
 correction:`L’état de rapprochement part des deux soldes et ajoute ou retranche les opérations non pointées pour aboutir à un solde identique. Seules les opérations connues par la banque mais pas encore enregistrées dans la comptabilité donnent lieu à des écritures de régularisation : frais bancaires, intérêts, prélèvements, virements ou encaissements inconnus de l’entreprise.`
},
'T8-S6':{
 statement:`L’entreprise Serfati communique son relevé bancaire d’avril et le détail du compte 512 Banques. Le relevé fait notamment apparaître : prélèvement EDF 2 350 €, virement du client Aubin 1 200 €, chèque n° 64837 de 7 540 €, encaissement de coupons 1 436 €, domiciliations échues 3 365,80 €, commissions 58 € TTC et remise de chèque 6 470 €. Le solde du compte 512 avant rapprochement est de 21 144 €.`,
 questions:[
  {text:'Montant HT du prélèvement EDF ?',choices:['1 958,33 €','2 350 €','1 880 €']},
  {text:'TVA sur les commissions bancaires ?',choices:['9,67 €','11,60 €','48,33 €']},
  {text:'Solde rapproché ?',choices:['16 806,20 €','21 144 €','13 422,20 €']},
  {text:'Établissez l’état de rapprochement et passez les écritures de régularisation.'}
 ],
 correction:`Le solde rapproché est de 16 806,20 €. Le prélèvement EDF de 2 350 € comprend 1 958,33 € HT et 391,67 € de TVA. Les commissions de 58 € comprennent 48,33 € HT et 9,67 € de TVA. L’encaissement de coupons de 1 436 € est enregistré au crédit du compte 764. Les domiciliations échues et frais bancaires sont régularisés dans le compte 512.`
},
'T8-S7':{
 statement:`À la suite de la défaillance d’un client, l’entreprise Arti prévoit un solde créditeur de banque de 20 000 € du 25 juin au 10 juillet N. Deux solutions sont envisagées :<br><br>1. Découvert bancaire au taux de 9,5 %, avec commission du plus fort découvert de 0,05 % appliquée deux fois.<br>2. Remise à l’escompte le 24 juin d’un effet de 22 000 € à échéance du 15 juillet, taux d’escompte 8,9 %, commission sur effet 0,8 % prorata temporis et commission de manipulation de 2 €.`,
 questions:[
  {text:'Coût du découvert bancaire ?',choices:['104,44 €','84,44 €','126,49 €']},
  {text:'Coût de l’escompte ?',choices:['126,49 €','114,22 €','104,44 €']},
  {text:'Quelle solution retenir ?',choices:['Le découvert bancaire','La remise à l’escompte','Les deux sont équivalentes']}
 ],
 correction:`Découvert : intérêts = (20 000 × 9,5 % × 16 / 360) = 84,44 € ; commission = (20 000 × 0,05 %) × 2 = 20 € ; coût total = <b>104,44 €</b>.<br>Escompte : intérêts = (22 000 × 8,9 % × 21 / 360) = 114,22 € ; commission sur effet = 10,27 € ; manipulation = 2 € ; coût total = <b>126,49 €</b>.<br>La solution la moins coûteuse est donc <b>le découvert bancaire</b>.`
}
});