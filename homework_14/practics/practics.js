//Varible
var div = document.getElementById('contaner');
var firstParag = document.createElement('p');
var secondParag = document.createElement('p');
var btn = document.getElementsByTagName('button')[0];
var p = document.getElementsByTagName('p');
var a = document.getElementsByTagName('a');



//Swith on 
firstParag.innerHTML = `Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>`;
secondParag.innerHTML = `Hello, here are <a href="http://google.by">Link 3</a> and <a href="https://vk.com">Link 4</a>`;
firstParag.className = 'firstParag';
secondParag.className = 'secondParag';
div.appendChild(firstParag);
div.appendChild(secondParag);


//Event Listener
window.addEventListener('click', removeClass, { capture: true })
btn.onclick = changeClass;
p[1].addEventListener('click', showMessage);


// Function
function changeClass(event) {


    var childs = p[0].children;
    for (var i = 0; i < childs.length; i++) {
        childs[i].className = 'color';
    }
}

function removeClass(event) {

    var childs = p[0].children;
    for (var i = 0; i < childs.length; i++) {
        childs[i].className = '';
    }
}

function showMessage(event) {
    event.preventDefault();
    var tr = event.target;
    if (tr.innerHTML === 'Link 3') {
        alert(tr.attributes[0].nodeValue);
    };
    if ((tr.innerHTML === 'Link 4')) {
        alert(tr.attributes[0].nodeValue)
    };
}