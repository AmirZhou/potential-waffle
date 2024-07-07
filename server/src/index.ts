import express from 'express';
// import { loginRouter } from './routes/LoginRoutes';
import './Controllers/LoginController'; // side effect import here
import './Controllers/RootContorller';
import { AppRouter } from './AppRouter';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

const app = express();
const port = 3099;
// app.get('/', (req: Request, res: Response) => {});
// app.use(loginRouter);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['abc'] }));
app.use(AppRouter.getInstance());
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
