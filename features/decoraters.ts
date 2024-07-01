class Boat {
  // @testDecorator
  color: string = 'red';

  @testDecorator
  pilot(): void {
    console.log('swish');
  }
  // @testDecorator
  get formattedColor(): string {
    return `The color is ${this.color}`;
  }
}

// arrow function not work
function testDecorator(target: any, key: string): void {
  console.log(`target: ${target}`);
  console.log(`key: ${key}`);
}

// decorator is just syntax suguar, we could even do it manully like the following
// which will yield the same result
// It's just a function tht receive the prototype and key
// you can modify the key and prototype
// testDecorator(Boat.prototype, 'pilot');
