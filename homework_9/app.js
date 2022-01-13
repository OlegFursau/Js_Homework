function Animal(name) {
    this.name = name;
    var self = this;
    var foodAmount = 0;

    this.dailyNorm = function(amount) {

        if (!arguments.length) return foodAmount;
        if (amount == 0 || amount < 50) throw new Error(self.name + ' будет очень голодный');
        if (amount > 100) throw new Error(self.name + ' объестся и лопнет! нельзя ему такое количество корма');
        foodAmount = amount;
        return formatFoodAmount(foodAmount);
    }

    function formatFoodAmount() {
        return foodAmount + ' гр';
    }

    this.feed = function() {
        console.log(`Насыпаем в миску ${self.name}а` + ' ' + self.dailyNorm() + ' корма.')

    }
}

function Cat(name) {
    Animal.apply(this, arguments);

    var animalFeed = this.feed;

    this.feed = function() {

        animalFeed();

        console.log('Кот доволен ^_^');
        return this
    }
    this.stoke = function() {
        console.log('Гладим кота.');
        return this
    };
}
var cat = new Cat('Тигр')
    //  
cat.dailyNorm(70);
cat.feed(100).stoke()