// array of all cards as objects

const fullDeck = [
	{
		name: "Alpha Myr",
		power: 2,
		toughness: 1,
		number: 0,  
		src: 'images/alpha-myr.jpg',
	},
	{
		name: "Barony Vampire",
		power: 3,
		toughness: 2,
		number: 1,  
		src: 'images/barony-vampire.jpg',
	},
	{
		name: "Bog Stomper",
		power: 6,
		toughness: 5,
		number: 2, 
		src: "images/bogstomper.jpg",
	},
	{
		name: "Centaur Courser",
		power: 3,
		toughness: 3,
		number: 3,
		src: "images/centaur-courser.jpg",
	},
	{
		name: "Dross Crocodile",
		power: 5,
		toughness: 1,
		number: 4,
		src: "images/dross-crocodile.jpg",
	},
	{
		name: "Earth Elemental",
		power: 5,
		toughness: 4,
		number: 5,
		src: "images/earth-elemental.jpg",
	},
	{
		name: "Enormous Baloth",
		power: 7,
		toughness: 7,
		number: 6,
		src: "images/enormous-baloth.jpg",
	},
	{
		name: "Field Creeper",
		power: 2,
		toughness: 1,
		number: 7,
		src: "images/field-creeper.jpg",
	},
	{
		name: "Fire Elemental",
		power: 5,
		toughness: 4,
		number: 8,
		src: "images/fire-elemental.jpg",
	},
	{
		name: "Fortress Crab",
		power: 1,
		toughness: 6,
		number: 9,
		src: "images/fortress-crab.jpg",
	},
	{
		name: "Fugitive Wizard",
		power: 1,
		toughness: 1,
		number: 10,
		src: "images/fugitive-wizard.jpg",
	},
	{
		name: "Goblin Piker",
		power: 2,
		toughness: 1,
		number: 11,
		src: "images/goblin-piker.jpg",
	},
	{
		name: "Grizzly Bears",
		power: 2,
		toughness: 2,
		number: 12,
		src: "images/grizzly-bears.jpg",
	},
	{
		name: "Hill Giant",
		power: 2,
		toughness: 2,
		number: 13,
		src: "images/hill-giant.jpg",
	},
	{
		name: "Lumingrid Warden",
		power: 1,
		toughness: 3,
		number: 14,
		src: "images/lumengrid-warden.jpg",
	},
	{
		name: "Mass of Ghouls",
		power: 2,
		toughness: 1,
		number: 15,
		src: "images/mass-of-ghouls.jpg",
	},
	{
		name: "Omega Myr",
		power: 1,
		toughness: 2,
		number: 16,
		src: "images/omega-myr.jpg",
	},
	{
		name: "Spined Wurm",
		power: 5,
		toughness: 4,
		number: 17,
		src: "images/spined-wurm.jpg",
	},
	{
		name: "Vorstclaw",
		power: 7,
		toughness: 7,
		number: 18,
		src: "images/vorstclaw.jpg",
	},
	{
		name: "Yoked Ox",
		power: 0,
		toughness: 4,
		number: 19,
		src: "images/yoked-ox.jpg",
	},
	{
		name: "Ancient Crab",
		power: 1,
		toughness: 5,
		number: 20,
		src: "images/ancient-crab.jpg",
	},
	{
		name: "Canopy Gorger",
		power: 6,
		toughness: 5,
		number: 21,
		src: "images/canopy-gorger.jpg",
	},
	{
		name: "Axebane Stag",
		power: 6,
		toughness: 7,
		number: 22,
		src: "images/axebane-stag.jpg",
	},
	{
		name: "Catacomb Slug",
		power: 2,
		toughness: 6,
		number: 23,
		src: "images/catacomb-slug.jpg",
	},{
		name: "Cobblebrute",
		power: 5,
		toughness: 2,
		number: 24,
		src: "images/cobblebrute.jpg",
	},
	{
		name: "Golgari Longlegs",
		power: 5,
		toughness: 4,
		number: 25,
		src: "images/golgari-longlegs.jpg",
	},
	{
		name: "Coral Merfolk",
		power: 2,
		toughness: 1,
		number: 26,
		src: "images/coral-merfolk.jpg",
	},
	{
		name: "Craw Wurm",
		power: 6,
		toughness: 4,
		number: 27,
		src: "images/craw-wurm.jpg",
	},
	{
		name: "Elite Vanguard",
		power: 2,
		toughness: 1,
		number: 28,
		src: "images/elite-vanguard.jpg",
	},
	{
		name: "Horned Turtle",
		power: 1,
		toughness: 4,
		number: 29,
		src: "images/horned-turtle.jpg",
	},
	{
		name: "Runeclaw Bear",
		power: 2,
		toughness: 2,
		number: 30,
		src: "images/runeclaw-bear.jpg",
	},
	{
		name: "Seige Mastadon",
		power: 3,
		toughness: 5,
		number: 31,
		src: "images/siege-mastodon.jpg",
	},
	{
		name: "Silvercoat Lion",
		power: 2,
		toughness: 2,
		number: 32,
		src: "images/silvercoat-lion.jpg",
	},
	{
		name: "Giant Octopus",
		power: 3,
		toughness: 3,
		number: 33,
		src: "images/giant-octopus.jpg",
	},
	{
		name: "Warpath Ghoul",
		power: 3,
		toughness: 2,
		number: 34,
		src: "images/warpath-ghoul.jpg",
	},
	{
		name: "Zombie Goliath",
		power: 4,
		toughness: 3,
		number: 35,
		src: "images/zombie-goliath.jpg",
	},
	{
		name: "Balduvian Barbarians",
		power: 3,
		toughness: 2,
		number: 36,
		src: "images/balduvian-barbarians.jpg",
	},
	{
		name: "Coral Eel",
		power: 2,
		toughness: 1,
		number: 37,
		src: "images/coral-eel.jpg",
	},
	{
		name: "Eager Cadet",
		power: 1,
		toughness: 1,
		number: 38,
		src: "images/eager-cadet.jpg",
	},
	{
		name: "Giant Cockroach",
		power: 4,
		toughness: 2,
		number: 39,
		src: "images/giant-cockroach.jpg",
	},
];
// console.log(fullDeck);

