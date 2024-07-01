class Boat {
  // @testDecorator
  color: string = 'red';

  @logError
  pilot(): void {
    throw new Error();
  }
  // @testDecorator
  get formattedColor(): string {
    return `The color is ${this.color}`;
  }
}

// arrow function not work
function logError(target: any, key: string, desc: PropertyDescriptor): void {
  const method = desc.value;
  desc.value = () => {
    try {
      method();
    } catch (err) {
      console.log('boat sank');
    }
  };
}

const aBoat = new Boat();
aBoat.pilot();
// decorator is just syntax suguar, we could even do it manully like the following
// which will yield the same result
// It's just a function tht receive the prototype and key
// you can modify the key and prototype
// testDecorator(Boat.prototype, 'pilot');
