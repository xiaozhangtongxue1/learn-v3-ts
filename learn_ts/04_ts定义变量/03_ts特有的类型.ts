/**
 * any类型 无法确定或者变量类型可变的时候，使用any类型
 */
const message: any = 'abc';
const arr: any[] = [];

/**
 * unknown类型 不太确定是什么类型
 * unknown类型只能赋值给unknown类型或者any类型，而any类型可以赋值给任何类型
 */
function foo() {
  return 'abc';
}

function bar() {
  return 123;
}

let flag = false;
let result: unknown;
// let result: number|string;
if (flag) {
  result = foo();
} else {
  result = bar();
}

// let title: string = result;
// console.log(title, typeof title);

/**
 * void类型，一般void是不写的
 */
function baz(): void {

}
function sum(num1: number, num2: number): number {
  return num1 + num2
}

/**
 * never类型 表示永远不会发生的值
 */
function hello(): never {
  // 死循环
  // while (true) {

  // }
  // 抛出异常
  throw new Error('err');
}

/**
 * tuple类型 元组
 * 多种元素的组合
 */
const info: [string, number, number] = ['abc', 18, 1.88];
const name: string = info[0];

/**
 * 函数类型,开发中一般不加函数返回值的类型，会自动推断
 */
type Add = (num1: number, num2: number) => number;
const add: Add = (num1: number, num2: number) => {
  return num1 + num2
}
type Test = (message: string, callback: (message: string) => void) => void;
const test: Test = (message: string, callback: (message: string) => void) => {
  callback(message);
}
let test1: Test = (message, callback) => {
  
}

/**
 * 对象类型
 */
function printPoint(point: {x: number, y: number}) {
  console.log(point.x, point.y);
}


export {}