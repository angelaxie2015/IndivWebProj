var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);
var newImage1 = "images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var newImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", newImage1);
document.querySelector(".img2").setAttribute("src", newImage2);

var title = document.querySelector("h1");
if(randomNumber1 > randomNumber2){
	title.innerHTML = "Player1 Wins!";
}else if(randomNumber2 > randomNumber1){
	title.innerHTML = "Player2 Wins";
}else{
	title.innerHTML = "Draw!";
}