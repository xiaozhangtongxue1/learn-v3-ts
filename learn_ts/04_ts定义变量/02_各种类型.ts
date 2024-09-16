
/**
 * number类型
 */
let num: number = 123;
// 二进制
let num1: number = 0b1010;
// 八进制
let num2: number = 0o456;
// 十进制
let num3: number = 0x123abc;

/**
 * boolean类型
 */
let flag: boolean = true;

/**
 * string类型
 */
let str: string = 'hello world';
let str1: string = `hello ${num}`;

/**
 * array类型
 */
const names1: string[] = ['abc', 'cba', 'nba'];
const names2: Array<string> = ['abc', 'cba', 'nba']; // 不推荐，与jsx语法有冲突 <div></div>

/**
 * object类型
 */
// 为类型取别名，type用来定义类型别名
type Info = {
  name: string,
  age: number,
  friend?: string[]
}
const info: Info = {
  name: 'name',
  age: 18
};
info.friend = ['123'];


/**
 * null 和 undefined
 */
let n1: null = null;
let n2: undefined = undefined;

/**
 * symbol类型
 */
const title1: symbol = Symbol('title');
const title2: symbol = Symbol('title');
const obj = {
  title1: '你好',
  title2: '世界'
}

export {}