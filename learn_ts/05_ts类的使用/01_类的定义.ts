class Person {
  name: string = ''
  age: number = 0
  // 只读属性修饰符 不能修改，可在构造器中赋值，赋值之后不可修改
  readonly job?: string

  constructor(name: string, age: number, job?: string) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
  eating() {
    console.log(this.name, ' eating');
  }
  // 三大修饰符
  // public任何地方都可见，公有的属性或方法，默认编写的属性不加修饰符就是public
  public laughing() {
    this.running();
  }
  // private 仅在同一种类中可见、私有的属性或方法
  private running() {

  }
  // protected 仅在类自身以及子类中可见，受保护的属性或方法
  protected status: string = ''
  // 类的静态属性 通过Person.jump()调用
  static jump() {

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