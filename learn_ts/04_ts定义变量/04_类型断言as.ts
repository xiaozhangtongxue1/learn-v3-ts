// 类型断言 as
const el = document.getElementById('zqx') as HTMLImageElement;

el.src = ''

// Person是Student的父类
class Person {

}

class Student extends Person {
  studying() {

  }
}

function sayHello(person: Person) {
  (person as Student).studying();
}

const student = new Student();
sayHello(student);

// 

const message: string = 'hello';
// 最好不要用
// const num: number = (message as any) as number


export {}
