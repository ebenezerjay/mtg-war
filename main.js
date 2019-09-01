// array of all cards as objects

const fullDeck = [
	{
		name: "Alpha Myr",
		power: 2,
		toughness: 1,
		number: 0,  
	},
	{
		name: "Barony Vampire",
		power: 3,
		toughness: 2,
		number: 1,  
	},
	{
		name: "Bog Stomper",
		power: 6,
		toughness: 5,
		number: 2,  
	},
	{
		name: "Centaur Courser",
		power: 3,
		toughness: 3,
		number: 3,
	},
	{
		name: "Dross Crocodile",
		power: 5,
		toughness: 1,
		number: 4,
	},
	{
		name: "Earth Elemental",
		power: 5,
		toughness: 4,
		number: 5,
	},
	{
		name: "Enormous Baloth",
		power: 7,
		toughness: 7,
		number: 6,
	},
	{
		name: "Field Creeper",
		power: 2,
		toughness: 1,
		number: 7,
	},
	{
		name: "Fire Elemental",
		power: 5,
		toughness: 4,
		number: 8,
	},
	{
		name: "Fortress Crab",
		power: 1,
		toughness: 6,
		number: 9,
	},
	{
		name: "Fugitive Wizard",
		power: 1,
		toughness: 1,
		number: 10,
	},
	{
		name: "Goblin Piker",
		power: 2,
		toughness: 1,
		number: 11,
	},
	{
		name: "Grizzly Bears",
		power: 2,
		toughness: 2,
		number: 12,
	},
	{
		name: "Hill Giant",
		power: 2,
		toughness: 2,
		number: 13,
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
		number: 14,
	},
	{
		name: "Omega Myr",
		power: 1,
		toughness: 2,
		number: 16,
	},
	{
		name: "Spined Wurm",
		power: 5,
		toughness: 4,
		number: 17,
	},
	{
		name: "Vorstclaw",
		power: 7,
		toughness: 7,
		number: 18,
	},
	{
		name: "Yoked Ox",
		power: 0,
		toughness: 4,
		number: 19,
	},
];
console.log(fullDeck);

// queries

const startGameButton = $("#start-button-id");
const fightButton = $("#fight-button-id");
const newButton = $("#new-button-id");
const p1BackImg = $("#p1-back-img-id");
const p2BackImg = $("#p2-back-img-id");
const p1RecentlyWonImg = $("#p1-recently-won-img-id");
const p2RecentlyWonImg = $("#p2-recently-won-img-id");

// array for p1 creature and p2 creature cards while fighting
let tempFightArray = [];

// arrays for each players cards won
const p1Winners = [];
const p2Winners = [];

// event handlers
startGameButton.on('click', function() {
	matchNumber1();
	matchNumber2();
	console.log(tempFightArray);
	console.log(fullDeck);
});
fightButton.on('click', compareCreatures);

// creates a random # for both players
	let ranNum1 = Math.floor(Math.random() * Math.floor(20));
	let ranNum2 = Math.floor(Math.random() * Math.floor(20));
	console.log(ranNum1,ranNum2);

// compares the random #s to the cards in fullDeck array and puts the two #s into the tempFightArray, 
// also removes those cards from the full deck array

function matchNumber1() {
	ifSame();
	var p1Card = fullDeck.filter(num1 => num1.number === ranNum1);
	tempFightArray.push(p1Card);
	var p1CardIndex = fullDeck.findIndex(ind => ind.number === ranNum1);
	fullDeck.splice(p1CardIndex, 1);
}

function matchNumber2() {
	ifSame();
	var p2Card = fullDeck.filter(num2 => num2.number === ranNum2);
	var p2CardIndex = fullDeck.findIndex(ind2 => ind2.number === ranNum2);
	tempFightArray.push(p2Card);
	fullDeck.splice(p2CardIndex,1);
}

// adds 1 to ranNum1 if both random #s are same

function ifSame() {
	if (ranNum1 === ranNum2) {
		let ranNum1 = ranNum1 +1;
	} 
}

// compares power and toughness of each creature in tempFightArray and 

function compareCreatures() {
	// console.log(tempFightArray,fullDeck);
	// console.log(tempFightArray[0].power,tempFightArray[0].toughness,tempFightArray[1].power,tempFightArray[1].toughness);
	let counter = 0;
	const tempWarPile = [];
	if (tempFightArray[0].power >= tempFightArray[1].toughness & tempFightArray[1].power < tempFightArray[0].toughness ) {
		p1Winners.push(tempFightArray[0]);
		p1Winners.push(tempFightArray[1]);
		tempFightArray.splice(0,2);
		// ranNum1 = Math.floor(Math.random() * Math.floor(20));
		// ranNum2 = Math.floor(Math.random() * Math.floor(20));
		// matchNumber1();
		// matchNumber2();
	} else if (tempFightArray[1].power > tempFightArray[0].toughness & tempFightArray[0].power < tempFightArray[1].toughness) {
		p2Winners.push(tempFightArray[0]);
		p2Winners.push(tempFightArray[1]);
		tempFightArray.splice(0,2);
		// ranNum1 = Math.floor(Math.random() * Math.floor(20));
		// ranNum2 = Math.floor(Math.random() * Math.floor(20));
		// matchNumber1();
		// matchNumber2();

	} else {
		tempWarPile.push(tempFightArray[0]);
		tempWarPile.push(tempFightArray[1]);
		tempFightArray.slice(0,2);
		// ranNum1 = Math.floor(Math.random() * Math.floor(20));
		// ranNum2 = Math.floor(Math.random() * Math.floor(20));
		// matchNumber1();
		// matchNumber2();
	}
	console.log(p1Winners,p2Winners);
	console.log(tempFightArray);
}

// displays image of recently won card

// function showImage() {
// 	if (p1Winners.)
// }