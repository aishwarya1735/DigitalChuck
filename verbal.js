const quizDB = [
    {
      question: "1. To cry wolf",
      a: "To listen eagerly",
      b: "To give false alarm",
      c: "To turn pale",
      d: "To keep off starvation",
      ans: "ans2",
    },
    {
      question: "2. To end in smoke",
      a: "To make completely understand",
      b: "To ruin oneself",
      c: "To excite great applause",
      d: "To overcome someone",
      ans: "ans2",
    },
    {
      question: "3. To be above board",
      a: " To have a good height ",
      b: "To be honest in any business deal",
      c: " They have no debts",
      d: "To try to be beautiful",
      ans: "ans3",
    },
    {
      question: "4. To put one's hand to plough",
      a: " To take up agricultural farming ",
      b: "To take a difficult task",
      c: " To get entangled into unnecessary things",
      d: "Take interest in technical work",
      ans: "ans2",
    },
    {
      question: "5.To pick holes",
      a: " To find some reason to quarrel",
      b: "To destroy something",
      c: " To criticise someone",
      d: "To cut some part of an item",
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
