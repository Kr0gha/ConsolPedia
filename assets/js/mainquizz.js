//
// main.js
//

let questionsData = [
    {
      text: "Question 1",
      answers: [
        {
          text: "false",
          isCorrect: false
        },
        {
          text: "true",
          isCorrect: true
        },
        {
          text: "false",
          isCorrect: false
        },
        {
            text: "false",
            isCorrect: false
          }
      ]
    },
    {
      text: "Question 2",
      answers: [
        {
          text: "true",
          isCorrect: true
        },
        {
          text: "false",
          isCorrect: false
        },
        {
          text: "false",
          isCorrect: false
        },
        {
          text: "false",
          isCorrect: false
        }
      ]
    },
    {
      text: "Question 3",
      answers: [
        {
          text: "false",
          isCorrect: false
        },
        {
          text: 'false',
          isCorrect: false
        },
        {
          text: "true",
          isCorrect: true
        }
      ]
    },
    {
      text: "Question 4",
      answers: [
        {
          text: "true",
          isCorrect: true
        },
        {
          text: "false",
          isCorrect: false
        },
        {
          text: "false",
          isCorrect: false
        },
        {
          text: "false",
          isCorrect: false
        }
      ]
    },
    {
      text: "Question 5",
      answers: [
        {
          text: "true",
          isCorrect: true
        },
        {
          text: "false",
          isCorrect: false
        },
        {
          text: "true",
          isCorrect: true
        },
        {
          text: "false",
          isCorrect: false
        }
      ]
    }
  ];
  
  // variables initialization
  let questions = [];
  let score = 0,
    answeredQuestions = 0;
  let appContainer = document.getElementById("questions-container");
  let scoreContainer = document.getElementById("score-container");
  scoreContainer.innerHTML = `Score: ${score}/${questionsData.length}`;
  
  /**
   * Shuffles array in place. ES6 version
   * @param {Array} arr items An array containing the items.
   */
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  shuffle(questionsData);
  
  // creating questions
  for (var i = 0; i < questionsData.length; i++) {
    let question = new Question({
      text: questionsData[i].text,
      answers: questionsData[i].answers
    });
  
    appContainer.appendChild(question.create());
    questions.push(question);
  }
  
  document.addEventListener("question-answered", ({ detail }) => {
    if (detail.answer.isCorrect) {
      score++;
    }
  
    answeredQuestions++;
    scoreContainer.innerHTML = `Score: ${score}/${questions.length}`;
    detail.question.disable();
  
    if (answeredQuestions == questions.length) {
      setTimeout(function () {
        alert(`Quiz completed! \nFinal score: ${score}/${questions.length}`);
      }, 100);
    }
  });
  
  console.log(questions, questionsData);
  