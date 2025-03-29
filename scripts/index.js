//Таймер
/*let timerDisplay = document.getElementById('timer');
let isTimerExpired = false;
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
        timerDisplay.style.fontFamily = "Caveat"
        timerDisplay.style.color = 'red';

        isTimerExpired = true;
			document.querySelector('.btn_praxis').disabled = true;//блокируем кнопку по окончанию таймера
      document.getElementById('answer').disabled = true;//блокируем enter по окончанию таймера
      showAnswer(); //показ сообщения
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
    if (isTimerExpired) return;
    let question = generateQuestion();
    document.getElementById('question').textContent = `${question.num1} x ${question.num2} =`;
    document.getElementById('answer').value = ''; // очистить поле ввода
    currentAnswer = question.answer; // сохранить правильный ответ

    // Очистим иконку результата при новом вопросе
  document.getElementById('resultIcon').textContent = '';
  }


    
  function checkAnswer() {
    let resultIcon = document.getElementById('resultIcon');
    //let userAnswer = parseInt(document.getElementById('answer').value);
    let userAnswer = document.getElementById('answer').value.trim();

    if (userAnswer === "") {
      // Пользователь не ввел ответ
      resultIcon.textContent = 'Введите ответ!';
      resultIcon.style.color = 'red';
      return;
    }

    userAnswer = parseInt(userAnswer);

    let scoreElementRight = document.getElementById('result_right'); // отдельная переменная для верного элемента счета
    let scoreRight= parseInt(scoreElementRight.textContent); // получение текущего значения счета
    let scoreElementWrong = document.getElementById('result_wrong'); // отдельная переменная для неверного элемента счета
    let scoreWrong= parseInt(scoreElementWrong.textContent); // получение текущего значения счета
    
    if (userAnswer === currentAnswer) {
      scoreRight ++; //добавляем балла за верный ответ
      resultIcon.textContent = '✔️';
      resultIcon.style.color = 'green';
    } else {
      scoreWrong ++;//добавляем балла за неверный ответ
      resultIcon.textContent = '❌';
      resultIcon.style.color = 'red';
    }

    scoreElementRight.textContent = scoreRight;
    scoreElementWrong.textContent = scoreWrong;

    setTimeout(displayQuestion, 500);  // Вызовем функцию с задержкой, чтобы иконка не оставалась бесконечно долго
    
  }

   function showAnswer() {
      let text_message = document.getElementById("text_result");
      let scoreAll = parseInt(document.getElementById('result_right').textContent) + parseInt(document.getElementById('result_wrong').textContent);
      let scoreRight = parseInt(document.getElementById('result_right').textContent);
      text_message.textContent = `Ваш результат ${scoreRight} из ${scoreAll}`;
      text_message.style.color ='red';
    }
    
    function startGame() {
      startTimer();
      displayQuestion();
    }

    document.getElementById('answer').addEventListener('keydown', function(event) {
      if (event.keyCode === 13) {
        checkAnswer();
      }
    });

  document.querySelector('.btn_timer').addEventListener("click", startGame);*/

//Таймер
let timerDisplay = document.getElementById("timer");
let isTimerExpired = false;
let timerInterval;
let startButton = document.querySelector(".btn_timer");
let currentAnswer; // Переменная для хранения правильного ответа

function resetGame() {
  clearInterval(timerInterval);
  isTimerExpired = false;
  timerDisplay.innerHTML = "01:00";
  timerDisplay.appendChild(startButton);
  startButton.innerHTML =
    "<span></span><span></span><span></span><span></span>Старт";
  timerDisplay.style.fontFamily = "";
  timerDisplay.style.color = "";
  document.getElementById("result_right").textContent = "0";
  document.getElementById("result_wrong").textContent = "0";
  document.getElementById("text_result").textContent = "";
  document.getElementById("text_result").style.color = "";
  document.querySelector(".btn_praxis").disabled = false;
  document.getElementById("answer").disabled = false;
  document.getElementById("resultIcon").textContent = "";
  document.getElementById("question").textContent = ""; // Очищаем вопрос
  document.getElementById("answer").value = ""; // Очищаем поле ввода
}

function startTimer() {
  // Убираем кнопку из DOM
  if (startButton.parentNode === timerDisplay) {
    timerDisplay.removeChild(startButton);
  }

  // Генерируем первый вопрос
  displayQuestion();

  // Устанавливаем фокус в поле ввода
  document.getElementById("answer").focus();

  let durationInSeconds = 60;

  function updateTimer() {
    let minutes = Math.floor(durationInSeconds / 60);
    let seconds = durationInSeconds % 60;

    timerDisplay.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;

    if (--durationInSeconds < 0) {
      clearInterval(timerInterval);
      timerDisplay.textContent = "Время вышло! ";
      timerDisplay.appendChild(startButton);
      startButton.innerHTML =
        "<span></span><span></span><span></span><span></span>Играть";
      timerDisplay.style.fontFamily = "Caveat";
      timerDisplay.style.color = "red";

      isTimerExpired = true;
      document.querySelector(".btn_praxis").disabled = true;
      document.getElementById("answer").disabled = true;
      showAnswer();
    }
  }

  updateTimer();
  timerInterval = setInterval(updateTimer, 1000);
}

function generateQuestion() {
  let num1 = Math.floor(Math.random() * 9) + 1;
  let num2 = Math.floor(Math.random() * 9) + 1;
  return { num1, num2, answer: num1 * num2 };
}

function displayQuestion() {
  if (isTimerExpired) return;
  let question = generateQuestion();
  document.getElementById(
    "question"
  ).textContent = `${question.num1} x ${question.num2} =`;
  document.getElementById("answer").value = "";
  currentAnswer = question.answer;
  document.getElementById("resultIcon").textContent = "";
}

function checkAnswer() {
  let resultIcon = document.getElementById("resultIcon");
  let userAnswer = document.getElementById("answer").value.trim();

  if (userAnswer === "") {
    resultIcon.textContent = "Введите ответ!";
    resultIcon.style.color = "red";
    return;
  }

  userAnswer = parseInt(userAnswer);

  let scoreElementRight = document.getElementById("result_right");
  let scoreRight = parseInt(scoreElementRight.textContent);
  let scoreElementWrong = document.getElementById("result_wrong");
  let scoreWrong = parseInt(scoreElementWrong.textContent);

  if (userAnswer === currentAnswer) {
    scoreRight++;
    resultIcon.textContent = "✔️";
    resultIcon.style.color = "green";
  } else {
    scoreWrong++;
    resultIcon.textContent = "❌";
    resultIcon.style.color = "red";
  }

  scoreElementRight.textContent = scoreRight;
  scoreElementWrong.textContent = scoreWrong;

  setTimeout(displayQuestion, 500);
}

function showAnswer() {
  let text_message = document.getElementById("text_result");
  let scoreAll =
    parseInt(document.getElementById("result_right").textContent) +
    parseInt(document.getElementById("result_wrong").textContent);
  let scoreRight = parseInt(
    document.getElementById("result_right").textContent
  );
  text_message.textContent = `Ваш результат ${scoreRight} из ${scoreAll}`;
  text_message.style.color = "red";
}

function startGame() {
  resetGame();
  startTimer();
}

// Инициализация
startButton.addEventListener("click", startGame);
document.getElementById("answer").addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    checkAnswer();
  }
});
