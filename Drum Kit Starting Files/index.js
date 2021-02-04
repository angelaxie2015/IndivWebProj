function playDrum (id){
	switch(id){
		case "w":
			var sound = new Audio("sounds/tom-1.mp3");
		break;

		case "a":
			var sound = new Audio("sounds/tom-2.mp3");
		break;

		case "s":
			var sound = new Audio("sounds/tom-3.mp3");
		break;

		case "d":
			var sound = new Audio("sounds/tom-4.mp3");
		break;

		case "j":
			var sound = new Audio("sounds/crash.mp3");
		break;

		case "k":
			var sound = new Audio("sounds/snare.mp3");
		break;

		case "l":
			var sound = new Audio("sounds/kick-bass.mp3");
		break;

		default:
			console.log(this.innerHTML);
	}
	sound.play();
}

function buttonAnimation(event){
	var buttonPressed = document.querySelector("." + event);

	buttonPressed.classList.add("pressed");

	setTimeout(function () {
		buttonPressed.classList.remove("pressed");
	}, 100);
	
}

var buttons = document.querySelectorAll(".drum");
for(var i = 0; i < buttons.length; i++){
	buttons[i].addEventListener("click", function () {
		playDrum(this.innerHTML);
		buttonAnimation(this.innerHTML);
		
	});
}

document.addEventListener("keydown", function (event) {
	playDrum(event.key);
	buttonAnimation(event.key);
	
});