import axios, { AxiosPromise } from 'axios';

interface HasId {
  id: number;
}

export class Sync<T extends HasId> {
  constructor(private rootUrl: string) {}
  fetch(id: number): AxiosPromise {
    return axios({
      method: 'GET',
      url: `${this.rootUrl}/${id}`,
    });
  }

  save(data: T): AxiosPromise {
    const method = data.id ? 'PUT' : 'POST';
    const url = data.id ? `${this.rootUrl}/${data.id}` : this.rootUrl;
    return axios({
      method: method,
      url: url,
      data: data,
    });
  }
}
