interface UserProps {
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
}
