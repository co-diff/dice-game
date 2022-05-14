var dice1 = "images/dice1.png";
var dice2 = "images/dice2.png";
var dice3 = "images/dice3.png";
var dice4 = "images/dice4.png";
var dice5 = "images/dice5.png";
var dice6 = "images/dice6.png";
var dice = [dice1, dice2, dice3, dice4, dice5, dice6];

// return random dice
var randNum1 = Math.floor(Math.random() * 6);
var randNum2 = Math.floor(Math.random() * 6);
var one = dice[randNum1];
var two = dice[randNum2];
var img1 = document.getElementsByClassName("img1");
var img2 = document.getElementsByClassName("img2");

img1[0].setAttribute("src", one);
img2[0].setAttribute("src", two);

if (randNum1 > randNum2) {
  document.querySelector("h1").textContent = "🤘🏼 Player 1 Wins!";
} else if (randNum1 === randNum2) {
  document.querySelector("h1").textContent = "Draw! 💩";
} else {
  document.querySelector("h1").textContent = "Player 2 Wins! 🤘🏼";
}
