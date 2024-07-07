import { Router, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const loginRouter = Router();

// loginRouter.use(bodyParser.urlencoded({ extended: true }));
// loginRouter.use(cookieSession({ keys: ['abc'] }));
// loginRouter.get('/', (req: Request, res: Response) => {
//   if (req.session && req.session.isLoggedIn === true) {
//     res.send(`
//       <div>
//         <h1>Hi there! You've logged in</h1>
//         <a href="/logout">Logout</a>
//       </div>
//       `);
//   } else {
//     res.send(`
//       <div>
//         <h1>Hi there! Please login</h1>
//         <a href="/login">Login</a>
//       </div>
//       `);
//   }
// });

export { loginRouter };
