//Variables
var throwsLeft = 3;
var diceNumber = [];
var heldDice = [false, false, false, false, false];
var grandTotal = 0;

//These activate all the buttons
document.getElementById("rollButton").addEventListener("click", rollDice);
document.getElementById("ones").addEventListener("click", inputOne);
document.getElementById("twos").addEventListener("click", inputTwo);
document.getElementById("threes").addEventListener("click", inputThree);
document.getElementById("fours").addEventListener("click", inputFour);
document.getElementById("fives").addEventListener("click", inputFive);
document.getElementById("sixes").addEventListener("click", inputSix);
document.getElementById("chance").addEventListener("click", inputChance);
document.getElementById("SmStr").addEventListener("click", inputSmlStr);
document.getElementById("lgStr").addEventListener("click", inputLrgStr);
document.getElementById("FHouse").addEventListener("click", inputFHouse);
document.getElementById("Toak").addEventListener("click", inputToak);
document.getElementById("Foak").addEventListener("click", inputFoak);
document.getElementById("yathz").addEventListener("click", inputYathzee);
document.getElementById("resetButton").addEventListener("click", resetAll);

//changes the class of a dice to held
document.querySelectorAll(".dice").forEach(function (dice, index) {
  dice.addEventListener("click", function () {
    heldDice[index] = !heldDice[index];
    dice.classList.toggle("held");
  });
});

//rolls the dice and doesnt roll the held dice
function rollDice() {
  for (var i = 0; i < 5; i++) {
    if (!heldDice[i]) {
      diceNumber[i] = Math.floor(Math.random() * 6) + 1;
    }
  }

  for (var i = 0; i < 5; i++) {
    var diceImage = document.getElementById("dice" + (i + 1));

    switch (diceNumber[i]) {
      case 1:
        diceImage.src = "images/dice-six-faces-one.png";
        break;
      case 2:
        diceImage.src = "images/dice-six-faces-two.png";
        break;
      case 3:
        diceImage.src = "images/dice-six-faces-three.png";
        break;
      case 4:
        diceImage.src = "images/dice-six-faces-four.png";
        break;
      case 5:
        diceImage.src = "images/dice-six-faces-five.png";
        break;
      case 6:
        diceImage.src = "images/dice-six-faces-six.png";
        break;
      default:
        break;
    }
  }
  //reduces the throws left by one and disables rolling dice if there are 0 throws left
  throwsLeft = throwsLeft - 1;
  document.getElementById("throwsLeft").innerHTML =
    "Throws left: " + throwsLeft;

  if (throwsLeft == 0) {
    document
      .getElementById("rollButton")
      .removeEventListener("click", rollDice);
  }
}

//all these functions allow you to place scores in the right place and calculate the total score
function inputOne() {
  var counter = 0;
  for (var i = 0; i < 5; i++) {
    if (diceNumber[i] == 1) counter++;
  }
  document.getElementById("ones").innerHTML = counter;
  grandTotal = grandTotal + counter;
  document.getElementById("totalValue").innerHTML =
    "Grand Total: " + grandTotal;
  document.getElementById("ones").removeEventListener("click", inputOne);
  resetDiceStyle();
  resetDice();
}

function inputTwo() {
  var counter = 0;
  for (var i = 0; i < 5; i++) {
    if (diceNumber[i] == 2) counter++;
  }
  document.getElementById("twos").innerHTML = counter * 2;
  grandTotal = grandTotal + counter * 2;
  document.getElementById("totalValue").innerHTML =
    "Grand Total: " + grandTotal;
  document.getElementById("twos").removeEventListener("click", inputTwo);
  resetDiceStyle();
  resetDice();
}

function inputThree() {
  var counter = 0;
  for (var i = 0; i < 5; i++) {
    if (diceNumber[i] == 3) counter++;
  }
  document.getElementById("threes").innerHTML = counter * 3;
  grandTotal = grandTotal + counter * 3;
  document.getElementById("totalValue").innerHTML =
    "Grand Total: " + grandTotal;
  document.getElementById("threes").removeEventListener("click", inputThree);
  resetDiceStyle();
  resetDice();
}

