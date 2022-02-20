// !ДОМАШНЕЕ ЗАДАНИЕ
// *Задание 1:
//     ?Скинуть идею итогового проекта и краткое описание его функционала.
// *Задание 2:
//     ///?Написать свой секундомер в формате mm: ss: msms(по 2 цифры в каждом параметре).
// ///? Изначально на странице должна быть кнопка "Start".При запуске секундомера текст кнопки меняется на "Stop".
///// ? Если пользователь нажимает на кнопку "Stop" - ее текст должен измениться на "Run".
// ///? Использовать data - атрибут, хранящий состояние секундомера.Работа кнопки и секундомера должна опираться на него.
///// ? Также после старта работы секундомера должны появиться кнопки "Save"
// //и "Reset".
// ?/// Кнопки должны работать соответственным образом(по клику на кнопку "Reset"
//    // секундомер должен полностью вернуться в изначальное состояние).
///// ? Максимальное количество минут - 60. После этого секундомер останавливается(тестировать на значениях поменьше).
///// ? Из остальной логики должны остаться только кнопка "Reset"
// и метки.
// !!Секундомер должен работать после перезагрузки страницы и полностью сохранять свое состояние и метки.
// *Чтобы время шло со скоростью реального - запускать интервал с промежутком в 10 ms, увеличивать значение ms на 1
//* на каждой итерации и считать их до 100.
// !При реализации класс Date использовать запрещено.

document.addEventListener('DOMContentLoaded', () => {
    //* varible and Additional
    const btn = document.getElementsByClassName('btn')[0];
    const div = document.getElementsByClassName('timer_start')[0];
    const span = document.getElementsByTagName('span');

    let stopWatch = document.createElement('div');
    stopWatch.className = 'timer';
    stopWatch.innerHTML = `   <div class="min">
                        <span id="min">00</span>
                    </div>
                    <div class="sec">
                        <span id="sec">00</span>
                    </div>
                    <div class="ms">
                        <span id="ms">00</span>
                    </div>`
    div.insertAdjacentElement('afterend', stopWatch)
    const minutes = document.getElementById('min');
    const seconds = document.getElementById('sec');
    const msms = document.getElementById('ms');
    let button;
    let timer;
    let zero = [0, 0, 0];
    let [min, sec, ms] = zero;
    let reset;
    let save;
    let i = 1;
    //*addEventList
    btn.addEventListener('click', checkButton);

    //* Funtions
    function checkButton() {
        event.stopPropagation();
        if (btn.dataset.state === 'Start') {
            btn.innerHTML = 'Stop'
            btn.dataset.state = 'Stop'
            btn.classList.add('active')
            startStopWatch()
        } else if (btn.dataset.state == 'Stop') {
            btn.innerHTML = 'Run';
            btn.dataset.state = 'Run';
            clearInterval(timer);
            btn.classList.remove('active');
            btn.classList.add('run')
        } else if (btn.dataset.state === 'Run') {
            btn.innerHTML = 'Stop'
            btn.dataset.state = 'Stop'
            startStopWatch()
            button.remove()
            btn.classList.remove('run')
            btn.classList.add('active');

        }
    }

    function startStopWatch() {
        timer = setInterval(() => {
            ms++
            ms < 9 ? msms.innerText = `0${ms}` : msms.innerText = `${ms}`;
            if (ms === 99) {
                ms = 0;
                sec++
                sec <= 9 ? seconds.innerText = `0${sec}` : seconds.innerText = `${sec}`
            }
            if (sec === 60) {
                seconds.innerText = '00';
                sec = 0
                min++
                min <= 9 ? minutes.innerText = `0${min}` : minutes.innerText = `${min}`
            } else if (min === 60) {
                min < 9 ? minutes.innerText = `0${min}` : `${min}`;
                seconds.innerText = '00';
                msms.innerText = '00';
                clearInterval(timer);
                btn.remove()
                save.remove();
                for (let i in span) {
                    span[i].className = 'red'
                }
            }
        }, 10);
        addButton()
    }

    function addButton() {
        button = document.createElement('div');
        button.className = 'timer_stop';
        button.innerHTML = `<button id="reset" class="btnStop" data-state="Reset">Reset</button>
                            <div class="timer_stop">
                                <button id ="save" class="btnStop" data-state="Save">Save</button>
                            </div>
                            <div class="result">     
                            </div>`;
        stopWatch.insertAdjacentElement('afterend', button);
        reset = document.getElementById('reset');
        save = document.getElementById('save');
        reset.onclick = resetStopWatch;
        save.onclick = saveStopWatch;
    }

    function resetStopWatch() {
        location.reload(); //думаю что так будет надежнее 
    }

    function saveStopWatch() {
        const result = document.getElementsByClassName('result')[0];
        const p = document.createElement('p')
        p.className = 'p';
        if (localStorage.getItem('min') == null) {
            localStorage.setItem('min', 0)
        }
        if (sec <= 9) {
            p.innerText = `${i}) 0${min} : 0${sec} : ${ms}`;
        } else if (sec > 9 && min == 0) {
            p.innerText = `${i}) 0${min} : ${sec} : ${ms}`
        } else if (sec > 9 && min < 9) {
            p.innerText = `${i}) 0${min} : ${sec} : ${ms}`;
        } else {
            p.innerText = `${i}) ${min} : ${sec} : ${ms}`;
        }
        result.appendChild(p)
        return i++
    }

})