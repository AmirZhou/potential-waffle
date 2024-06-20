import axios, { AxiosResponse, AxiosError } from 'axios';
import { Callback } from './Eventing';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}


export class User {
  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }
  set(update: UserProps): void {
    Object.assign(this.data, update);
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