// queries
const startGameButton = $("#start-button-id");
const fightButton = $("#fight-button-id");
const newGameButton = $("#new-game-button-id");
const p1BackImg = $("#p1-back-img-id");
const p2BackImg = $("#p2-back-img-id");
const modalContainer = document.querySelector("#modal-container-id");
const modalContent = document.querySelector("#modal-content-id");
const bottomSection = $(".bottom-section");
const hideDirectionBtn = $("#par1-id");
const hideDirectionBtn2 = $("#par2-id");
const directions = document.getElementById("directions-section-id");
const directions2 = document.getElementById("directions2-section-id");
const showDirectionsBTN = $("#show-directions-button-id");
const showDirectionsBTN2 = $("#show-directions-button2-id");
const header = $("#header-id");

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

// enables new game button when the start game button is clicked
// $(document).ready(function() {
// 	$(startGameButton).click(function() {
// 		$(newGameButton).prop("disabled", false);
// 	});
// });

// disables the fight button on page load
$(document).ready(function() {
	$(newGameButton.prop("disabled", true));
	$(fightButton).prop("disabled", true);
});

// actions when start game btn is clicked
startGameButton.on('click', function() {
	splitFull();
	matchNumbers();
	$(newGameButton).prop("disabled", false);
	$(fightButton).prop("disabled", false);
	$(startGameButton).prop("disabled", true);
});

// actions for when fight btn is clicked
fightButton.on('click', function() {
	compareCreatures();
});

// actions for when new game btn is clicked
newGameButton.on('click', function() {
	$(newGameButton).prop("disabled", true);
	$(startGameButton).prop("disabled", false);
	$(fightButton).prop("disabled", true);
	// resetGame();
});

// hides the directions when paragraph is clicked
hideDirectionBtn.on('click', function() {
	directions.style.display = "none";
	document.getElementById("show-directions-button-id").style.display = "block";
});

hideDirectionBtn2.on('click', function() {
	directions2.style.display = "none";
	document.getElementById("show-directions-button2-id").style.display = "block";
});

// shows directions when buttons cicked
showDirectionsBTN.on('click', function() {
	directions.style.display = "block";
	document.getElementById("show-directions-button-id").style.display = "none";
});

showDirectionsBTN2.on('click', function() {
	directions2.style.display = "block";
	document.getElementById("show-directions-button2-id").style.display = "none";
});

// functions

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
	showImage();
}

// compares power and toughness of each creature in tempFightArray and 
function compareCreatures() {
	if (tempFightArray[0].power >= tempFightArray[1].toughness && tempFightArray[1].power < tempFightArray[0].toughness) {
		p1IsWinner();
	} else if (tempFightArray[1].power >= tempFightArray[0].toughness && tempFightArray[0].power < tempFightArray[1].toughness) {
		p2IsWinner();
	} else {
		whenWARhappens();
	}
	matchNumbers();
	// console.log(p1RoundWinners,p2RoundWinners);
}

// when p1 card wins
function p1IsWinner() {
	p1RoundWinners.push(tempFightArray[0]);
	p1RoundWinners.push(tempFightArray[1]);
	tempFightArray.splice(0,2);
	p1RoundWinners = p1RoundWinners.concat(tempWarPile);
	tempWarPile.splice(0,39);
}

// when p2 card wins
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
function showImage() {
let p1CardImg = new Image(225,325);
let p2CardImg = new Image(225,325);
p1CardImg.src = tempFightArray[0].src;
p2CardImg.src = tempFightArray[1].src;
// $("img").addClass("p1Card-img");
// $("img").addClass("p2Card-img");
$("#modal-container-id").append(p1CardImg);
$("#modal-container-id").append(p2CardImg);
}

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