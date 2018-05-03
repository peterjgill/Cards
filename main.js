//init canvas
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