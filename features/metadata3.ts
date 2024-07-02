import 'reflect-metadata';

@metaDataLooper
class Plane {
  color: string = 'red';

  @marker
  fly(): void {
    console.log('vrrrrrrrr');
  }

  @markerFactory('note', 'crashing')
  status(): void {
    console.log('looks good');
  }
}

function marker(target: Plane, key: string, desc: PropertyDescriptor) {
  Reflect.defineMetadata('note', 'Hijacted', target, key);
}

function markerFactory(note: string, message: string) {
  return function (target: Plane, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata(note, message, target, key);
  };
}

function metaDataLooper(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('note', target.prototype, key);
    console.log(secret);
  }
}
// const planeTest = new Plane();

// const secret = Reflect.getMetadata('secret', planeTest, 'fly');
// console.log(secret);
// const secret2 = Reflect.getMetadata('secret', Plane.prototype, 'fly');
// console.log(secret2);

// const noteOnInstance = Reflect.getMetadata('note', planeTest, 'status');
// console.log(noteOnInstance);
// const noteUndefined = Reflect.getMetadata('note', Plane, 'status');
// console.log(noteUndefined);
// const note = Reflect.getMetadata('note', Plane.prototype, 'status');
// console.log(note);
