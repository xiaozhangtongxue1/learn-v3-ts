
function printMessage(message?: string) {
  // 第一种写法
  // if (message) {
  //   console.log(message.length);
  // }
  
  // 第二种写法 !代表的含义是message一定有值，非空类型断言
  console.log(message!.length);

  // 第三种写法，用es11的可选链
  console.log(message?.length);
}

printMessage('Hello World');
printMessage('Hahaha');
// printMessage();