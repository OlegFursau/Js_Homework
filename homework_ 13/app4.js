/*
 * *ДОМАШНЕЕ ЗАДАНИЕ*/

/**
 * !Задание 1:
 *?Написать функцию, принимающую массив имен и возвращающую массив объектов вида {name: 'Vasya'}.
 */

function returnObjectName(arr) {
    return arr.map((elem) => {
        return { 'name': elem };
    });
}
console.log(returnObjectName(['Vasya', 'Gena', 'Petia']));

/** 
 * ! Задание 2:
 * ? Написать функцию, принимающую массив вида ['00', '13', '24'] и возвращающую строку "Текущее время : 00 : 13 : 24".
 * * Для решения использовать перебирающий метод массивов (не метод join)
 */

function getTime(arr) {
    for (var e in arr) {
        return `"Текущее время: ${arr[0]} : ${arr[1]} : ${arr[2]}"`;
    }
}
console.log(getTime([new Date().getHours(), new Date().getMinutes(), new Date().getSeconds()]));

/**
 * !Задание 3:
 *  ? Написать функцию, которая будет возвращать количество гласных в переданном тексте. Регистр любой. Решение не
 *  ?должно быть "топорным".
 */

function getSumvowels(str) {
    var vowels = "аеоуиыэюя";
    return str.toLowerCase().split('').reduce((sum, value) => {
        vowels.includes(value) ? sum++ : 0;
        return sum;
    }, 0);
}
console.log(getSumvowels('рентгеноэлектрокардиографический'));

/**
 * !Задание 4:
 *? Написать функцию, которая будет принимать текст в качестве параметра. У текста должны быть пробелы, точки, запятые,
 *? вопросительным знакам - убрав их).
 *? Для каждого из предложений - отдельно вывести текст предложения и рядом количество букв в нем (без учета пробелов,
 *? запятых и т.д. - именно букв). Из ранее непройденных методов разрешается использовать только (!!!) регулярное выражение
 *? в методе split.
 * *Функция должна работать следущим образом (потестировать на данном тексте):
 **  countSentencesLetters('Привет, студент! Студент... Как дела, студент?');
 **  Привет, студент: Letters quantity is: 13
 **  Студент: Letters quantity is: 7
 **  Как дела, студент: Letters quantity is: 14
 */

function countSentencesLetters(str) {
    var letter = 'абвгдежзклмниопрстуфхцчшщъыьэюя'
    var newArr = [];
    var sum1 = 0,
        sum2 = 0,
        sum3 = 0;
    var arr = str.toLowerCase().split(/[.?\/#!$%/]/g).forEach((elem) => {
        if (elem.length > 0) {
            newArr.push(elem);
        }
    })
    for (var i = 0; i < newArr[0].length; i++) {
        letter.includes(newArr[0][i]) ? sum1++ : 0;
    }
    for (var i = 0; i < newArr[1].length; i++) {
        letter.includes(newArr[1][i]) ? sum2++ : 0;
    }
    for (var i = 0; i < newArr[2].length; i++) {
        letter.includes(newArr[2][i]) ? sum3++ : 0;
    }
    return `
    Привет, студент: Letters quantity is: ${sum1}
    Студент: Letters quantity is: ${sum2}
    Как дела, студент: Letters quantity is: ${sum3}`;
}

console.log(countSentencesLetters('Привет, студент! Студент... Как дела, студент?'));



/**
 * !Задание 5 *:
 *?Написать функцию, которая будет находить в переданном ей тексте первое наиболее часто повторяемое слово и возвращать
 *? информацию вида:
 *? "Максимальное число повторений у слова "привет" - 8"
 *? Для удобного разделения текста на слова сразу по нескольким знакам препинания - разрешается использовать регулярное
 *? выражение в методе split.
 */


function sumIntegers(str) {
    var sum = 0;
    str.toLowerCase().split(/[.,?\s/#!$%/]/g).forEach(elem => {
        str.includes(elem) ? sum++ : 0
    })
    return `"Максимальное число повторений у слова "${checkSent(str)}" - ${sum}"`
}

function checkSent(str) {
    var word;
    var arr = str.toLowerCase().split(/[.,?\s/#!$%/]/g);
    for (var k in arr) {
        if (arr[k] === arr[k]) { return word = arr[k] };
    }
    return word;
}


console.log(sumIntegers('Привет Вася! Привет Женя! Привет!'));