function inputFour() {
  var counter = 0;
  for (var i = 0; i < 5; i++) {
    if (diceNumber[i] == 4) counter++;
  }
  document.getElementById("fours").innerHTML = counter * 4;
  grandTotal = grandTotal + counter * 4;
  document.getElementById("totalValue").innerHTML =
    "Grand Total: " + grandTotal;
  document.getElementById("fours").removeEventListener("click", inputFour);
  resetDiceStyle();
  resetDice();
}

function inputFive() {
  var counter = 0;
  for (var i = 0; i < 5; i++) {
    if (diceNumber[i] == 5) counter++;
  }
  document.getElementById("fives").innerHTML = counter * 5;
  grandTotal = grandTotal + counter * 5;
  document.getElementById("totalValue").innerHTML =
    "Grand Total: " + grandTotal;
  document.getElementById("fives").removeEventListener("click", inputFive);
  resetDiceStyle();
  resetDice();
}

function inputSix() {
  var counter = 0;
  for (var i = 0; i < 5; i++) {
    if (diceNumber[i] == 6) counter++;
  }
  document.getElementById("sixes").innerHTML = counter * 6;
  grandTotal = grandTotal + counter * 6;
  document.getElementById("totalValue").innerHTML =
    "Grand Total: " + grandTotal;
  document.getElementById("sixes").removeEventListener("click", inputSix);
  resetDiceStyle();
  resetDice();
}

function inputChance() {
  var total = diceNumber.reduce((acc, el) => acc + el, 0);
  document.getElementById("chance").innerHTML = total;
  grandTotal = grandTotal + total;
  document.getElementById("totalValue").innerHTML =
    "Grand Total: " + grandTotal;
  document.getElementById("chance").removeEventListener("click", inputChance);
  resetDiceStyle();
  resetDice();
}

function leftBonus() {
  var RightTotalScore = ones + twos + threes + fours + fives + sixes;
  if (RightTotalScore > 63) {
    document.getElementById("bonus").innerHTML = 35;
  }
  grandTotal = grandTotal + 35;
  document.getElementById("totalValue").innerHTML =
    "Grand Total: " + grandTotal;
}

function inputLrgStr() {
  var points = 0;
  diceNumber.sort((a, b) => a - b);
  var sortedDiceString = diceNumber.join("");
  if (sortedDiceString === "12345" || sortedDiceString === "23456") {
    points = 40;
  }
  document.getElementById("lgStr").innerHTML = points;
  grandTotal = grandTotal + points;
  document.getElementById("totalValue").innerHTML =
    "Grand Total: " + grandTotal;
  document.getElementById("lgStr").removeEventListener("click", inputLrgStr);
  resetDiceStyle();
  resetDice();
}

function inputSmlStr() {
  var points = 0;
  diceNumber.sort((a, b) => a - b);
  var sortedDiceString = diceNumber.join("");
  if (
    sortedDiceString === "1234" ||
    sortedDiceString === "2345" ||
    sortedDiceString === "3456"
  ) {
    points = 30;
  }
  document.getElementById("SmStr").innerHTML = points;
  grandTotal = grandTotal + points;
  document.getElementById("totalValue").innerHTML =
    "Grand Total: " + grandTotal;
  document.getElementById("SmStr").removeEventListener("click", inputSmlStr);
  resetDiceStyle();
  resetDice();
}

function inputFHouse() {
  var total = 0;
  diceNumber.sort((a, b) => a - b);
  if (
    (diceNumber[0] === diceNumber[1] && diceNumber[2] === diceNumber[4]) ||
    (diceNumber[0] === diceNumber[2] && diceNumber[3] === diceNumber[4])
  ) {
    total = 25;
  }
  document.getElementById("FHouse").innerHTML = total;
  grandTotal = grandTotal + total;
  document.getElementById("totalValue").innerHTML =
    "Grand Total: " + grandTotal;
  document.getElementById("FHouse").removeEventListener("click", inputFHouse);
  resetDiceStyle();
  resetDice();
}

