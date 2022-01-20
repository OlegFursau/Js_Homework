function Animal(name) {
    this._name = name;
    var self = this;


}
Animal.prototype.dailyNorm = function(amount) {
    if (!arguments.length) return foodAmount;
    if (amount == 0 || amount < 50) throw new Error(this._name + ' будет очень голодный');
    if (amount > 100) throw new Error(this._name + ' объестся и лопнет! нельзя ему такое количество корма');
    self.foodAmount = amount;
    return this._formatFoodAmount(foodAmount);
}

Animal.prototype._formatFoodAmount = function() {
    return self.foodAmount + ' гр';
}
Animal.prototype.feed = function() {
    console.log(`Насыпаем в миску ${this._name}a` + ' ' + this.dailyNorm() + ' корма.');
}

function Cat() {
    Animal.apply(this, arguments);
}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.feed = function() {
    Animal.prototype.feed.apply(this, arguments);
    console.log('Кот доволен ^_^');
    return this;
}
Cat.prototype.stoke = function() {
    console.log('Гладим кота.');
    return this;
}
var tigr = new Cat('Тигр')


tigr.dailyNorm(50);
tigr.feed().stoke()



// // Задание 2:
// //     Написать функцию, возвращающую глубокую копию объекта - его клон. Клонироваться должны значения всех типов данных
// //     (+ массивы и функции; NaN не учитывать), а также любого уровня вложенности. Метод isArray использовать можно.

// //     Протестировать работу функции можно на таком примере:

var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};



function deepClone(obj) {
    if (obj === null) return null;

    var clone = {};
    for (var i in obj) {
        if (Array.isArray(obj[i])) {
            clone[i] = deepClone(obj[i]);
            continue;
        }
        clone[i] = obj[i];
    }
    return clone
}

var clonedObj = deepClone(initialObj);


clonedObj.object.object2.array2[1].name = 'Vasya';
initialObj.array.push(1);

initialObj.number = 40;

console.log(initialObj);
console.log(clonedObj);



// // // задание 3 Написать функцию глубокого сравнения объектов, возвращающую boolean. Сравниваться должны значения всех типов данных
// // // (+ массивы и функции; NaN не учитывать), а также любого уровня вложенности. Для определения длины объектов
// // // разрешается использовать метод Object.keys(). Хорошо протестировать работу функции (можно на объекте из пред. задания).



function getDeepEqual(obj) {
    return Object.prototype.toString.call(obj);

}

function deepEqual(a, b) {
    if (a === b) return true;
    if (typeof(a) != typeof(b)) return false;
    var aDeep = getDeepEqual(a);
    var bDeep = getDeepEqual(b);
    if (aDeep != bDeep) return false;
    if (aDeep == '[object Boolean]' || aDeep == '[object String]' || aDeep == '[object Number]') {
        if (a.valueOf() != b.valueOf()) return false
    }
    if (aDeep == '[object RegExp]' || aDeep == '[object Date]' || aDeep == '[object Error]') {
        if (a.toString() != b.toString()) return false;
    }
    if (aDeep == '[object Function]' && a.toString() != b.toString()) return false;
    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);
    if (aKeys.length != bKeys.length) return false;
    if (!aKeys.every(function(key) { return b.hasOwnProperty(key) })) return false;
    return aKeys.every(function(key) {
        return deepEqual(a[key], b[key])
    });



}


var a = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};
var b = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3, ],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};

console.log(deepEqual(a, b));