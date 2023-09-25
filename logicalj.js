const quizDB = [
    {
      question: "1. Elated is to despondent as enlightened is to",
      a: "aware",
      b: "ignorant",
      c: "miserable",
      d: "tolerant",
      ans: "ans2",
    },
    {
      question: "2.Optimist is to cheerful as pessimist is to",
      a: "gloomy",
      b: "mean",
      c: "petty",
      d: "helpful",
      ans: "ans1",
    },
    {
      question: "3.Reptile is to lizard as flower is to",
      a: " petal ",
      b: "stem",
      c: " daisy",
      d: "aligator",
      ans: "ans3",
    },
    {
      question: "4. Play is to actor as concert is to",
      a: " symphony",
      b: "musician",
      c: " piano",
      d: "percussion",
      ans: "ans2",
    },
    {
      question: "5.Sponge is to porous as rubber is to",
      a: " massive",
      b: "solid",
      c: " elastic",
      d: "inflexible",
      ans: "ans3",
    },
  ];
  
  const question = document.querySelector(".question");
  const option1 = document.querySelector("#option1");
  const option2 = document.querySelector("#option2");
  const option3 = document.querySelector("#option3");
  const option4 = document.querySelector("#option4");
  const submit = document.querySelector("#submit");
  const answers = document.querySelectorAll(".answer");
  const showScore = document.querySelector("#showScore");
  let questionCount = 0;
  let score = 0;
  
  const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
  };
  
  loadQuestion();
  
  const getcheckedAnswer = () => {
    let answer;
    answers.forEach((current) => {
      if (current.checked) {
        answer = current.id;
      }
    });
    return answer;
  };
  
  const deselectAll = () => {
    answers.forEach((current) => (current.checked = false));
  };
  
  submit.addEventListener("click", () => {
    const checkedAnswer = getcheckedAnswer();
    console.log(checkedAnswer);
    if (checkedAnswer == quizDB[questionCount].ans) {
      score++;
    }
    questionCount++;
    deselectAll();
    if (questionCount < quizDB.length) {
      loadQuestion();
    } else {
      showScore.innerHTML = `
          <h3> You Scored ${score}/${quizDB.length} </h3>
          <button class="btn" onclick="location.reload()">Play Again</button>
          `;
      showScore.classList.remove("scoreArea");
    }
  });
