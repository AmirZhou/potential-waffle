import axios, { AxiosResponse, AxiosError } from 'axios';
import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3080/users';

export class User {
  attributes: Attributes<UserProps> = new Attributes<UserProps>({});
  events: Eventing = new Eventing();
  sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

  constructor(data: UserProps) {}
}
