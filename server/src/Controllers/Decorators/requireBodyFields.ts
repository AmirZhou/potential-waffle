import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';

export function requireBodyFields(...keys: string[]) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata(MetadataKeys.validator, keys, target, key);
  };
}
