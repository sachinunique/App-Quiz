const quizData = [
  {
    question:
      "Tickets numbered 1 to 20 are mixed up and then a ticket is drawn at random. What is the probability that the ticket drawn has a number which is a multiple of 3 or 5?",

    answer: [
      { text: "1/2", correct: "false" },
      { text: "2/5", correct: "false" },
      { text: "8/15", correct: "false" },
      { text: "9/20", correct: "true" },
    ],
  },

  {
    question:
      "A bag contains 2 red, 3 green and 2 blue balls. Two balls are drawn at random. What is the probability that none of the balls drawn is blue?",

    answer: [
      { text: "10/21", correct: "true" },
      { text: "2/7", correct: "false" },
      { text: "5/7", correct: "false" },
      { text: "11/21", correct: "false" },
    ],
  },

  {
    question:
      "In a box, there are 8 red, 7 blue and 6 green balls. One ball is picked up randomly. What is the probability that it is neither red nor green?",

    answer: [
      { text: "1/3", correct: "true" },
      { text: "3/4", correct: "false" },
      { text: "4/19", correct: "false" },
      { text: "8/21", correct: "false" },
    ],
  },

  {
    question:
      "What is the probability of getting a sum 9 from two throws of a dice?",

    answer: [
      { text: "1/9", correct: "true" },
      { text: "3/4", correct: "false" },
      { text: "4/9", correct: "false" },
      { text: "8/3", correct: "false" },
    ],
  },

  {
    question:
      "Three unbiased coins are tossed. What is the probability of getting at most two heads?",

    answer: [
      { text: "1/4", correct: "false" },
      { text: "3/4", correct: "false" },
      { text: "4/9", correct: "false" },
      { text: "7/8", correct: "true" },
    ],
  },

  {
    question:
      "Two dice are thrown simultaneously. What is the probability of getting two numbers whose product is even?",

    answer: [
      { text: "1/2", correct: "false" },
      { text: "3/4", correct: "true" },
      { text: "5/9", correct: "false" },
      { text: "3/8", correct: "false" },
    ],
  },

  {
    question:
      "In a class, there are 15 boys and 10 girls. Three students are selected at random. The probability that 1 girl and 2 boys are selected, is:",

    answer: [
      { text: "21/46", correct: "true" },
      { text: "25/117", correct: "false" },
      { text: "1/50", correct: "false" },
      { text: "3/25", correct: "false" },
    ],
  },

  {
    question:
      "In a lottery, there are 10 prizes and 25 blanks. A lottery is drawn at random. What is the probability of getting a prize?",

    answer: [
      { text: "1/10", correct: "false" },
      { text: "2/5", correct: "false" },
      { text: "2/7", correct: "true" },
      { text: "5/7", correct: "false" },
    ],
  },

  {
    question:
      "From a pack of 52 cards, two cards are drawn together at random. What is the probability of both the cards being kings?",

    answer: [
      { text: "1/15", correct: "false" },
      { text: "25/37", correct: "false" },
      { text: "35/256", correct: "false" },
      { text: "1/221", correct: "true" },
    ],
  },

  {
    question:
      "Two dice are tossed. The probability that the total score is a prime number is:",

    answer: [
      { text: "1/6", correct: "false" },
      { text: "5/12", correct: "true" },
      { text: "1/2", correct: "false" },
      { text: "7/9", correct: "false" },
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
