interface Length {
  length: number
}

// 通过extends对类型进行限制
function getLength<T extends {length: number}>(arg: T) {
  return arg.length
}

console.log(getLength([1, 2, 3]));
console.log(getLength('123'));



export {}