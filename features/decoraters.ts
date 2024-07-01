class Boat {
  // @testDecorator this will not work
  color: string = 'red';

  @logError('Oop boat was sunk in ocean')
  pilot(): void {
    throw new Error();
  }
  @testDecorator
  get formattedColor(): string {
    return `The color is ${this.color}`;
  }
}

// arrow function not work
// in both the factory and the return function
// all have to be function declaration
function logError(errMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    desc.value = () => {
      try {
        method();
      } catch (err) {
        console.log(errMessage);
      }
    };
  };
}

function testDecorator(target: any, key: string, desc: PropertyDescriptor) {
  console.log(`target: ${target}`);
  console.log(`key: ${key}`);
  // console.log(desc.value);  this line not going to work, because decorator doesn't have access to property.
}

const aBoat = new Boat();
aBoat.pilot();
// decorator is just syntax suguar, we could even do it manully like the following
// which will yield the same result
// It's just a function tht receive the prototype and key
// you can modify the key and prototype
// testDecorator(Boat.prototype, 'pilot');
