document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const restartBtn = document.getElementById("restart-btn");
  const nextBtn = document.getElementById("next-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choiceList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");

  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  startBtn.addEventListener("click", startQuiz); // we donot want to execute this function immediately that why we just write the reference here (startQuiz)

  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });

  restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    startQuiz();
  });
  function startQuiz() {
    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
  }
  function showQuestion() {
    nextBtn.classList.add("hidden");
    questionText.textContent = questions[currentQuestionIndex].question;
    choiceList.innerHTML = ""; //clear previous choices
    questions[currentQuestionIndex].choices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => selectAnswer(choice)); // this is callback function, this is
      //  where most react developers get confused
      //  if we want to pass the reference and donot want to execute immediately
      //  then we use this callback function
      choiceList.appendChild(li);
    });
  }
  function selectAnswer(choice) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (correctAnswer === choice) {
      score++;
    }
    nextBtn.classList.remove("hidden");
  }
  function showResult() {
    resultContainer.classList.remove("hidden");
    questionContainer.classList.add("hidden");
    scoreDisplay.textContent = `${score} out of ${questions.length}`;
  }
});
