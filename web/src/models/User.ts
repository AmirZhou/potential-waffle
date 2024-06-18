interface UserProps {
  name?: string;
  age?: number;
}
type Callback = () => {};

export class User {
  events: { [keys: string]: Callback[] } = {};
  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callBack: Callback): void {}

  trigger(eventName: string): void {}
}
