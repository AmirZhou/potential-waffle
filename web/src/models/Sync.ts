import axios, {AxiosResponse} from "axios";

export class Sync {
  fetch() : void {
    axios({
      method: "GET",
      url: `http://localhost:3080/users`
    })
  }

  save() : void {
    const method =
    axios({

    })
  }
}