function inputFoak() {
  var total = 0;
  diceNumber.sort((a, b) => a - b);
  if (diceNumber[0] === diceNumber[3] || diceNumber[1] === diceNumber[4]) {
    diceNumber.forEach((el) => (total += el));
  }
  document.getElementById("Foak").innerHTML = total;
  grandTotal = grandTotal + total;
  document.getElementById("totalValue").innerHTML =
    "Grand Total: " + grandTotal;
  document.getElementById("Foak").removeEventListener("click", inputFoak);
  resetDiceStyle();
  resetDice();
}

function inputToak() {
  var total = 0;
  diceNumber.sort((a, b) => a - b);
  if (
    diceNumber[0] == diceNumber[2] ||
    diceNumber[1] == diceNumber[3] ||
    diceNumber[2] == diceNumber[4]
  ) {
    diceNumber.forEach((el) => (total += el));
  }
  document.getElementById("Toak").innerHTML = total;
  grandTotal = grandTotal + total;
  document.getElementById("totalValue").innerHTML =
    "Grand Total: " + grandTotal;
  document.getElementById("Toak").removeEventListener("click", inputToak);
  resetDiceStyle();
  resetDice();
}

function inputYathzee() {
  var score = 0;

  const numsame = diceNumber.every(
    (val, i, diceNumber) => val === diceNumber[0]
  );
  if (numsame !== false) {
    score = 50;
  }
  document.getElementById("yathz").innerHTML = score;
  grandTotal = grandTotal + score;
  document.getElementById("totalValue").innerHTML =
    "Grand Total: " + grandTotal;
  document.getElementById("yathz").removeEventListener("click", inputYathzee);
  resetDiceStyle();
  resetDice();
}

//resets the dice and rolls the dice
function resetDice() {
  throwsLeft = 3;
  document.getElementById("throwsLeft").innerHTML =
    "Throws left: " + throwsLeft;
  heldDice = [false, false, false, false, false];
  document.getElementById("rollButton").addEventListener("click", rollDice);
  rollDice();
}

//resets the style of the dice
function resetDiceStyle() {
  document.querySelectorAll(".dice").forEach(function (dice) {
    dice.classList.remove("held");
  });
}

//resets the entire game so you can play again
function resetAll() {
  document.getElementById("ones").addEventListener("click", inputOne);
  document.getElementById("twos").addEventListener("click", inputTwo);
  document.getElementById("threes").addEventListener("click", inputThree);
  document.getElementById("fours").addEventListener("click", inputFour);
  document.getElementById("fives").addEventListener("click", inputFive);
  document.getElementById("sixes").addEventListener("click", inputSix);
  document.getElementById("chance").addEventListener("click", inputChance);
  document.getElementById("SmStr").addEventListener("click", inputSmlStr);
  document.getElementById("lgStr").addEventListener("click", inputLrgStr);
  document.getElementById("FHouse").addEventListener("click", inputFHouse);
  document.getElementById("Toak").addEventListener("click", inputToak);
  document.getElementById("Foak").addEventListener("click", inputFoak);
  document.getElementById("yathz").addEventListener("click", inputYathzee);

  resetDice();

  document.getElementById("totalValue").innerHTML = "Grand Total: 0";
  document.getElementById("ones").innerHTML = "";
  document.getElementById("twos").innerHTML = "";
  document.getElementById("threes").innerHTML = "";
  document.getElementById("fours").innerHTML = "";
  document.getElementById("fives").innerHTML = "";
  document.getElementById("sixes").innerHTML = "";
  document.getElementById("chance").innerHTML = "";
  document.getElementById("bonus").innerHTML = "";
  document.getElementById("lgStr").innerHTML = "";
  document.getElementById("SmStr").innerHTML = "";
  document.getElementById("FHouse").innerHTML = "";
  document.getElementById("Foak").innerHTML = "";
  document.getElementById("Toak").innerHTML = "";
  document.getElementById("yathz").innerHTML = "";
}

//these functions make the info menu appear and disappaer
function showMenu() {
  document.getElementById("dropdownMenu").style.display = "block";
}

function hideMenu() {
  document.getElementById("dropdownMenu").style.display = "none";
}
