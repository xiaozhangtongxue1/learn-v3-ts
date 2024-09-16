
function makeArea(shape: Shape) {
  return shape.getArea();
}

// 抽象类不能实例化， 抽象类中的抽象方法必须被子类实现
abstract class Shape {
  abstract getArea(): any;
}

class Rectangle extends Shape {
  private width: number
  private height: number

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height
  }
}

class Circle extends Shape {
  private r: number
  constructor(r: number) {
    super();
    this.r = r
  }

  getArea() {
    return this.r ** 2 * Math.PI
  }
}

const rectangle = new Rectangle(20, 30);
const circle = new Circle(20);

console.log(makeArea(rectangle));
console.log(makeArea(circle));