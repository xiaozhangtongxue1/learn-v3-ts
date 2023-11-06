interface Person {
  name: string,
  age: number
}

interface Student extends Person {
  studying: () => void
}