'use strict';

function showThis(x, y) {
    console.log(this);
    function sum() {
        console.log(this);
        return this.x + this.y;
    }
    console.log(sum());
}

showThis(6, 3);

const obj = {
    a:32,
    b:5,
    sum: function() {
        function shout() {
            console.log(this);
        }
        shout();
    }
}

obj.sum();

function sayName() {
    console.log(this);
    console.log(this.name);
}

const user = {
    name: 'John'
};

sayName.call(user);
sayName.apply(user);

function count(num) {
    return this*num;
}

const double = count.bind(2);
console.log(double(3));
console.log(double(21));

// 1) Обычная функция: this => window, но если use strict => undefined
// 2) Контекст у методов объектов - сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка  this: call, apply, bind

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    console.log(this);
});

const txObj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.num);
        };
        say();
    }
};

txObj.sayNumber();

const doubleTrouble = (a) => a * 2;

console.log(double(4));