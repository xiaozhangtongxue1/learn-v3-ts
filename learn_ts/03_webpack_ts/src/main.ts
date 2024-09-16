import { sum } from './math';

const message = 'hello';

function foo(message: string) {
  console.log(message);
}

foo(message);

console.log(sum(555, 2));