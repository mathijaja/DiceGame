function rollDice() {

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelector(".img1").setAttribute("src", randomDiceImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelector(".img2").setAttribute("src", randomDiceImage2 );

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🎈Player 1 Won!";
}
  else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "🎈Player 2 Won!";
  }
  else {
    document.querySelector("h1").textContent = "Its a Tie!";
  }
}

if (performance.getEntriesByType("navigation")[0].type === "reload") {
  rollDice();
}

