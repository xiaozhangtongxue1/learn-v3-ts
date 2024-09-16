
// 1. 没有对类型进行校验
// 2. 没有对是否传入参数进行校验
function foo(message) {
  console.log(message.length);
}

foo('Hello World');
foo();

foo(123);

console.log('后续操作');

