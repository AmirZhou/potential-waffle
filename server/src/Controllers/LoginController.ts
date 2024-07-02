import { Request, Response } from 'express';

@controller()
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
