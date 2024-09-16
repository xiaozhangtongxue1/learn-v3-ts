
// 命名空间

export namespace time {
  export function format(time: string) {
    return '2023-10-1';
  }
}

export namespace price {
  export function format(price: number) {
    return '99.99'
  }
}

time.format('')
price.format(123)