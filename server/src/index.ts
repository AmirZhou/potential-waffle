import express, { Request, Response } from 'express';
import { loginRouter } from './routes/LoginRoutes';
import { router as controllerRouter } from './Controllers/Decorators/controller';
import './Controllers/LoginController'; // side effect import here

const app = express();
const port = 3099;
// app.get('/', (req: Request, res: Response) => {});
app.use(loginRouter);
app.use(controllerRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
