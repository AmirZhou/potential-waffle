import { Router, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const loginRouter = Router();

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
    `
      <div>
        <h1>Hi there! Please login</h1>
        <a href="/login">Login</a>
      </div>
      `;
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

loginRouter.post('/login', (req: RequestWithBody, res: Response) => {
  const { username, password } = req.body;
  if (username && password && username === '1' && password === '1') {
    // mark the person as logged in
    req.session = { ...req.session, isLoggedIn: true };
    res.redirect('/');
    // redirect them to the root route
  } else {
    res.redirect('/login');
  }
});
export { loginRouter };
