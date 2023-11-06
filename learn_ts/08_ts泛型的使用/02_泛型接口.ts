interface Person<T, E = number> {
  name: T,
  age: E
}

const p: Person<string, number> = {
  name: 'zqx',
  age: 18
}

export {}

