import 'reflect-metadata';

//this file is basiclly the same as metadate3.ts
@controller
class Plane {
  color: string = 'red';

  @get('/login')
  status(): void {
    console.log('looks good');
  }
}

function get(path: string) {
  return function (target: Plane, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata('path', path, target, key);
  };
}

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key);
    console.log(path);

    // router.get(path, target.prototype[key]);     we'll will do something like this
  }
}
