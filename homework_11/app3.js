/********************************************************************************************************************/
// Задание 1:
//     Переписать задачу с использованием перебирающего метода массивов:
/********************************************************************************************************************/


function filterNumbersArr(numbers) {
    // var newArr = [];

    // for (var i = 0; i < numbers.length; i++) {
    //     var el = numbers[i];

    //     if (el > 0) {
    //         newArr[newArr.length] = el;
    //     }
    // }

    // return newArr;

    return numbers.filter((numbers) => {
        return numbers > 0
    })
}
console.log(filterNumbersArr([-1, 0, 2, 3, 6, 34, -2]));



/********************************************************************************************************************/
//   Задание 2:
//     Написать функцию, принимающую массив чисел и возвращающую первое найденное положительное число.
/********************************************************************************************************************/


function backFistNumber(arr) {

    return arr.find((value) => {
        return value > 0
    })



}

console.log(backFistNumber([-1, 0, 1, 2, 1, 34, -2, 0, -2, -4]));




/********************************************************************************************************************/
//   Задание 3:
//     Написать функцию, которая будет определять, является ли переданное в нее слово палиндромом (напр. шалаш).
//     Регистр в словах учитываться не должен. Тестировать функцию можно только на одиночных словах (без фраз).
/********************************************************************************************************************/


function isPalindrome(word) {

    return word.toLowerCase() == word.toLowerCase().split('').reverse().join('');

}

//     Функция должна работать следущим образом:

console.log(isPalindrome('шалаШ')) // true);
console.log(isPalindrome('привет')) // false);



/********************************************************************************************************************/
//   Задание 4:
//     Написать функцию, которая будет определять, являются ли переданные в нее слова анаграммами (напр. кот и отк).
//     Регистр в словах учитываться не должен.
/********************************************************************************************************************/

var areAnagrams = (a, b) => {
    return a.split('').sort().join('') === b.split('').sort().join('')
}

//     Функция должна работать следущим образом:
console.log(areAnagrams('кот', 'отк')); // true
console.log(areAnagrams('кот', 'атк')); //false
console.log(areAnagrams('кот', 'отко')); //false



/********************************************************************************************************************/
//   Задание 5:
//     Написать функцию, которая будет разбивать массив на под-массивы определенной длины.
/********************************************************************************************************************/

function divideArr(arr, sizeArr) {

    var newArr = [];
    arr.length == 0 ? [] : arr.length == 4 ? newArr.push(arr.slice(0, sizeArr), arr.slice(sizeArr, sizeArr * 2)) :
        newArr.push(arr.slice(0, sizeArr), arr.slice(sizeArr, sizeArr * 2), arr.slice(sizeArr * 2));
    return newArr
}

//     Функция должна работать следущим образом:
console.log(divideArr([1, 2, 3, 4], 2)); // [[1, 2], [3, 4]]
console.log(divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [[1, 2, 3], [4, 5, 6], [7, 8]]
console.log(divideArr([]));


/********************************************************************************************************************/