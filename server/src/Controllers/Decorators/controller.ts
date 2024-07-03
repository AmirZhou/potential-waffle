import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';

export function controller(routePrefix: string) {
  const router = AppRouter.getInstance();
  return function (constructor: Function) {
    Object.getOwnPropertyNames(constructor.prototype).forEach((key) => {
      const routeHandler = constructor.prototype[key];
      const path = Reflect.getMetadata(
        MetadataKeys.path,
        constructor.prototype,
        key
      );
      const method: Methods = Reflect.getMetadata(
        MetadataKeys.method,
        constructor.prototype,
        key
      );
      if (path) {
        router[method](`${routePrefix}${path}`, routeHandler);
      }
    });
  };
}
