let timerInput1 = document.getElementById("time"); // Берём строку
let timerInput2 = document.getElementById("time2"); // Берём строку
let buttonRun = document.getElementById("button");// Берём кнопку запуска
let timerShow = document.getElementById("timer"); // Берём блок для показа времени

buttonRun.addEventListener('click', function() {
    timeHours = parseInt(timerInput1.value) * 60 * 60
	timeMinut = parseInt(timerInput2.value) * 60
})

timer = setInterval(function () {
	time = timeHours + timeMinut
    seconds = time%60 // Получаем секунды
    minutes = time/60%60 // Получаем минуты
    hour = time/60/60%60 // Получаем часы
    // Условие если время закончилось то...
    if (time <= 0) {
        // Таймер удаляется
        clearInterval(timer);
        // Выводит сообщение что время закончилось
        alert("Время закончилось");
    } else { // Иначе
        // Создаём строку с выводом времени
        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
        // Выводим строку в блок для показа таймера
        timerShow.innerHTML = strTimer;
    }
    --timeMinut; // Уменьшаем таймер
}, 1000)
