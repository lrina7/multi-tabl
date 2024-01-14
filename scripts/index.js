let timerDisplay = document.getElementById('timer');
  let timerInterval;

  function startTimer() {
    let durationInSeconds = 60;

    function updateTimer() {
      let minutes = Math.floor(durationInSeconds / 60);
      let seconds = durationInSeconds % 60;

      timerDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

      if (--durationInSeconds < 0) {
        clearInterval(timerInterval);
        timerDisplay.textContent = 'Время вышло!';
      }
    }

    updateTimer(); // Обновляем таймер сразу, чтобы избежать мигания
    timerInterval = setInterval(updateTimer, 1000);
  }


  //таблица
  let currentAnswer;
  function generateQuestion() {
    {
      let num1 = Math.floor(Math.random() * 9) + 1; // случайное число от 1 до 9
      let num2 = Math.floor(Math.random() * 9) + 1;
      return { num1, num2, answer: num1 * num2 };
    }
  }

  function displayQuestion() {
    let question = generateQuestion();
    document.getElementById('question').textContent = `${question.num1} x ${question.num2} =`;
    document.getElementById('answer').value = ''; // очистить поле ввода
    currentAnswer = question.answer; // сохранить правильный ответ
  }

  function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('answer').value);
    let scoreElement = document.getElementById('result'); // отдельная переменная для элемента счета
    let score = parseInt(scoreElement.textContent); // получение текущего значения счета
   

    if (userAnswer === currentAnswer) {
      score ++;
    } else {
      if (score > 0) {
        score --;
      }
    }
    scoreElement.textContent = score; // обновление элемента счета
    displayQuestion();
  }

  document.querySelector('.btn_timer').addEventListener("click", displayQuestion);

