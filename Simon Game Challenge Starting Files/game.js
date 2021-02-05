buttonColors = ["red", "blue", "green", "yellow"];
gamePattern = [];
userClickedPattern = [];
var firstClick = true;
var level = 0;

function nextSequence() {
	var randomNumber = Math.floor(Math.random() * 4);
	console.log(randomNumber);
	var randomChosenColor = buttonColors[randomNumber];
	gamePattern.push(randomChosenColor);

	$("#" + randomChosenColor).fadeOut(50).fadeIn(50);
	playSound(randomChosenColor);
}

function playSound(col){
	var sound = new Audio("sounds/" + col + ".mp3");
	sound.play();
}

function animatePress(currentColor){
	$("#" + currentColor).addClass("pressed");
	setTimeout(function() {
		$("#" + currentColor).removeClass("pressed");
	}, 100);
}

$(".btn").click( function () {
	var userChosenColor = this.id;
	userClickedPattern.push(userChosenColor);
	playSound(userChosenColor);
	animatePress(userChosenColor);
	console.log(userClickedPattern);
})

$(document).keypress(function () {
	console.log("keypressed");
	if(firstClick){
		nextSequence();
		firstClick = false;
		$("h1").text("Level " + level);
	}
});

