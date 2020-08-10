var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imageSource = "images/dice" + randomNumber1 + ".png";
var imageSource2 = "images/dice" + randomNumber2 + ".png";

var winner;

if (randomNumber1 > randomNumber2) {
  winner = "Player 1";
} else if (randomNumber1 < randomNumber2) {
  winner = "Player 2";
} else {
  winner = null;
}

document.querySelector("img.img1").setAttribute("src", imageSource);
document.querySelector("img.img2").setAttribute("src", imageSource2);

var headingText = document.querySelector("h1");

if (winner) {
  headingText.innerText = "🚩 " + winner + " Wins!"
} else {
  headingText.innerText = "Draw!";
}
