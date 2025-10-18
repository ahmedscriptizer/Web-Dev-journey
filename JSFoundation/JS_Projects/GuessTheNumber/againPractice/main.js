const UserInput = document.getElementById("guessField");
const submit = document.getElementById("subt");
const Portion = document.querySelector(".resultParas");
let Previous = document.querySelector(".guesses");
let Remaining = document.querySelector(".lastResult");
const LowHigh = document.querySelector(".lowOrHi");
let p = document.createElement("p");
let err = document.createElement("p");

let RandomNum = parseInt(Math.random() * 100 + 1);
let GuessDone = 1;
let prevGuess = [];
let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();

    let guess = UserInput.value;
    validate(guess);
  });
}

function validate(guess) {
  if (isNaN(guess)) {
    DisplayError("Enter in numbers");
  } else if (guess <= 0) {
    DisplayError("Number should be greater then zero");
  } else if (guess > 100) {
    DisplayError("Number should be between 1-100");
  } else {
    prevGuess.push(guess);
    if (GuessDone === 11) {
      display(`Game Over! The random number was ${RandomNum}`);
      EndGame();
    } else {
      display(guess);
      DisplayMessage(guess);
      check(guess);
    }
  }
}
function DisplayError(msg) {
  err.innerHTML = `<h2>${msg}</h2>`;
  Portion.appendChild(err);
  UserInput.addEventListener("click", () => {
    Portion.removeChild(err);
  });
}
function check(guess) {
  if (guess == RandomNum) {
    display("Congrats! you guessed the right number.");
    EndGame();
  } else if (guess < RandomNum) {
    display("Your guess is too low");
  } else if (guess > RandomNum) {
    display("Your guess is too High");
  }
}

function DisplayMessage(guess) {
  UserInput.value = "";
  GuessDone++;
  Previous.innerHTML += `${guess}, `;
  Remaining.innerHTML = `${11 - GuessDone}`;
}
function display(message) {
  LowHigh.innerHTML = `<h2> ${message} </h2>`;
}
function EndGame() {
  UserInput.value = "";
  UserInput.setAttribute("disabled", "");
  p.innerHTML = `<h2 class="endgame">Play Again</h2>`;
  Portion.appendChild(p);
  playGame = false;
  StartGame();
}
function StartGame() {
  let again = document.querySelector(".endgame");
  again.addEventListener("click", () => {
    playGame = true;
    RandomNum = parseInt(Math.random() * 100 + 1);
    Portion.removeChild(p);
    UserInput.removeAttribute("disabled");
    GuessDone = 1;
    Previous.innerHTML = " ";
    Remaining.innerHTML = `${11 - GuessDone}`;
  });
}
