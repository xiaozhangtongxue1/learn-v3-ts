function foo() {}
// 函数作为另一个函数的参数
function bar(fn: () => void) {
  fn()
}


// 定义常量时编写函数的类型
// type AddFnType = (num1: number, num2: number) => number;
// const add: AddFnType = (num1: number, num2: number) => {
//   return num1 + num2
// }

// 案例
function calc(n1: number, n2: number, fn: (num1: number, num2: number) => number): number {
  return fn(n1, n2)
}

calc(20, 30, function(a1, a2) {
  return a1 + a2
})

calc(20, 30, function(a1, a2) {
  return a1 * a2
})

// 函数的重载(联合类型)
// type A = number | string;
// function jis(a1: A ,a2: A) {
//   return a1 + a2
// }

// 重载的函数
function add(num1: number, num2: number): number;
function add(num1: string, num2: string): string;

// 实现的函数
function add(num1: any, num2: any): any {
  return num1 + num2
}

// 只能匹配重载的函数
add(10, 20)
add('abc', 'cba')
export {}