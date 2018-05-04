var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

var canvasColour = "#d1f3ff";

ctx.mozImageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.msImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;

var cardback = {
	x: 300,
	y: 500,
	imageSize: {
		x: 68,
		y: 103,
	}
}
cardback.picture1 = new Image();
cardback.picture1.src = "./assets/cardback.png";
cardback.currentPicture = cardback.picture1;
setTimeout(render,3000);
function render() {
	ctx.fillStyle = canvasColour;
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.drawImage(cardback.currentPicture, 0, 0, cardback.imageSize.x, cardback.imageSize.y, cardback.x - cardback.imageSize.x / 2, cardback.y - cardback.imageSize.y / 2, cardback.imageSize.x, cardback.imageSize.y);
}

var suits = ["diamonds","hearts","spades","clubs"];
var values = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
var deck = [];
var shuffleDeck = [];
var hands = [];

for (var i = 0; i < 4; i++){
	for (var x = 0; x < 13; x++){
		var y = new makeCard(suits[i],values[x]);
		deck.push(y);
	}
}

console.log(deck);

for (var i = 0; i < 52; i++){
	shuffle();
}

console.log(shuffleDeck);

var players = 0;
while(players < 2 || players > 8 || players != parseInt(players, 10))
players = prompt("Please enter number of players between 2 and 8:");

for (var i = 0; i < players; i++){
	hands.push([]);
}

var number = Math.floor(shuffleDeck.length/players);
for (i = 0; i < number; i++){
	for (x = 0; x < players; x++){
		hands[x].push(shuffleDeck[0]);
		shuffleDeck.splice(0,1);
	}
}

console.log(hands);
console.log(shuffleDeck);

function makeCard(suit, value) {
	this.suit = suit;
	this.value = value;
}

function shuffle(){
	var foo = randomNum(deck.length);
	shuffleDeck.push(deck[foo]);
	deck.splice(foo,1);
}

function randomNum(upper) {
	var foo = Math.random();
	foo *= upper;
	var bar = Math.floor(foo);
	return bar;
}