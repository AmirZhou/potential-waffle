import { Request, Response } from 'express';
// import { get } from './Decorators/routes';
// import {controller} from './Decorators/controller';
// import { get, controller } from './Decorators/index';
import { get, controller } from './Decorators';

@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(`
        <form method='POST'>
          <label>Username</label>
          <input name = 'username'></input>
          <label>Password</label>
          <input name = 'password' type= 'password'></input>
          <button>Submit</button>
        </form>
      `);
  }
}
