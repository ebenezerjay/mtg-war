// array of all cards as objects

const fullDeck = [
	{
		name: "Alpha Myr",
		power: 2,
		toughness: 1,
		number: 1,  
	},
	{
		name: "Barony Vampire",
		power: 3,
		toughness: 2,
		number: 2,  
	},
	{
		name: "Bog Stomper",
		power: 6,
		toughness: 5,
		number: 3,  
	},
	{
		name: "Centaur Courser",
		power: 3,
		toughness: 3,
		number: 4,
	},
	{
		name: "Dross Crocodile",
		power: 5,
		toughness: 1,
		number: 5,
	},
	{
		name: "Earth Elemental",
		power: 5,
		toughness: 4,
		number: 6,
	},
	{
		name: "Enormous Baloth",
		power: 7,
		toughness: 7,
		number: 7,
	},
	{
		name: "Field Creeper",
		power: 2,
		toughness: 1,
		number: 8,
	},
	{
		name: "Fire Elemental",
		power: 5,
		toughness: 4,
		number: 9,
	},
	{
		name: "Fortress Crab",
		power: 1,
		toughness: 6,
		number: 10,
	},
	{
		name: "Fugitive Wizard",
		power: 1,
		toughness: 1,
		number: 11,
	},
	{
		name: "Goblin Piker",
		power: 2,
		toughness: 1,
		number: 12,
	},
	{
		name: "Grizzly Bears",
		power: 2,
		toughness: 2,
		number: 13,
	},
	{
		name: "Hill Giant",
		power: 2,
		toughness: 2,
		number: 14,
	},
	{
		name: "Lumingrid Warden",
		power: 1,
		toughness: 3,
		number: 15,
	},
	{
		name: "Mass of Ghouls",
		power: 2,
		toughness: 1,
		number: 16,
	},
	{
		name: "Omega Myr",
		power: 1,
		toughness: 2,
		number: 17,
	},
	{
		name: "Spined Wurm",
		power: 5,
		toughness: 4,
		number: 18,
	},
	{
		name: "Vorstclaw",
		power: 7,
		toughness: 7,
		number: 19,
	},
	{
		name: "Yoked Ox",
		power: 0,
		toughness: 4,
		number: 20,
	},
];
console.log(fullDeck);
// console.log(Object.keys(fullDeck));

// queries

const fightButton = $("#fight-button-id");
const newButton = $("#new-button-id");
const p1BackImg = $("#p1-back-img-id");
const p2BackImg = $("#p2-back-img-id");
const p1RecentlyWonImg = $("#p1-recently-won-img-id");
const p2RecentlyWonImg = $("#p2-recently-won-img-id");

// holding place for two creatures fighting
const tempFightArray = [];
const p1Winners = [];
const p2Winners = [];

// event handlers
console.log(fightButton);
fightButton.on('click', compareCreatures);

// $("#fightButton").click(function() {
// 	console.log(fightButton);
// 	compareCreatures();
// });

// creates a random # for both players
let ranNum1 = Math.floor(Math.random() * Math.floor(1));
let ranNum2 = Math.floor(Math.random() * Math.floor(1));

//  on page load

$(document).ready(function() {
	matchNumbers();
});

// compares the random #s to the cards in fullDeck array and puts the two #s into a temp array

function matchNumbers() {
	// const ranNum1 = Math.floor(Math.random() * Math.floor(21));
	// const ranNum2 = Math.floor(Math.random() * Math.floor(21));
	ifSame();
	console.log(ranNum1,ranNum2);
	if (ranNum1 === 0 || ranNum2 === 0) {
		// let alphaMyrImg = document.createElement("img");
		// alphaMyrImg.src = "images/alpha-myr.jpg";
		// alphaMyrImg.alt = "image of Alpha Myr card";
		// document.getElementById("p1-recently-won-img-id").appendChild(alphaMyrImg);
		tempFightArray.push(fullDeck[0]);
	}
	 if (ranNum1 === 1 || ranNum2 === 1) {
		// let baronyVampire = document.createElement("img");
		// baronyVampire.src = "images/barony-vampire.jpg";
		// baronyVampire.alt = "image of Barony Vampire card";
		// document.getElementById("p2-recently-won-img-id").appendChild(baronyVampire);
		tempFightArray.push(fullDeck[1]);
	}
	 if (ranNum1 === 2 || ranNum2 === 2) {
		tempFightArray.push(fullDeck[2]);
	}
	 if (ranNum1 === 3 || ranNum2 === 3) {
		tempFightArray.push(fullDeck[3]);
	 } 
	  // if (ranNum1 === 4) {
	// 	tempFightArray.push(fullDeck[4]);
	// } else if (ranNum1 === 5) {
	// 	tempFightArray.push(fullDeck[5]);
	// } else if (ranNum1 === 6) {
	// 	tempFightArray.push(fullDeck[6]);
	// } else if (ranNum1 === 7) {
	// 	tempFightArray.push(fullDeck[7]);
	// } else if (ranNum1 === 8) {
	// 	tempFightArray.push(fullDeck[8]);
	// } else if (ranNum1 === 9) {
	// 	tempFightArray.push(fullDeck[9]);
	// } else if (ranNum1 === 10) {
	// 	tempFightArray.push(fullDeck[10]);
	// } else if (ranNum1 === 11) {
	// 	tempFightArray.push(fullDeck[11]);
	// } else if (ranNum1 === 12) {
	// 	tempFightArray.push(fullDeck[12]);
	// } else if (ranNum1 === 13) {
	// 	tempFightArray.push(fullDeck[13]);
	// } else if (ranNum1 === 14) {
	// 	tempFightArray.push(fullDeck[14]);
	// } else if (ranNum1 === 15) {
	// 	tempFightArray.push(fullDeck[15]);
	// } else if (ranNum1 === 16) {
	// 	tempFightArray.push(fullDeck[16]);
	// } else if (ranNum1 === 17) {
	// 	tempFightArray.push(fullDeck[17]);
	// } else if (ranNum1 === 18) {
	// 	tempFightArray.push(fullDeck[18]);
	// } else  {
	// 	tempFightArray.push(fullDeck[19]);
	// };
	console.log(tempFightArray[0].power)
};


// adds 1 to ranNum1 if both random #s are same
function ifSame() {
	if (ranNum1 === ranNum2) {
		ranNum1 = ranNum1 +1;
	}
}

// compares power and toughness of each creature in tempFightArray

function compareCreatures() {
	console.log(tempFightArray[0].power,tempFightArray[1].power);

	if (tempFightArray[0].power > tempFightArray[1].toughness) {
		p1Winners.push(tempFightArray[0]);
	}
	 if (tempFightArray[1].power > tempFightArray[0].toughness) {
		p2Winners.push(tempFightArray[1]);
	}
	console.log(p1Winners,p2Winners);
}
