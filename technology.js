const quizDB = [
    {
      question: "1.Which company created the most used networking software in the 1980's",
      a: "Microsoft",
      b: "SUN",
      c: "IBM",
      d: "Novell",
      ans: "ans4",
    },
    {
      question: "2.Which of the following operating systems is produced by IBM?",
      a: "OS-2",
      b: "WINDOWS",
      c: "DOS",
      d: "UNIX",
      ans: "ans1",
    },
    {
      question: "3. Which of the following is NOT a type of expansion slot or bus design used in Advanced-Technology class systems?",
      a: " PCMCIA",
      b: "ISA",
      c: " PROM",
      d: "EISA",
      ans: "ans3",
    },
    {
      question: "4.What is a GPU?",
      a: " Grouped Processing Unit",
      b: "Graphics Processing Unit",
      c: " Graphical Performance Utility",
      d: "Graphical Portable Unit",
      ans: "ans2",
    },
    {
      question: "5.What does DOCSIS stand for?",
      a: " What does DOCSIS stand for?",
      b: "Data Over Cable Security Internet Std",
      c: " Data Over Cable Secure International Stds",
      d: "Data Over Cable Service Internet Standard",
      ans: "ans1",
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