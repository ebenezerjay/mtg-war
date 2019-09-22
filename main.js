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
	{
		name: "Ancient Crab",
		power: 1,
		toughness: 5,
		number: 20,
	},
	{
		name: "Canopy Gorger",
		power: 6,
		toughness: 5,
		number: 21,
	},
	{
		name: "Axebane Stag",
		power: 6,
		toughness: 7,
		number: 22,
	},
	{
		name: "Catacomb Slug",
		power: 2,
		toughness: 6,
		number: 23,
	},{
		name: "Cobblebrute",
		power: 5,
		toughness: 2,
		number: 24,
	},
	{
		name: "Golgari Longlegs",
		power: 5,
		toughness: 4,
		number: 25,
	},
	{
		name: "Coral Merfolk",
		power: 2,
		toughness: 1,
		number: 26,
	},
	{
		name: "Craw Wurm",
		power: 6,
		toughness: 4,
		number: 27,
	},
	{
		name: "Elite Vanguard",
		power: 2,
		toughness: 1,
		number: 28,
	},
	{
		name: "Horned Turtle",
		power: 1,
		toughness: 4,
		number: 29,
	},
	{
		name: "Runeclaw Bear",
		power: 2,
		toughness: 2,
		number: 30,
	},
	{
		name: "Seige Mastadon",
		power: 3,
		toughness: 5,
		number: 31,
	},
	{
		name: "Silvercoat Lion",
		power: 2,
		toughness: 2,
		number: 32,
	},
	{
		name: "Giant Octopus",
		power: 3,
		toughness: 3,
		number: 33,
	},
	{
		name: "Warpath Ghoul",
		power: 3,
		toughness: 2,
		number: 34,
	},
	{
		name: "Zombie Goliath",
		power: 4,
		toughness: 3,
		number: 35,
	},
	{
		name: "Balduvian Barbarians",
		power: 3,
		toughness: 2,
		number: 36,
	},
	{
		name: "Coral Eel",
		power: 2,
		toughness: 1,
		number: 37,
	},
	{
		name: "Eager Cadet",
		power: 1,
		toughness: 1,
		number: 38,
	},
	{
		name: "Giant Cockroach",
		power: 4,
		toughness: 2,
		number: 39,
	},
];
// console.log(fullDeck);

// queries
const startGameButton = $("#start-button-id");
const fightButton = $("#fight-button-id");
const newGameButton = $("#new-game-button-id");
// const nextRoundButton = $("#next-round-button-id");
const p1BackImg = $("#p1-back-img-id");
const p2BackImg = $("#p2-back-img-id");
const p1RecentlyWonImg = $("#p1-recently-won-img-id");
const p2RecentlyWonImg = $("#p2-recently-won-img-id");

// array for creature cards while fighting
const tempFightArray = [];

// array for creatures to be temporarilly held while WAR! is happening
const tempWarPile = [];

// arrays for each players cards won
let p1RoundWinners = [];
let p1Deck = [];
let p2RoundWinners = [];
let p2Deck = [];


// event handlers
startGameButton.on('click', function() {
	splitFull();
	matchNumbers();
});

fightButton.on('click', function() {
	// if (p1Deck.length === 0 ) {
	// 	newRoundAlert();
	// }
	compareCreatures();
});

// nextRoundButton.on('click', function() {
// 	tempFightArray.splice(0,2);
// 	resetPiles();
// })

newGameButton.on('click', function() {
	resetGame();
})

// shuffles all the elements of the decks (Fisher Yates shuffle algorithm)
function shuffle1(deck) {
	for (let i = deck.length - 1; i > 0; i--) {
		const ranNum = Math.floor(Math.random() * (i + 1));
		[deck[i], deck[ranNum]] = [deck[ranNum], deck[i]];
	}
	return deck;
}

// splits full deck randomly into two halves for both players
function splitFull() {
	shuffle1(fullDeck);
	p1Deck = fullDeck.splice(0,20);
	p2Deck = p2Deck.concat(fullDeck);
}

