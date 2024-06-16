const apples: number = 5;
const a: null = null;
const b: undefined = undefined;
const c: string[] = ['red', 'yellow'];

// class

class Car {}

let car1: Car = new Car();

// Object Literal
let point: { x: number; y: number } = {
  x: 10,
  y: 89,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use Annotations
// 1. a funciton return
