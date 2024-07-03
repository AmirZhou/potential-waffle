import 'reflect-metadata';
import express from 'express';

export const router = express.Router();

export function controller(routePrefix: string) {
  return function (constructor: Function) {
    Object.getOwnPropertyNames(constructor.prototype).forEach((key) => {
      const routeHandler = constructor.prototype[key];
      const path = Reflect.getMetadata('path', constructor.prototype, key);
      if (path) {
        router.get(`${routePrefix}${path}`, routeHandler);
      }
    });
  };
}
