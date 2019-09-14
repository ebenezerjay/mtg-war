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
		number: 14,
	},
	{
		name: "Mass of Ghouls",
		power: 2,
		toughness: 1,
		number: 15,
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

// array for creature cards while fighting
const tempFightArray = [];

// array of numbers to pick from randomly
const originalNumArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];

const tempWarPile = [];

// arrays for each players cards won
let p1Winners = [];
let p2Winners = [];


// event handlers
startGameButton.on('click', function() {
	matchNumbers();
});

fightButton.on('click', compareCreatures);

// shuffles all the elements of the original number array
function shuffle1(a) {
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}

// compares the random #s to the cards in fullDeck array and puts the two #s into the tempFightArray, 
// also removes those cards from the full deck array

function matchNumbers() {
	shuffle1(originalNumArray);
	let ranNum1 = originalNumArray.pop();
	let ranNum2 = originalNumArray.pop();

	if (ranNum1 === ranNum2) {
		ranNum1 = ranNum1 +1;
	 } 
	let p1Card = fullDeck.find(num1 => num1.number === ranNum1);
	tempFightArray.push(p1Card);
	let p1CardIndex = fullDeck.findIndex(ind => ind.number === ranNum1);
	fullDeck.splice(p1CardIndex, 1);
	let p2Card = fullDeck.find(num2 => num2.number === ranNum2);
	tempFightArray.push(p2Card);
	let p2CardIndex = fullDeck.findIndex(ind2 => ind2.number === ranNum2);
	fullDeck.splice(p2CardIndex,1);
	originalNumArray.forEach(function(subNum) {
		if (subNum === p1Card.number) {
			originalNumArray.splice(subNum,1);
		}
		if (subNum === p2Card.number) {
			originalNumArray.splice(subNum,1);
		}
	});
}

// compares power and toughness of each creature in tempFightArray and 

function compareCreatures() {
	if (tempFightArray[0].power >= tempFightArray[1].toughness) {
		p1IsWinner();
		matchNumbers();
	} else if (tempFightArray[1].power >= tempFightArray[0].toughness) {
		p2IsWinner();
		matchNumbers();
	} else {
		whenWARhappens();
		matchNumbers();
	}
}

// when p1 wins
function p1IsWinner() {
	p1Winners.push(tempFightArray[0]);
	p1Winners.push(tempFightArray[1]);
	tempFightArray.splice(0,2);
	p1Winners = p1Winners.concat(tempWarPile);
}

// when p2 wins
function p2IsWinner() {
	p2Winners.push(tempFightArray[0]);
	p2Winners.push(tempFightArray[1]);
	tempFightArray.splice(0,2);
	p2Winners = p2Winners.concat(tempWarPile);
}
// what happens when there is WAR!

function whenWARhappens() {
	tempWarPile.push(tempFightArray[0]);
	tempWarPile.push(tempFightArray[1]);
	tempFightArray.splice(0,2);
}

// displays image of recently won card

// function showImage() {
// 	if (p1Winners.)
// }