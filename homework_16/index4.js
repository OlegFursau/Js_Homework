// !Задание 1:
//    ///? Добавить на страницу кнопку "Загрузить список пользователей".
//    ///? По клику на нее осуществляется AJAX (GET) запрос на https://reqres.in (List Users).
//    ///? В случае успешного получения данных:
//   //// ?   - ДИНАМИЧЕСКИ добавить на страницу вкладки "Пользователь 1", "Пользователь 2" и т.д.
//     ///    (в соотв. с количеством пользователей)
//  /// ? - сделать первую вкладку активной и показать под ней блок с информацией о пользователе
//    ///?  - вкладки должны иметь возможность переключаться и отображать соответствующие данные
//    ? - полученные данные должны записываться в LocalStorage *
//    ///? - по клику на кнопку должна происходить проверка, если данные есть в LocalStorage, не отправлять AJAX запрос, а
//         сразу отрисовывать их *
//   /// ? В случае ошибки получения данных (протестировать можно, изменив url запроса как в примере с урока):
//       - отрисовать на странице сообщение о том, что данные не получены, в произвольном виде
//   /// ? Перед отправкой ОБЯЗАТЕЛЬНО (!!!) порефакторить код и протестировать ваше приложение на работоспособность и
//     максимально на отсутствие багов.



window.addEventListener('DOMContentLoaded', () => {
    const requst = new XMLHttpRequest();
    const body = document.body;
    const div = document.createElement('div');
    const block = document.createElement('div');
    let data;
    block.className = 'block';

    function req() {
        requst.open('GET', 'https://reqres.in/api/users?page=2');
        requst.setRequestHeader('Content-type', 'application/json; charset = utf-8');
        requst.send();
        requst.addEventListener('load', getRequst);
    }
    document.getElementsByClassName('btn')[0].addEventListener('click', req, { 'once': true });

    function getRequst() {
        if (requst.status == 200) {
            data = JSON.parse(requst.response).data;
            localStorage.length == 0 ? localStorage.setItem('server', data) : localStorage.key == 'server' ? data = JSON.parse(localStorage.getItem('server')) :
                localStorage.setItem('server', data);

        } else {
            div.innerHTML = ` <div class ="error container">
            ОШИБОЧКА ВЫШЛА 
                <h2> ${requst.status} </h2>
            Sorry
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                    <g>
                        <g>
                            <g>
                                <path fill="#F2CD30" d="M7.921,256.003c0-137.021,111.07-248.082,248.075-248.082c137.013,0,248.083,111.062,248.083,248.082
                                    c0,137.005-111.07,248.075-248.083,248.075C118.991,504.079,7.921,393.008,7.921,256.003z"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <g>
                                    <path fill="#D61E1E" d="M246.224,172.277l-2.279-2.67c-16.581-23.205-43.414-36.319-71.87-35.103
                                        c-48.564,2.082-82.308,38.838-80.223,87.397c3.067,71.7,137.386,171.805,147.181,179.005c4.651,4.078,10.596,6.175,16.799,5.91
                                        l-11.449-34.119l8.685-34.31l-15.65-32.239l12.701-39.623l-17.916-34.196l15.284-29.452L246.224,172.277z"/>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <path fill="#DB2A2A" d="M344.346,132.72c-28.183-0.837-54.767,12.129-71.193,34.688l-3.374,4.034l-0.956,30.61l-17.374,28.269
                                        l15.392,35.405l-15.521,38.601l13.271,33.288l-11.146,33.589l8.951,34.856c6.213,0.187,12.13-1.989,16.732-6.139
                                        c9.723-7.376,144.511-110.875,146.583-180.878C427.15,170.461,392.929,134.155,344.346,132.72z"/>
                                </g>
                            </g>
                        </g>
                    </g>
            </svg>
    </div>`
        }
        creatCards(data);
    }
    const link = document.createElement('div');
    link.className = 'link'
    const card = document.getElementsByClassName('card')[0].appendChild(link);


    function creatCards(data) {
        const linkTitle = document.getElementsByClassName('link')[0];
        const tabPanel = document.createElement('div');
        tabPanel.className = 'tab_panel';
        for (let i = 0; i < data.length; i++) {
            const user = document.createElement('span');
            user.className = 'user';
            user.id = `${i}`
            user.textContent = `User ${i+1}`;
            linkTitle.appendChild(user);
        }
        linkTitle.insertAdjacentElement('afterend', tabPanel)
        for (let i = 0; i < data.length; i++) {
            const article = document.createElement('article');
            article.id = `${i+2}`;
            article.className = 'panel';
            linkTitle.insertAdjacentElement('afterend', article);
            const img = document.createElement('img');
            img.src = `${data[i].avatar}`;
            article.appendChild(img);
            const text = document.createElement('div');
            text.className = "text";
            img.insertAdjacentElement('afterend', text);
            text.innerHTML = `<p>First Name: ${data[i].first_name}</p>
                                <p>Last Name: ${data[i].last_name}</p>`
        }
        const panel = document.getElementsByTagName('article');
        for (let i in panel) {
            if (+i !== 0) {
                panel[i].className = 'panel_hiden'
            }
        }
        const user = document.getElementsByClassName('user');
        for (let i in user) {
            if (i == 0) {
                user[i].className = 'white';
            }
        }
        linkTitle.addEventListener('click', chooseTab);
    }
    const panel = document.getElementsByTagName('article');
    const user = document.getElementsByTagName('span');

    function chooseTab() {
        let ev = event.target;
        let id = ev.id
        if (ev.tagName == 'SPAN') {
            for (let i in panel) {
                panel[i].className = 'panel_hiden'
                panel[+id].className = 'panel'
            }
            for (let i in user) {
                user[i].className = 'green';
                user[+id].className = 'white'
            }
        }

    }

});