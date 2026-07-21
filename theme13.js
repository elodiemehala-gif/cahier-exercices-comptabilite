window.EXERCISES=window.EXERCISES||{};
Object.assign(window.EXERCISES,{
'T13-S1':{
 statement:`La société Kalliste détient un fonds commercial inscrit à l'actif pour 230 000 €. À la clôture de l'exercice N, sa valeur vénale est estimée à 192 000 € et sa valeur d'usage à 176 000 €.`,
 questions:[
  {text:'Quelle valeur doit être retenue comme valeur actuelle ?',choices:['192 000 €','176 000 €','230 000 €','38 000 €']},
  {text:'Quel est le montant de la dépréciation ?',choices:['38 000 €','54 000 €','16 000 €','0 €']},
  {text:'Enregistrez l'écriture nécessaire au 31 décembre N.'},
  {text:'Cette dépréciation pourra-t-elle être reprise ultérieurement ?',choices:['Non','Oui, intégralement','Oui, dans la limite de 50 %','Uniquement lors de la cession']}
 ],
 correction:`La valeur actuelle est la plus élevée entre la valeur vénale et la valeur d'usage : <b>192 000 €</b>.<br>Dépréciation : 230 000 – 192 000 = <b>38 000 €</b>.<br>Les dépréciations du fonds commercial ne sont pas reprises.`,
 correctionTable:{headers:['Compte débité','Débit','Compte crédité','Crédit'],rows:[['6816 Dotations aux dépréciations des immobilisations incorporelles et corporelles','38 000 €','2907 Dépréciations du fonds commercial','38 000 €']]}
},
'T13-S2':{
 statement:`Une machine a été acquise 60 000 € au début de l'exercice N et est amortie linéairement sur 5 ans. Au 31 décembre N, sa valeur vénale est de 44 000 €. Les flux nets de trésorerie futurs estimés sont de 20 000 €, 15 000 €, 11 400 € et 5 520 €, actualisés respectivement à 18 868 €, 13 350 €, 9 572 € et 4 372 €.`,
 questions:[
  {text:'Quelle est la valeur nette comptable de la machine au 31 décembre N ?',choices:['48 000 €','60 000 €','46 162 €','44 000 €']},
  {text:'Quelle est la valeur d'usage ?',choices:['46 162 €','44 000 €','48 000 €','51 920 €']},
  {text:'Quelle valeur actuelle faut-il retenir ?',choices:['46 162 €','44 000 €','48 000 €','60 000 €']},
  {text:'Quel est le montant de la dépréciation ?',choices:['1 838 €','4 000 €','3 838 €','0 €']},
  {text:'Enregistrez la dépréciation au 31 décembre N.'}
 ],
 correction:`VNC : 60 000 – (60 000 × 20 %) = <b>48 000 €</b>.<br>Valeur d'usage : 18 868 + 13 350 + 9 572 + 4 372 = <b>46 162 €</b>.<br>La valeur actuelle est donc 46 162 €, supérieure à la valeur vénale.<br>Dépréciation : 48 000 – 46 162 = <b>1 838 €</b>.`,
 correctionTable:{headers:['Compte débité','Débit','Compte crédité','Crédit'],rows:[['6816 Dotations aux dépréciations des immobilisations incorporelles et corporelles','1 838 €','2915 Dépréciations des installations techniques','1 838 €']]}
},
'T13-S3':{
 statement:`Une immobilisation présente une valeur nette comptable de 3 737,50 € à la fin de N+2. Le test de dépréciation fixe sa valeur actuelle à 2 990 €. Sa durée d'utilisation restante est de 3 ans et 3 mois.`,
 questions:[
  {text:'Quel est le montant de la dépréciation à constater ?',choices:['747,50 €','920 €','2 990 €','3 737,50 €']},
  {text:'Quelle devient la nouvelle base amortissable ?',choices:['2 990 €','3 737,50 €','747,50 €','4 657,50 €']},
  {text:'Quelle est la nouvelle annuité d'amortissement ?',choices:['920 €','747,50 €','996,67 €','1 150 €']},
  {text:'Présentez le principe de révision du plan d'amortissement et les écritures de fin d'exercice.'}
 ],
 correction:`Dépréciation : 3 737,50 – 2 990 = <b>747,50 €</b>.<br>La nouvelle base amortissable est la valeur actuelle, soit <b>2 990 €</b>.<br>Durée restante : 3,25 ans ; nouvelle annuité : 2 990 / 3,25 = <b>920 €</b>.`,
 correctionTable:{headers:['Écriture','Débit','Crédit'],rows:[['6811 Dotation aux amortissements / 28 Amortissements','920 €','920 €'],['6816 Dotation aux dépréciations / 29 Dépréciations','747,50 €','747,50 €']]}
},
'T13-S4':{
 statement:`L'entreprise Lennez a acquis une machine-outil le 1er janvier N pour 72 000 €, amortissable en mode linéaire sur 5 ans. Fin N+1, une dépréciation de 12 000 € a été constatée. Fin N+2, le nouveau test de dépréciation fait apparaître une reprise théorique de 8 700 €.`,
 questions:[
  {text:'Quelle est l'annuité d'amortissement d'origine ?',choices:['14 400 €','12 000 €','8 700 €','18 000 €']},
  {text:'Pourquoi la reprise de dépréciation peut-elle être limitée ?'},
  {text:'Calculez le plafond de valeur nette comptable sans dépréciation au 31 décembre N+2.'},
  {text:'Déterminez la reprise effectivement comptabilisable et enregistrez les opérations nécessaires.'}
 ],
 correction:`Annuité d'origine : 72 000 / 5 = <b>14 400 €</b>.<br>La reprise ne peut pas porter la valeur nette comptable au-dessus de celle qui aurait existé si aucune dépréciation n'avait été constatée.<br>Au 31 décembre N+2, la VNC théorique sans dépréciation est de 72 000 – 3 × 14 400 = <b>28 800 €</b>. La reprise doit donc être plafonnée en fonction de cette limite après calcul de l'amortissement révisé.`,
 correctionTable:{headers:['Compte débité','Débit','Compte crédité','Crédit'],rows:[['2915 Dépréciations des installations techniques','Reprise limitée','7816 Reprises sur dépréciations des immobilisations','Même montant'],['6811 Dotations aux amortissements','Annuité révisée','2815 Amortissements des installations techniques','Même montant']]}
}
});