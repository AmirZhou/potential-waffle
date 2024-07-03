import express, { Request, Response } from 'express';
import { loginRouter } from './routes/LoginRoutes';
import './Controllers/LoginController'; // side effect import here
import { AppRouter } from './AppRouter';

const app = express();
const port = 3099;
// app.get('/', (req: Request, res: Response) => {});
app.use(loginRouter);
app.use(AppRouter.getInstance());
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
