class Person {
  name: string = ''
  age: number = 0

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  eating() {
    console.log(this.name, ' eating');
  }
}

const p = new Person('张三', 18);
console.log(p);
p.eating();

class Student extends Person {
  constructor(name: string, age: number) {
    super(name, age)
  }
}

export {}