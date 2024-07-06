import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';
import { RequestHandler, Request, Response, NextFunction } from 'express';

function validateInputProps(keys: string[]): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      res.status(422).send('Get out of here Zordon');
      return;
    }
    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send('Get out of here fast');
        return;
      }
    }
    next();
  };
}

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
      const middlewares =
        Reflect.getMetadata(
          MetadataKeys.middleware,
          constructor.prototype,
          key
        ) || [];

      const requireBodyProps: string[] =
        Reflect.getMetadata(
          MetadataKeys.validator,
          constructor.prototype,
          key
        ) || [];
      if (path) {
        router[method](
          `${routePrefix}${path}`,
          [...middlewares],
          validateInputProps(requireBodyProps),
          routeHandler
        );
      }
    });
  };
}
