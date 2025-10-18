let UserInput = document.getElementById("guessField");
const submit = document.getElementById("subt");
let previousGuess = document.querySelector(".guesses");
let RemainingGuesses = document.querySelector(".lastResult");
let LowHigh = document.querySelector(".lowOrHi");
let AppPortion = document.querySelector(".resultParas");

let p = document.createElement("p");

let randomNum = parseInt(Math.random() * 100) + 1;

let GuessMade = 1;
let playgame = true;
let prevGuess = [];

if (playgame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = UserInput.value;
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Enter in number");
  } else if (guess <= 0) {
    alert("Number should be greater then zero");
  } else if (guess > 100) {
    alert("Number should be with in 100");
  } else {
    prevGuess.push(guess);
    if (GuessMade === 10) {
      DisplayMessage(`Game Over ! The random number was ${randomNum}`);
      DisplayGuess(guess);
      EndGame();
    } else {
      checkGuess(guess);
      DisplayGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess == randomNum) {
    DisplayMessage("Congrats! you guessed the right number");
    EndGame();
  } else if (guess < randomNum) {
    DisplayMessage("Number is too low");
  } else if (guess > randomNum) {
    DisplayMessage("Number is too High");
  }
}

function DisplayGuess(guess) {
  UserInput.value = "";
  previousGuess.innerHTML += `${guess} `;
  GuessMade++;
  RemainingGuesses.innerHTML = `${11 - GuessMade}`;
}
function DisplayMessage(message) {
  LowHigh.innerHTML = `<h2>${message}</h2>`;
}

function EndGame() {
  UserInput.setAttribute("disabled", "");
  p.innerHTML = `<h2 id = "ended">Play Again </h2>`;
  AppPortion.appendChild(p);
  playgame = false;
  StartGame();
}

function StartGame() {
  const start = document.getElementById("ended");
  start.addEventListener("click", function () {
    playgame = true;
    UserInput.removeAttribute("disabled");
    AppPortion.removeChild(p);
    randomNum = parseInt(Math.random() * 100) + 1;
    previousGuess.innerHTML = " ";
    GuessMade = 1;
    RemainingGuesses.innerHTML = `${11 - GuessMade}`;
  });
}
