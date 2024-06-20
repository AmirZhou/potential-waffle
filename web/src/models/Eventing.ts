// type Callback = () => {};
export type Callback = () => void;

export class Eventing {
  private events: { [keys: string]: Callback[] } = {};

  on(eventName: string, callBack: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callBack);
    this.events[eventName] = handlers;
  }

  trigger(eventName): void {
    const handlers = this.events[eventName];
    if (!handlers) return;
    handlers.forEach((handler) => handler());
  }
}
