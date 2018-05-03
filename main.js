//init canvas
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

var canvasColour = "#d1f3ff";

var card = {
	x: 300,
	y: 500,
	imageSize: {
		x: 68,
		y: 103,
	}
};
card.picture1 = new Image();
card.picture1.src = "./assets/card1.png";
card.currentPicture = card.picture1;
setTimeout(function(){ctx.drawImage(card.currentPicture, 0, 0, card.imageSize.x, card.imageSize.y, card.x - card.imageSize.x / 2, card.y - card.imageSize.y / 2, card.imageSize.x, card.imageSize.y);},3000);
