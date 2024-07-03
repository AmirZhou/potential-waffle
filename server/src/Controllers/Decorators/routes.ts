import 'reflect-metadata';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';

function routerBinder(method: Methods) {
  return function (path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.method, method, target, key);
    };
  };
}

export const get = routerBinder(Methods.get);
export const post = routerBinder(Methods.post);
export const del = routerBinder(Methods.del);
export const patch = routerBinder(Methods.patch);
export const put = routerBinder(Methods.put);
