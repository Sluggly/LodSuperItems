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

// Objets
var Ofthesae = createItem('Bouton-Ofthesae', 100);
var Staffofnegation = createItem('Bouton-Staffofnegation', 80);
var Aerialstrike = createItem('Bouton-Aerialstrike', 75);
var Arcanesword = createItem('Bouton-Arcanesword', 50);
var Angelice = createItem('Bouton-Angelice', 20);
var Godarmor = createItem('Bouton-Godarmor', 95);
var Starrofhealth = createItem('Bouton-Starrofhealth', 100);
var Arcaneshield = createItem('Bouton-Arcaneshield', 50);
var Spidersik = createItem('Bouton-Spidersik', 90);
var Wandofneutralization = createItem('Bouton-Wandofneutralization', 85);
var Meladilion = createItem('Bouton-Meladilion', 70);
var Keyofthemoon = createItem('Bouton-Keyofthemoon', 50);
var Mightyaxe = createItem('Bouton-Mightyaxe', 40);
var Offensivestrike = createItem('Bouton-Offensivestrike', 75);
var Infernalfist = createItem('Bouton-Infernalfist', 90);
var Holywarfare = createItem('Bouton-Holywarfare', 50);
var Godshield = createItem('Bouton-Godshield', 80);
var Defensivestrike = createItem('Bouton-Defensivestrike', 75);
var Dimensionalshield = createItem('Bouton-Dimensionalshield', 40);
var Guardianforce = createItem('Bouton-Guardianforce', 50);
var Spidersik2 = createItem('Bouton-2Spidersik', 90);
var Wandofneutralization2 = createItem('Bouton-2Wandofneutralization', 85);
var Meladilion2 = createItem('Bouton-2Meladilion', 70);
var Keyofthemoon2 = createItem('Bouton-2Keyofthemoon', 50);
var Dragonitem = createItem('Bouton-Dragonitem', 100);
var Superitem = createItem('Bouton-Superitem', 100);
var Sunitem = createItem('Bouton-Sunitem', 100);
var Arcanitemelee = createItem('Bouton-Arcanitemelee', 85);
var Scepterofmastery = createItem('Bouton-Scepterofmastery', 90);
var Staffofsanctuary = createItem('Bouton-Staffofsanctuary', 80);
var Holysword = createItem('Bouton-Holysword', 50);
var Arcanitemelee2 = createItem('Bouton-2Arcanitemelee', 85);
var Scepterofmastery2 = createItem('Bouton-2Scepterofmastery', 90);
var Staffofsanctuary2 = createItem('Bouton-2Staffofsanctuary', 80);
var Shadowbringer = createItem('Bouton-Shadowbringer', 50);
var Timesabres = createItem('Bouton-Timesabres', 100);
var Angelice2 = createItem('Bouton-2Angelice', 20);
var Godarmor2 = createItem('Bouton-2Godarmor', 95);
var Starrofhealth2 = createItem('Bouton-2Starrofhealth', 100);
var Arcaneshield2 = createItem('Bouton-2Arcaneshield', 50);
var Godshield2 = createItem('Bouton-2Godshield', 80);
var Defensivestrike2 = createItem('Bouton-2Defensivestrike', 75);
var Dimensionalshield2 = createItem('Bouton-2Dimensionalshield', 40);
var Guardianforce2 = createItem('Bouton-2Guardianforce', 50);
var Soularmor = createItem('Bouton-Soularmor', 50);
var Hammerofhealth = createItem('Bouton-Hammerofhealth', 100);
var Mysticalstrike = createItem('Bouton-Mysticalstrike', 65);
var Wand = createItem('Bouton-Wand', 50);
var Holyprotection = createItem('Bouton-Holyprotection', 100);

// Dépendences Objets
Arcanesword.add_child([Ofthesae, Staffofnegation, Aerialstrike]);
Arcaneshield.add_child([Angelice, Godarmor, Starrofhealth]);
Keyofthemoon.add_child([Spidersik, Wandofneutralization, Meladilion]);
Holywarfare.add_child([Mightyaxe, Offensivestrike, Infernalfist]);
Guardianforce.add_child([Godshield, Defensivestrike, Dimensionalshield]);
Keyofthemoon2.add_child([Spidersik2, Wandofneutralization2, Meladilion2]);
Dragonitem.add_child([Arcanesword, Arcaneshield, Keyofthemoon]);
Superitem.add_child([Holywarfare, Guardianforce, Keyofthemoon2]);
Sunitem.add_child([Dragonitem, Superitem]);
Holysword.add_child([Arcanitemelee, Scepterofmastery, Staffofsanctuary]);
Shadowbringer.add_child([Arcanitemelee2, Scepterofmastery2, Staffofsanctuary2]);
Timesabres.add_child([Holysword, Shadowbringer]);
Arcaneshield2.add_child([Angelice2, Godarmor2, Starrofhealth2]);
Guardianforce2.add_child([Godshield2, Defensivestrike2, Dimensionalshield2]);
Soularmor.add_child([Arcaneshield2, Guardianforce2]);
Wand.add_child([Hammerofhealth, Mysticalstrike]);
Holyprotection.add_child([Timesabres, Soularmor, Wand]);

// Fonction qui créer les objets
function createItem(boutonName, prix) {
	var bouton = document.getElementById(boutonName);
	var srcOff = bouton.src;
	var src = srcOff.slice(0, -8) + '.png';
	var item = new Item(bouton, src, srcOff, prix);
	itemDict[bouton.id] = item;
	return item;
}

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
	refreshPrix();
}

// Fonctions click sur un item
$('input').mousedown(function(click){
	var item = itemDict[click.target.id];
	item.clicked(click.which);
	clickedItem(item, click.which);
});