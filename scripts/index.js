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