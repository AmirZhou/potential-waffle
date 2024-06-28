import { Router, Request, Response } from 'express';
import bodyParser from 'body-parser';

const loginRouter = Router();

loginRouter.use(bodyParser.urlencoded({ extended: true }));

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
  const { username, password } = req.body;
  res.send(`
      <h1>${username}, hang on pleasd, ${password} is correct</h1>
    `);
});

export { loginRouter };
