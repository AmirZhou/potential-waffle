import axios, { AxiosResponse, AxiosError } from 'axios';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}
// type Callback = () => {};
type Callback = () => void;

export class User {
  events: { [keys: string]: Callback[] } = {};
  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }
  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
  on(eventName: string, callBack: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callBack);
    this.events[eventName] = handlers;
  }
  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if (!handlers) return;
    handlers.forEach((callback) => callback());
  }
  fetch(): void {
    axios({
      method: 'GET',
      url: `http://localhost:3080/users/${this.data.id}`,
    }).then((response: AxiosResponse): void => {
      // console.log(response);
      this.set(response.data);
    });
  }
  save(): void {
    const method = this.data.id ? 'PUT' : 'POST';
    const url = this.data.id
      ? `http://localhost:3080/users/${this.data.id}`
      : `http://localhost:3080/users`;
    axios({
      method: method,
      url: url,
      data: this.data,
    });
  }
}
