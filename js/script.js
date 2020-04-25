// Classe Item
class Item {
	constructor(butt, src1, src2, pr) {
		this.bouton = butt;
		this.bool = 0;
		this.prix = pr;
		this.src = src1;
		this.srcOff = src2;
		this.child = [];
	}
	
	clicked(click) {
		this.bool = (this.bool + 1)%2;
		if (click == 1) {
			if (this.bool) {
				this.bouton.src = this.src;
			}
			else {
				this.bouton.src = this.srcOff;
			}
		}
		else if (click == 2) {
			this.set_all(this.bool);
		}
	}
	
	set_all(bool) {
		this.bool = bool;
		if (bool) {
			this.bouton.src = this.src;
		}
		else {
			this.bouton.src = this.srcOff;
		}
		for (var i in this.child) {
			this.child[i].set_all(bool);
		}
	}
	
	add_child(item) {
		this.child = item;
	}
}

// Pages
var pageAxeofZues = document.getElementById('Page-Axe-of-Zues');

// Variables affichages
var prixPage1 = document.getElementById('Prix-Page-Axe');

// Variables Script
var pageActive = 1; // Indique la page active (1=Axe)
var selected = []; // Liste des item sélectionné
var itemDict = [];

// Boutons
var bouton_Ofthesae = document.getElementById('Bouton-Ofthesae');
var bouton_Staffofnegation = document.getElementById('Bouton-Staffofnegation');
var bouton_Aerialstrike = document.getElementById('Bouton-Aerialstrike');
var bouton_Arcanesword = document.getElementById('Bouton-Arcanesword');
var bouton_Angelice = document.getElementById('Bouton-Angelice');
var bouton_Godarmor = document.getElementById('Bouton-Godarmor');
var bouton_Starrofhealth = document.getElementById('Bouton-Starrofhealth');
var bouton_Arcaneshield = document.getElementById('Bouton-Arcaneshield');
var bouton_Spidersik = document.getElementById('Bouton-Spidersik');
var bouton_Wandofneutralization = document.getElementById('Bouton-Wandofneutralization');
var bouton_Meladilion = document.getElementById('Bouton-Meladilion');
var bouton_Keyofthemoon = document.getElementById('Bouton-Keyofthemoon');
var bouton_Mightyaxe = document.getElementById('Bouton-Mightyaxe');
var bouton_Offensivestrike = document.getElementById('Bouton-Offensivestrike');
var bouton_Infernalfist = document.getElementById('Bouton-Infernalfist');
var bouton_Holywarfare = document.getElementById('Bouton-Holywarfare');
var bouton_Godshield = document.getElementById('Bouton-Godshield');
var bouton_Defensivestrike = document.getElementById('Bouton-Defensivestrike');
var bouton_Dimensionalshield = document.getElementById('Bouton-Dimensionalshield');
var bouton_Guardianforce = document.getElementById('Bouton-Guardianforce');
var bouton2Spidersik = document.getElementById('Bouton2Spidersik');
var bouton2Wandofneutralization = document.getElementById('Bouton2Wandofneutralization');
var bouton2Meladilion = document.getElementById('Bouton2Meladilion');
var bouton2Keyofthemoon = document.getElementById('Bouton2Keyofthemoon');
var bouton_Dragonitem = document.getElementById('Bouton-Dragonitem');
var bouton_Superitem = document.getElementById('Bouton-Superitem');

// Objets
var Ofthesae = createItem(bouton_Ofthesae, 100);
var Staffofnegation = createItem(bouton_Staffofnegation, 80);
var Aerialstrike = createItem(bouton_Aerialstrike, 75);
var Arcanesword = createItem(bouton_Arcanesword, 50);
var Angelice = createItem(bouton_Angelice, 20);
var Godarmor = createItem(bouton_Godarmor, 95);
var Starrofhealth = createItem(bouton_Starrofhealth, 100);
var Arcaneshield = createItem(bouton_Arcaneshield, 50);
var Spidersik = createItem(bouton_Spidersik, 90);
var Wandofneutralization = createItem(bouton_Wandofneutralization, 85);
var Meladilion = createItem(bouton_Meladilion, 70);
var Keyofthemoon = createItem(bouton_Keyofthemoon, 50);
var Mightyaxe = createItem(bouton_Mightyaxe, 40);
var Offensivestrike = createItem(bouton_Offensivestrike, 75);
var Infernalfist = createItem(bouton_Infernalfist, 90);
var Holywarfare = createItem(bouton_Holywarfare, 50);
var Godshield = createItem(bouton_Godshield, 80);
var Defensivestrike = createItem(bouton_Defensivestrike, 75);
var Dimensionalshield = createItem(bouton_Dimensionalshield, 40);
var Guardianforce = createItem(bouton_Guardianforce, 50);
var Spidersik2 = createItem(bouton2Spidersik, 90);
var Wandofneutralization2 = createItem(bouton2Wandofneutralization, 85);
var Meladilion2 = createItem(bouton2Meladilion, 70);
var Keyofthemoon2 = createItem(bouton2Keyofthemoon, 50);
var Dragonitem = createItem(bouton_Dragonitem, 100);
var Superitem = createItem(bouton_Superitem, 100);

// Fonction qui créer les objets
function createItem(bouton, prix) {
	var srcOff = bouton.src;
	var src = srcOff.slice(0, -8) + '.png';
	var item = new Item(bouton, src, srcOff, prix);
	itemDict[bouton.id] = item;
	return item;
}

// Dépendences Objets
Arcanesword.add_child([Ofthesae, Staffofnegation, Aerialstrike]);
Arcaneshield.add_child([Angelice, Godarmor, Starrofhealth]);
Keyofthemoon.add_child([Spidersik, Wandofneutralization, Meladilion]);
Holywarfare.add_child([Mightyaxe, Offensivestrike, Infernalfist]);
Guardianforce.add_child([Godshield, Defensivestrike, Dimensionalshield]);
Keyofthemoon2.add_child([Spidersik2, Wandofneutralization2, Meladilion2]);
Dragonitem.add_child([Arcanesword, Arcaneshield, Keyofthemoon]);
Superitem.add_child([Holywarfare, Guardianforce, Keyofthemoon2]);

// Fonction Refresh Prix
function refreshPrix() {
	if (pageActive == 1) {
		prixPageAxe();
	}
}

// Fonction Prix Page AxeofZues
function prixPageAxe() {
	var total = 0;
	for (var i in selected) {
		total += selected[i].prix;
	}
	prixPage1.innerHTML = (total*1000).toLocaleString();
}

// Fonction ajoute/retire item clické
function clickedItem(item, click) {
	var index = selected.indexOf(item);
	if (index == -1) {
		selected.push(item);
		var mode = 0;
	}
	else {
		selected.splice(index, 1);
		var mode = 1;
	}
	if (click == 2) {
		var childArray = item.child;
		var i = 0;
		while (i < childArray.length) {
			var childItem = childArray[i];
			if (childItem.child.length > 0) {
				childArray = childArray.concat(childItem.child);
			}
			var index2 = selected.indexOf(childItem);
			if (mode == 0) {
				if (index2 == -1) {
					selected.push(childItem);
				}
			}
			else {
				if (index2 != -1) {
					selected.splice(index2, 1);
				}
			}
			i++;
		}
	}
	console.log(selected);
	refreshPrix();
}

// Fonctions click sur un item
$('input').mousedown(function(click){
	var item = itemDict[click.target.id];
	item.clicked(click.which);
	clickedItem(item, click.which);
});