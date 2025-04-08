const questionObj =
{
  category: 'Food & Drink',
  id: 'qa-1',
  correctAnswer: 'Three',
  options: ['Two', 'Three', 'Four', 'Five'],
  question:
    "How many pieces of bun are in a Mcdonald's Big Mac?",
};

const { correctAnswer, options, question } = questionObj;

let score = 0;

const questionEl = document.getElementById("question");
const optionEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
questionEl.textContent = question;

const shuffledOptions = shuffleOptions(options);

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
    console.log(score);

    scoreEl.textContent = `Score: ${score}`
    questionEl.textContent = "Quiz Completed!!";
    optionEl.textContent = ""
  })
})

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