import { NextFunction, Request, Response } from 'express';
import { get, post, use, controller, requireBodyFields } from './Decorators';

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log('test middleware: Incoming request');
  next();
};

@controller('/auth')
class LoginController {
  @get('/login')
  @use(logger)
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
  @post('/login')
  @requireBodyFields('username', 'password')
  postLogin(req: Request, res: Response): void {
    const { username, password } = req.body;
    if (username === '1' && password === '1') {
      req.session = { ...req.session, isLoggedIn: true };
      res.redirect('/');
    } else {
      res.redirect('/auth/login');
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = { ...req.session, isLoggedIn: false };
    res.redirect('/');
  }
}
// loginRouter.post('/login', (req: RequestWithBody, res: Response) => {
//   const { username, password } = req.body;
//   if (username && password && username === '1' && password === '1') {
//     // mark the person as logged in
//     req.session = { ...req.session, isLoggedIn: true };
//     res.redirect('/');
//     // redirect them to the root route
//   } else {
//     res.redirect('/login');
//   }
// });

// class LoginController is a class contains handlers,
// these handlers, do not got path included, rather, path is added by decorators
// What is resuable here?
// and the controller decorater loop over the handlers and add them to a singoleton Router obj.
// so that we don't need to add these manually.
//
