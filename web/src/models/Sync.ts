import axios, { AxiosResponse } from 'axios';
import { UserProps } from './User';

export class Sync {
  constructor(private rootUrl: string) {}
  fetch(id: number): void {
    axios({
      method: 'GET',
      url: `${this.rootUrl}/${id}`,
    });
  }

  save(userProps: UserProps): void {
    const method = userProps.id ? 'PUT' : 'POST';
    const url = userProps.id ? `${this.rootUrl}/${userProps.id}` : this.rootUrl;
    axios({
      method: method,
      url: url,
      data: userProps,
    });
  }
}
