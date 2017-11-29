import { isAdult, canDrink, isSenior } from './person.js';
import subtract, { square, add} from './utils.js';

console.log('app is running!');

console.log(square(40));
console.log(add(40, 20));
console.log(subtract(40, 20));

console.log(isAdult(40));
console.log(canDrink(10));
console.log(isSenior(10));