console.log('utils.js is running');

const square = (x) => x * x;
const add = (x, y) => x + y;

const subtract = (a, b) => a - b;

export { square, add, subtract as default};