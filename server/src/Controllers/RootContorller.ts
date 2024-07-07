import { controller, get, use } from './Decorators';
import { Request, Response, NextFunction } from 'express';

const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  if (req.session && req.session.isLoggedIn === true) {
    next();
    return;
  }
  res.status(403).send('leave now');
};

@controller('')
class RootController {
  @get('/')
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.isLoggedIn === true) {
      res.send(`
        <div>
          <h1>Hi there! You've logged in</h1>
          <a href="/auth/logout">Logout</a>
        </div>
        `);
    } else {
      res.send(`
        <div>
          <h1>Hi there! Please login</h1>
          <a href="/auth/login">Login</a>
        </div>
        `);
    }
  }

  @get('/protected')
  @use(requireAuth)
  getProte(req: Request, res: Response) {
    res.send(`<h1>Protectd route</h1>`);
  }
}
