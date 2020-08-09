'use strict';

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.heigth*this.width;
    }
}

class ColoredRectatangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const dic = new ColoredRectatangleWithText(25, 10. 'Hello World', 'red');

const square = new Rectangle(10, 10);
const long = new Rectangle(20,100);

console.log(square.calcArea());
console.log(long.calcArea());

// 1) Абстракция - отделение объекта (концепции) от экземпляра;
// 2) Наследование - способность объекта или класс наследовать свои свойства от другого объекта или класса;
// 3) ;
// 4) ;