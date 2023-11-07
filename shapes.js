// JavaScript Classes
// ES6 "class"
// Does not exist, in JavaScript
// Syntactic Sugar Wrapper - class
// Promises -> async/await

class Shape {
  sayName() {
    console.log('I am a "Shape"');
  }
}

class Line extends Shape {
  constructor(length) {
    super();
    this.length = length;
  }
  sayName() {
    console.log('I am a "Line"');
  }

}

class Rectangle extends Line {
  constructor(length, width) {
    super(length);
    this.width = width;
  }

  sayName() {
    console.log('I am a "Rectangle"');
  }

  area() {
    return this.width * this.length;
  }
}

let shape;
shape = new Shape();
shape.sayName();

shape = new Line(4);
shape.sayName();
console.log(shape.length);

shape = new Rectangle(4, 2);
shape.sayName();
console.log(shape.length);
console.log(shape.area());