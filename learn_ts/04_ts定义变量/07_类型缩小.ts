
// typeof
type ID = number | string;
function printID(id: ID) {
  console.log(id);
  if(typeof id === 'string') {
    console.log(id.toLowerCase());
  } else {
    console.log(id.toFixed());
  }
}

// 平等类型缩小(== / === / !== / switch)
type Direction = 'left' | 'right' | 'top' | 'bottom';
function printDirection(direction: Direction){
  if(direction === 'left') {

  }
  switch(direction) {
    case "left":
    case "right":
    case "top":
    case "bottom":
  }
}

// instanceof
function printTime(time: string | Date) {
  console.log(time);
  if (time instanceof Date) {
    console.log(time.toUTCString());
  }
}

class Student {
  studying() {}
}
class Teacher {
  teaching() {}
}
function work(person: Student | Teacher) {
  if(person instanceof Teacher) {

  } else {

  }
}

// in 判断对象字面量里面有没有某个属性
type Fish = { swimming: () => void };
type Dog = { running: () => void };
function walk(animal: Fish | Dog) {
  if ('swimming' in animal) {
    animal.swimming();
  }
}
const fish: Fish = {
  swimming() {

  }
}

walk(fish);