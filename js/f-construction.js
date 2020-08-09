'use strict';

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`)
    }
}

User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел`);
};

ivan.exit();

const ivan = new User('Ivan', 28);
const alex = new User('Alexander', 31);

ivan.hello();
alex.hello();