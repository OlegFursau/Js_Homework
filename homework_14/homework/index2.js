// Задание 1:
/**
 *? ///// Сверстать таблицу из 3х столбцов, в последней строке которой все ячейки объеденены в одну с текстом
 * ? /////Добавить".
 */

/**
 * ? /////По клику на эту ячейку-кнопку в начало таблицы должна добавляться новая строка.
 */

/**
 *?  ///// По клику на ячейку таблицы, в ней должен появиться сфокусированный (!!!) текстовый инпут.

 *? /////При потере фокуса инпутом - он должен исчезнуть, на его месте остается лишь ранее введенный в него текст.

 *? /////При клике на ячейку, уже содержащую текст - вставляется инпут с этим же текстом (т.е. можно отредактировать текст).

 *?  /////В одно время в таблице может находиться только один инпут.
 *?  /////При реализации использовать делегирование событий.
 *?  /////Добавить событие по нажатию на Enter в случае, если на странице есть активный инпут. 
 
 *? /////Событие должно работать точно так же, как и потеря фокуса, то есть прятать инпут и оставлять в ячейке текст.
 */


//Varable 

const btn = document.getElementById('addTab');
var tab = document.getElementsByTagName('tbody')[0];
var fistChild = tab.firstChild;
var column = document.getElementsByTagName('td');
var input = document.createElement('input');
input.type = 'text';

//Event Listeren
btn.addEventListener('click', addRow);
tab.addEventListener('click', focusInput);
input.addEventListener('blur', saveInput);
input.addEventListener('keypress', removeInputWicthKey)

//Function 
function addRow() {
    var row = document.createElement('tr');
    var columns1 = document.createElement('td'),
        columns2 = document.createElement('td'),
        columns3 = document.createElement('td');
    row.appendChild(columns1);
    row.appendChild(columns2);
    row.appendChild(columns3);
    tab.insertBefore(row, fistChild)
}

function focusInput(event) {

    var target = event;
    var tr = target.target;
    if (tr.tagName == 'TD') {
        target.path[0].appendChild(input);
        input.focus();
    }
    checkInput();
}

function saveInput() { 
    var per = input.parentElement;
    per.innerHTML = input.value;
    input.value = '';
}

function checkInput() {
    var per = input.parentElement;
    if (per.textContent.length != 0) {
        input.value = per.textContent;
    }
}

function removeInputWicthKey(event) {
    if (event.key == 'Enter') {
        input.remove()
    }
}