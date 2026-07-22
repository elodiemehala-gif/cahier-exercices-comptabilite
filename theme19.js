window.EXERCISES=window.EXERCISES||{};
Object.assign(window.EXERCISES,{
'T19-S1':{
 statement:`L’entreprise Cramet vous communique les renseignements suivants issus de son bilan au 31 décembre N :<br><br>– actif immobilisé brut : 549 000 € ;<br>– actif circulant d’exploitation brut : 94 800 € ;<br>– actif circulant hors exploitation brut : 45 000 € ;<br>– amortissements et dépréciations : 196 000 € ;<br>– capitaux propres : 348 000 € ;<br>– dettes d’exploitation : 53 500 € ;<br>– dettes hors exploitation : 12 400 € ;<br>– dettes financières : 83 600 € ;<br>– disponibilités : 4 700 €.`,
 questions:[
  {text:'Déterminez le fonds de roulement net global.',choices:['78 600 €','83 300 €','73 900 €','41 300 €']},
  {text:'Calculez le besoin en fonds de roulement d’exploitation.',choices:['41 300 €','32 600 €','73 900 €','4 700 €']},
  {text:'Calculez le besoin en fonds de roulement hors exploitation.',choices:['32 600 €','41 300 €','78 600 €','12 400 €']},
  {text:'Calculez le besoin en fonds de roulement total et la trésorerie nette.'}
 ],
 correction:`Ressources stables = 348 000 + 196 000 + 83 600 = <b>627 600 €</b>.<br>FRNG = 627 600 − 549 000 = <b>78 600 €</b>.<br>BFRE = 94 800 − 53 500 = <b>41 300 €</b>.<br>BFRHE = 45 000 − 12 400 = <b>32 600 €</b>.<br>BFR = 41 300 + 32 600 = <b>73 900 €</b>.<br>Trésorerie nette = FRNG − BFR = 78 600 − 73 900 = <b>4 700 €</b>, ce qui correspond aux disponibilités.`,
 correctionTable:{headers:['Indicateur','Calcul','Montant'],rows:[['FRNG','627 600 − 549 000','78 600 €'],['BFRE','94 800 − 53 500','41 300 €'],['BFRHE','45 000 − 12 400','32 600 €'],['BFR','41 300 + 32 600','73 900 €'],['Trésorerie nette','78 600 − 73 900','4 700 €']]}
},
'T19-S2':{
 statement:`La société Lemiale vous confie l’élaboration du tableau de financement. Le bilan au 31 décembre N−1 comprend notamment :<br><br>Actif brut : constructions 90 000 €, installations techniques 120 000 €, stocks 40 000 €, clients 130 000 €, créances diverses 6 000 €, valeurs mobilières de placement 5 000 €, disponibilités 22 000 €.<br><br>Amortissements et dépréciations : constructions 9 000 €, installations techniques 48 000 €, stocks 2 400 €, clients 3 000 €.<br><br>Passif net : capital 120 000 €, réserves 15 000 €, résultat 31 600 €, provisions pour risques 25 000 €, emprunts 40 000 €, fournisseurs 100 000 €, dettes fiscales et sociales 4 000 €, dettes sur immobilisations 15 000 €.`,
 questions:[
  {text:'Reconstituez les valeurs nettes des postes d’actif.'},
  {text:'Classez les éléments entre emplois stables, actif circulant d’exploitation, actif circulant hors exploitation et trésorerie active.'},
  {text:'Classez les postes du passif entre ressources stables, dettes d’exploitation, dettes hors exploitation et trésorerie passive.'},
  {text:'Expliquez la logique du tableau des emplois et des ressources et les contrôles à effectuer.'}
 ],
 correction:`Valeurs nettes principales : constructions <b>81 000 €</b>, installations techniques <b>72 000 €</b>, stocks <b>37 600 €</b>, clients <b>127 000 €</b>. Les créances diverses, VMP et disponibilités restent respectivement à 6 000 €, 5 000 € et 22 000 €.<br><br>Dans le bilan fonctionnel, les immobilisations sont retenues en valeur brute parmi les emplois stables. Les amortissements et dépréciations sont ajoutés aux ressources stables. Les capitaux propres, provisions et dettes financières constituent les autres ressources stables.<br><br>Le tableau des emplois et ressources explique la variation du FRNG : les acquisitions et remboursements sont des emplois ; la CAF, les cessions, augmentations de capital et nouveaux emprunts sont des ressources. Le contrôle final consiste à rapprocher la variation du FRNG de la variation du BFR et de la trésorerie.`,
 correctionTable:{headers:['Rubrique','Éléments principaux'],rows:[['Emplois stables','Immobilisations en valeur brute'],['Ressources stables','Capitaux propres + amortissements/dépréciations + provisions + dettes financières'],['Cycle d’exploitation','Stocks, clients, fournisseurs, dettes fiscales et sociales'],['Hors exploitation','Créances diverses et dettes sur immobilisations'],['Trésorerie','VMP et disponibilités, diminuées des concours bancaires éventuels']]}
}
});