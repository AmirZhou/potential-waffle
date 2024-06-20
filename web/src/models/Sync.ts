import axios, { AxiosPromise } from 'axios';
import { UserProps } from './User';

export class Sync {
  constructor(private rootUrl: string) {}
  fetch(id: number): AxiosPromise {
    return axios({
      method: 'GET',
      url: `${this.rootUrl}/${id}`,
    });
  }

  save(userProps: UserProps): AxiosPromise {
    const method = userProps.id ? 'PUT' : 'POST';
    const url = userProps.id ? `${this.rootUrl}/${userProps.id}` : this.rootUrl;
    return axios({
      method: method,
      url: url,
      data: userProps,
    });
  }
}
