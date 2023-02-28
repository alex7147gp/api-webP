import * as express from 'express';
import { Request, Response } from 'express';

import cors from 'cors';
import initialState from './initialState';

const app = express();

const app.use(cors());


const port = process.env.PORT || 3005;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Worl');
});

app.get('/api/v1', (req:Request, res: Response ) => {
  res.json(initialState);
})

app.listen(port, () => {
  console.log(`the app are listening at port ${port}`)
})