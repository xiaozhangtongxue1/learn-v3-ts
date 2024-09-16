// function sum(num1: number, num2: number) {
//   return num1 + num2
// }
// 泛型： 将类型参数化
function log<T>(n1: T): T {
  return n1
}

log<number>(20);
log(['123'])
log(50)

function foo<T, E>(arg1: T, arg2: E) {

}

foo<number, string>(10, 'abc');


export {}