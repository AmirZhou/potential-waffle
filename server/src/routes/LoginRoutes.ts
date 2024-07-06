import { Router, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const loginRouter = Router();

const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  if (req.session && req.session.isLoggedIn === true) {
    next();
    return;
  }
  res.status(403).send('leave now');
};

loginRouter.use(bodyParser.urlencoded({ extended: true }));
loginRouter.use(cookieSession({ keys: ['abc'] }));
loginRouter.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.isLoggedIn === true) {
    res.send(`
      <div>
        <h1>Hi there! You've logged in</h1>
        <a href="/logout">Logout</a>
      </div>
      `);
  } else {
    res.send(`
      <div>
        <h1>Hi there! Please login</h1>
        <a href="/login">Login</a>
      </div>
      `);
  }
});



loginRouter.get('/login', (req: Request, res: Response) => {
  res.send(`
      <form method='POST'>
        <label>Username</label>
        <input name = 'username'></input>
        <label>Password</label> 
        <input name = 'password' type= 'password'></input>
        <button>Submit</button>
      </form>
    `);
});

loginRouter.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send(`<h1>Protectd route</h1>`);
});




export { loginRouter };
