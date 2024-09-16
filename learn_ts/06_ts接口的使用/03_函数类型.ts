// type CalcFn = (n1: number, n2: number) => number;
// 用interface定义一个函数
// 可调用接口
interface CalcFn {
  (n1: number, n2: number) : number;
}

function calc(num1: number, num2: number, calcFn: CalcFn) {
  return calcFn(num1, num2)
}
