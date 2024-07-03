import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';

export function controller(routePrefix: string) {
  const router = AppRouter.getInstance();
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
