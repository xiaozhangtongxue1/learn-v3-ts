
// 声明模块
declare module 'lodash' {
  export function join(arr: any[]): void
}

// 声明变量/函数/类
declare let name: string;
declare function name<T>(params: T): T


// 声明文件，比如一张图片文件
declare module '*.jpg'

// 声明命名空间
declare namespace $ {

}