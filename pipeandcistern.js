const quizData = [
  {
    question:
      "Three pipes A, B and C can fill a tank from empty to full in 30 minutes, 20 minutes, and 10 minutes respectively. When the tank is empty, all the three pipes are opened. A, B and C discharge chemical solutions P,Q and R respectively. What is the proportion of the solution R in the liquid in the tank after 3 minutes?",

    answer: [
      { text: "5/11 th", correct: "false" },
      { text: "6/11 th", correct: "true" },
      { text: "7/11 th", correct: "false" },
      { text: "8/11", correct: "false" },
    ],
  },

  {
    question:
      "A pump can fill a tank with water in 2 hours. Because of a leak, it took 2 hours to fill the tank. The leak can drain all the water of the tank in",

    answer: [
      { text: "12hrs", correct: "false" },
      { text: "13hrs", correct: "false" },
      { text: "14hrs", correct: "false" },
      { text: "15hrs", correct: "true" },
    ],
  },

  {
    question:
      "Two pipes A and B can fill a cistern in 37 minutes and 45 minutes respectively. Both pipes are opened. The cistern will be filled in just half an hour, if the B is turned off after",

    answer: [
      { text: "5min", correct: "false" },
      { text: "9min", correct: "true" },
      { text: "10min", correct: "false" },
      { text: "15min", correct: "false" },
    ],
  },

  {
    question:
      "A tank is filled by three pipes with uniform flow. The first two pipes operating simultaneously fill the tank in the same time during which the tank is filled by the third pipe alone. The second pipe fills the tank 5 hours faster than the first pipe and 4 hours slower than the third pipe. The time required by the first pipe is",

    answer: [
      { text: "6hrs", correct: "false" },
      { text: "10hrs", correct: "false" },
      { text: "15hrs", correct: "true" },
      { text: "18hrs", correct: "false" },
    ],
  },

  {
    question:
      "Two pipes can fill a tank in 20 and 24 minutes respectively and a waste pipe can empty 3 gallons per minute. All the three pipes working together can fill the tank in 15 minutes. The capacity of the tank in gallon",

    answer: [
      { text: "60 ", correct: "false" },
      { text: "100 ", correct: "false" },
      { text: "65", correct: "true" },
      { text: "180 ", correct: "false" },
    ],
  },

  {
    question:
      "A tank is filled in 5 hours by three pipes A, B and C. The pipe C is twice as fast as B and B is twice as fast as A. How much time will pipe A alone take to fill the tank?",

    answer: [
      { text: "20 hrs", correct: "false" },
      { text: "25hrs", correct: "false" },
      { text: "30 hrs", correct: "false" },
      { text: "35 hrs", correct: "true" },
    ],
  },

  {
    question:
      "Two pipes A and B together can fill a cistern in 4 hours. Had they been opened separately, then B would have taken 6 hours more than A to fill the cistern. How much time will be taken by A to fill the cistern separately?",

    answer: [
      { text: " 1 hr", correct: "false" },
      { text: "2hr", correct: "false" },
      { text: "6 hr", correct: "true" },
      { text: "8hrs", correct: "false" },
    ],
  },

  {
    question:
      "Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both the pipes are used together, then how long will it take to fill the tank?",

    answer: [
      { text: " 12 min", correct: "true" },
      { text: "15 min", correct: "false" },
      { text: "25 min", correct: "false" },
      { text: "50 min", correct: "false" },
    ],
  },

  {
    question:
      " A large tanker can be filled by two pipes A and B in 60 minutes and 40 minutes respectively. How many minutes will it take to fill the tanker from empty state if B is used for half the time and A and B fill it together for the other half?",

    answer: [
      { text: " 30 min", correct: "true" },
      { text: "15 min", correct: "false" },
      { text: "25 min", correct: "false" },
      { text: "40 min", correct: "false" },
    ],
  },

  {
    question:
      "Three pipes A, B and C can fill a tank in 6 hours. After working at it together for 2 hours, C is closed and A and B can fill the remaining part in 7 hours. The number of hours taken by C alone to fill the tank is",

    answer: [
      { text: " 14 hrs", correct: "true" },
      { text: "15 hrs", correct: "false" },
      { text: "22 hrs", correct: "false" },
      { text: "10 hrs", correct: "false" },
    ],
  },
];
let score = 0;
const question = document.getElementById("heading-question");
const answerButton = document.querySelector("#answer-Buttons");
const nextButton = document.getElementById("btnNext");

const clock = setInterval(() => {
  const time = document.getElementById("time");
  let count = time.innerHTML;
  count--;
  time.innerHTML = count;
}, 1000);

let currentIndex = 0;
function showQuestion() {
  let questions = quizData[currentIndex];
  let questionNo = currentIndex + 1;

  question.innerHTML = `<div>${questionNo + "."} ${questions.question}</div>`;

  quizData[currentIndex].answer.forEach((e) => {
    answerButton.innerHTML += `<button class="btn " id=${e.correct}>${e.text}</button>`;
  });
}

showQuestion();

nextButton.addEventListener("click", () => {
  if (currentIndex < quizData.length - 1) {
    answerButton.innerHTML = "";
    currentIndex++;

    showQuestion();
    answerButton.addEventListener("click", scoreCalc);
  } else {
    nextButton.style.display = "none";
    const submit = document.getElementById("btnSubmit");
    submit.style.display = "block";
    submit.addEventListener("click", () => {
      reset();
    });
  }
});

const scoreCalc = (e) => {
  // console.log(e.target.id)

  answerButton.removeEventListener("click", scoreCalc);

  if (e.target.id === "true") {
    score++;
    const scoreHtml = document.getElementById("score-html");
    scoreHtml.innerHTML = score;
    e.target.className += " correct";
  } else {
    e.target.className += " incorrect";
  }
};

answerButton.addEventListener("click", scoreCalc);

function reset() {
  question.innerHTML = ` <div> ${localStorage.getItem(
    "playerName"
  )} :- You Scored ${score} out of ${quizData.length} </div>`;

  question.style.marginTop = "60px"

  quizData[currentIndex].answer.forEach((e) => {
    answerButton.innerHTML = "";

    const time = document.getElementById("time");
    time.innerHTML = "";
    clearInterval(clock);

    const sctext = document.getElementById("sctext");
    sctext.innerHTML = "";

    const submit = document.getElementById("btnSubmit");
    submit.innerText = "Play Again";

    submit.addEventListener("click", () => {
      location.href = "probability.html";
    });

    const nextButton = document.getElementById("btnNext");
    nextButton.style.display = "block";
    nextButton.innerText = "Home";

    nextButton.addEventListener("click", () => {
      location.href = "index.html";
    });
  });
}