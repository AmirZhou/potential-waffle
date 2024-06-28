import { Router, Request, Response } from 'express';

const loginRouter = Router();

loginRouter.get('/', (req, res) => {
  res.send(`
    <div>
      <h1>Hi there!!</h1>
    </div>
    `);
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

loginRouter.post('/login', (req: Request, res: Response) => {
  console.log(req);
  res.send(`
      <h1>hang on pleasd</h1>
    `);
});

export { loginRouter };
