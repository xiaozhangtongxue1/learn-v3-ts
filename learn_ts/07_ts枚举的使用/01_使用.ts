enum Direction {
  LEFT,
  RIGHT,
  TOP,
  BOTTOM
}
console.log(Direction);

function turnDirection(direction: Direction) {
  console.log(direction);
  switch (direction) {
    case Direction.LEFT:
      
      break;
    case Direction.RIGHT:
      
      break;
    case Direction.TOP:
      
      break;
    case Direction.BOTTOM:
      
      break;
    default:
      const foo: never = direction;
      break;
  }
}

turnDirection(Direction.LEFT)
turnDirection(Direction.RIGHT)
turnDirection(Direction.TOP)
turnDirection(Direction.BOTTOM)
// turnDirection(0)

export {}
