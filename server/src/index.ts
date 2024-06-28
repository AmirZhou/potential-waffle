import express, { Request, Response } from 'express';
// const express = require('express');
import { loginRouter } from './routes/LoginRoutes';

const app = express();
const port = 3099;
// app.get('/', (req: Request, res: Response) => {});
app.use(loginRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
