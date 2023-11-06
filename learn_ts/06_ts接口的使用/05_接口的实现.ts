interface Swim {
  swimming: () => void
}

interface Eat {
  eating: () => void
}

class Dog implements Swim, Eat {
  constructor() {

  }
  swimming() {

  }
  eating() {

  }
}

export {}