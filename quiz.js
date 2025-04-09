import questions from "./questions.js";

// console.log(questions)
// const questionObj =
// {
//   category: 'Food & Drink',
//   id: 'qa-1',
//   correctAnswer: 'Three',
//   options: ['Two', 'Three', 'Four', 'Five'],
//   question:
//     "How many pieces of bun are in a Mcdonald's Big Mac?",
// };

let score = 0;
let currentQuestion = 0;

const questionEl = document.getElementById("question");
const optionEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("next");
const totalScore = questions.length

function showQuestion() {

  const { correctAnswer, options, question } = questions[currentQuestion];

  questionEl.textContent = question;

  const shuffledOptions = shuffleOptions(options);
  optionEl.innerHTML = ''
  shuffledOptions.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    optionEl.appendChild(btn);

    btn.addEventListener("click", () => {
      if (opt === correctAnswer) {
        score++;
      } else {
        score = score - 0.25;
      }
      // console.log(score);
      scoreEl.textContent = `Score: ${score}/${totalScore}`
      nextQuestion()

    })
  })
}


function nextQuestion() {
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    questionEl.textContent = "Quiz Completed!!";
    optionEl.textContent = ""
    nextBtn.remove()
  } else {
    showQuestion()
  }
}

nextBtn.addEventListener('click', () => {
  nextQuestion()
  scoreEl.textContent = `Score: ${score}/${totalScore}`
})

showQuestion()


// Shuffling the options
function shuffleOptions(options) {
  // console.log(options)
  for (let i = options.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * options.length);
    [options[i], options[j]] = [options[j], options[i]];
    // console.log({ i, j })
  }
  // console.log(options)
  return options;
}

shuffleOptions([1, 2, 3, 4, 5])