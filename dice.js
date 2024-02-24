var randomNumber = Math.floor(Math.random() * 7);

if (randomNumber === 0) {
  console.log("invalid");
} else if (randomNumber === 1) {
  document.querySelector("img").setAttribute("src", "./images/dice1.png");
} else if (randomNumber === 2) {
  document.querySelector("img").setAttribute("src", "./images/dice2.png");
} else if (randomNumber === 3) {
  document.querySelector("img").setAttribute("src", "./images/dice3.png");
} else if (randomNumber === 4) {
  document.querySelector("img").setAttribute("src", "./images/dice4.png");
} else if (randomNumber === 5) {
  document.querySelector("img").setAttribute("src", "./images/dice5.png");
} else if (randomNumber === 6) {
  document.querySelector("img").setAttribute("src", "./images/dice6.png");
}

var randomNumber2 = Math.floor(Math.random() * 7);
if (randomNumber2 === 0) {
  console.log("invalid");
} else if (randomNumber2 === 1) {
  document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
} else if (randomNumber2 === 2) {
  document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
} else if (randomNumber2 === 3) {
  document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
} else if (randomNumber2 === 4) {
  document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
} else if (randomNumber2 === 5) {
  document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
} else if (randomNumber2 === 6) {
  document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
}

if (randomNumber === randomNumber2) {
  document.querySelector("h1").textContent = "Draw";
}
else if (randomNumber > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Wins !";
}
else if (randomNumber < randomNumber2){
    document.querySelector("h1").textContent = "Player 2 Wins !";
}
