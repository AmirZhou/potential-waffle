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


// class LoginController is a class contains handlers, 
// these handlers, do not got path included, rather, path is added by decorators
// What is resuable here? 
// and the controller decorater loop over the handlers and add them to a singoleton Router obj.
// so that we don't need to add these manually.
// 