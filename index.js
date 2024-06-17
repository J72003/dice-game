var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Player 1: 1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // Player 2: 1-6

var randomDiceImage1 = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
var randomDiceImage2 = "dice" + randomNumber2 + ".png"; // dice1.png - dice6.png

var randomImageSource1 = "images/" + randomDiceImage1; // images/dice1.png - images/dice6.png
var randomImageSource2 = "images/" + randomDiceImage2; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll(".img1")[0];
var image2 = document.querySelectorAll(".img2")[0];

image1.setAttribute("src", randomImageSource1);
image2.setAttribute("src", randomImageSource2);

var resultMessage = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
    resultMessage.innerHTML = "Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
    resultMessage.innerHTML = "Player 2 wins!";
} else {
    resultMessage.innerHTML = "It's a tie!";
}
