class ArrayOfNumbers {
  constructor(public collection: number[]) {}
  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}
  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index];
  }
}

const array1 = new ArrayOfAnything<number>([1, 2, 3, 4]);
const arrayWithTypeInferenceAroundGenerics = new ArrayOfAnything([
  3, 3, 3, 3, 3,
]);

// Examples of generics around functions
function printString(arr: string[]): void {
  for (let el of arr) {
    console.log(el);
  }
}
function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
printAnything([1, 2, 3, 4, 5]); // Don't need to include <T> here, could use inference. but we better add it.
printAnything<string>(['1', '2', '3', '4', '5']);

// Generic contrains

class House {
  print(): void {
    console.log('This is a house');
  }
}

class Car {
  print(): void {
    console.log('This is a car');
  }
}
interface Printable {
  print(): void;
}
function PrintHouseOrCar<T extends Printable>(arr: T[]) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}
