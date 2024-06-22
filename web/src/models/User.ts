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
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }
  // on(eventName: string, callBack: Callback) : void {
  //   this.events.on(eventName, callBack);
  // }
  get get() {
    return this.attributes.get;
  }
  get on() {
    return this.events.on;
  }
  get trigger() {
    return this.events.trigger;
  }
  set = (update: UserProps): void => {
    this.attributes.set(update);
    this.trigger('change');
  };
  fetch = () => {
    const id = this.attributes.get('id');
    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an ID');
    }
    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data); // use set not attributes.set
    });
  };
  save = (): void => {
    this.sync
      .save(this.attributes.getAll())
      .then((res: AxiosResponse): void => {
        this.trigger('save');
      })
      .catch((err: AxiosError) => {
        this.trigger('error');
      });
  };
}