// creates and compares the random #s to the cards in fullDeck array and puts the two #s into the tempFightArray, 
// also removes those cards from the full deck array

function matchNumbers() {
	let ranCard1;
	let ranCard2;
	resetPiles(ranCard1,ranCard2);
	ranCard1 = p1Deck.pop();
	ranCard2 = p2Deck.pop();
	tempFightArray.push(ranCard1);
	tempFightArray.push(ranCard2);
}

// alerts players that the next round is happening and who is winning
function newRoundAlert() {
		alert("Player 1 has " + p1RoundWinners.length + " cards in deck, and " + " Player 2 has " + p2RoundWinners.length + " cards in deck");
}

// compares power and toughness of each creature in tempFightArray and 
function compareCreatures() {
	if (tempFightArray[0].power >= tempFightArray[1].toughness && tempFightArray[1].power < tempFightArray[0].toughness) {
		p1IsWinner();
		// matchNumbers();
	} else if (tempFightArray[1].power >= tempFightArray[0].toughness && tempFightArray[0].power < tempFightArray[1].toughness) {
		p2IsWinner();
		// matchNumbers();
	} else {
		whenWARhappens();
		// matchNumbers();
	}
	matchNumbers();
	// console.log(p1RoundWinners,p2RoundWinners);
}

// when p1 wins
function p1IsWinner() {
	p1RoundWinners.push(tempFightArray[0]);
	p1RoundWinners.push(tempFightArray[1]);
	tempFightArray.splice(0,2);
	p1RoundWinners = p1RoundWinners.concat(tempWarPile);
	tempWarPile.splice(0,39);
}

// when p2 wins
function p2IsWinner() {
	p2RoundWinners.push(tempFightArray[0]);
	p2RoundWinners.push(tempFightArray[1]);
	tempFightArray.splice(0,2);
	p2RoundWinners = p2RoundWinners.concat(tempWarPile);
	tempWarPile.splice(0,39);
}

// what happens when there is WAR!
function whenWARhappens() {
	console.log('yo it\'s war');
	tempWarPile.push(tempFightArray[0]);
	tempWarPile.push(tempFightArray[1]);
	tempFightArray.splice(0,2);
}

// displays image of recently won card

// function showImage() {
// 	if (p1Winners.)
// }

// resets arrays back to original lengths for new game
// function resetGame() {
// 	p1RoundWinners.forEach(function(cards1) {
// 		fullDeck.push(cards1);
// 	});
// 	p1Deck.forEach(function(cards1) {
// 		fullDeck.push(cards1);
// 	});
// 	p1RoundWinners = [];
// 	p1Deck = [];
// 	p2RoundWinners.forEach(function(cards2) {
// 		fullDeck.push(cards2);
// 	});
// 	p2Deck.forEach(function(cards2) {
// 		fullDeck.push(cards2);
// 	});
// 	fullDeck.push(tempFightArray[0]);
// 	fullDeck.push(tempFightArray[1]);
// 	tempFightArray.splice(0,2);
// 	p2RoundWinners = [];
// 	p2Deck = [];
// }

// sets up both players winning piles for next round
function resetPiles(ranCard1,ranCard2) {
	if (p1Deck.length === 0) {
		winCon();
		p1Deck = p1RoundWinners.concat(p1Deck);
		p1RoundWinners = [];
		shuffle1(p1Deck);
		ranCard1 = p1Deck.pop();
		tempFightArray.push(ranCard1);
	} 
	if (p2Deck.length === 0) {
		winCon();
		p2Deck = p2RoundWinners.concat(p2Deck);
		p2RoundWinners = [];
		shuffle1(p2Deck);
		ranCard2 = p2Deck.pop();
		tempFightArray.push(ranCard2);
	}
}

// win condition
function winCon() {
	if (p1RoundWinners.length === 0) {
		alert('Player 1 has lost and Player two is the winner!');
	} 
	if (p2RoundWinners.length === 0) {
		alert('Player 2 has lost and Player one is the winner!');
	}
	// resetGame();
}