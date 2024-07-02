import 'reflect-metadata';

export function controller(routePrefix: string) {
  return function(constructor: Function) {
    Object.getOwnPropertyNames(constructor.prototype).forEach((key)=>{
      const routeHandler = constructor.prototype[key];
      const path = Reflect.getMetadata('path', constructor.prototype, key);
    })
  }
}