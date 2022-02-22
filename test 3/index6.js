// !Задание 1:
//  ///? Сверстать форму регистрации пользователя с двумя полями - Email и Password, и кнопкой Register (type="submit").
//  ///? По событию submit формы должен отправляться POST AJAX-запрос по урлу https://reqres.in/api/register.
//  * Форму получаем по атрибуту name. Формат отправки (JSON):
//  *   {
//   *    "email": "eve.holt@reqres.in",
//    *   "password": "pistol"
//     *  }

//   ? При вводе вышеуказанного имейла в инпут регистрация пройдет успешно. В этом случае необходимо убедиться в успешном
//  ? статусе ответа, получить id пользователя, пришедшее с сервера, и записать его в localStorage. Пользователю вместо формы
//  ? отрисовать информацию вида:
//    * "User (id) has been successfully registered"
//  ? Если же ввести в инпут другой имейл или не заполнить пароль, запрос будет неуспешным, то есть id получено не будет. В
//  ? такой ситуации необходимо вывести под формой текст ошибки, пришедший с сервера, поля формы динамически (!!!) очистить
//  ? и сделать их границы красными.
//   ?При загрузке страницы должна осуществляться проверка, если id в хранилище есть - сразу отрисовать информацию о том,
//   ?что пользователь был зарегистрирован. Если нет - то форму регистрации.

// Критерии оценки:
//   Задание 1:
//     - Верстка
//     - Форматирование
//     - Работа с LS
//     - Получение формы по атрибуту
//     - Правильно используещееся событие
//     - Проверка статуса ответа
//     - Очистка и выделение полей красным
//     - Оптимизация кода (сообщение об успешной регистрации, динамическая работа с инпутами)
//     - Рабочесть кода
//     - Протестированность кода и отсутствие багов



document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const input = document.getElementsByClassName('input')[0]
    let inputPass = input.children[0].children[3].value;
    let inputEmail = input.children[0].children[1].value;
    const divForms = document.getElementsByClassName('forms')[0];
    let formObj = {};
    let res;
    let result;
    let respons;
    form.addEventListener('click', delecation);

    if (localStorage.getItem('id') == 4) {
        const div = document.createElement('div');
        form.classList.add('hiden')
        div.className = 'respons';
        div.innerText = `"User id ${localStorage.getItem('id')} has been successfully registered"`
        divForms.appendChild(div)
    }
    // localStorage.clear()

    function delecation() {
        if (event.target.type === 'submit') {
            sendPost();
        }
    }

    function sendPost() {
        event.preventDefault();
        let error = validationInput(form);
        if (error === 0) {
            let xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://reqres.in/api/register');
            xhr.setRequestHeader('Content-type', 'application/json')
            console.log(formObj);
            xhr.send(JSON.stringify(formObj));
            xhr.onload = () => {
                res = xhr.status;
                respons = JSON.parse(xhr.responseText)
                result = JSON.parse(xhr.response).id;
                localStorage.setItem('id', result)
                loadRespons()
            }
        }
    }

    function validationInput() {
        let error = 0;
        let arr = input.children[0].children;
        inputPass = input.children[0].children[3].value;
        inputEmail = input.children[0].children[1].value;
        if (inputEmail === '') {
            arr[1].classList.add('error');
            error++
        }
        if (inputPass === '') {
            arr[3].classList.add('error');
            error++
        } else {
            formObj = { email: `${inputEmail}`, password: `${inputPass}` };
        }
        return error
    }

    function loadRespons() {
        if (res === 400) {
            const div = document.createElement('div');
            div.className = 'respons';
            div.innerText = `${respons.error}`
            form.appendChild(div)
        } else if (res === 200) {
            const div = document.createElement('div');
            form.classList.add('hiden')
            div.className = 'respons';
            div.innerText = `"User id ${result} has been successfully registered"`
            divForms.appendChild(div)
        }
    }

})