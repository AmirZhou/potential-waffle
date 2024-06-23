import express, { Request, Response } from 'express';

const app = express();
const port = 3099;
app.get('/', (req: Request, res: Response) => {
  res.send(`
    <div>
      <h1>Hi there!</h1>
    </div>
    `);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
