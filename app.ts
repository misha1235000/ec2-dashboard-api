// app

import cors from 'cors';
import express from 'express';
import { Ec2Router } from './ec2/ec2.router';

const app = express();
const port = 3005;

app.use(cors());

/**
 * Use the ec2 router.
 */
app.use('/api/ec2', new Ec2Router().router);

/**
 * Runs the server on a specified port.
 */
app.listen(port, ()  => {
    return console.log(`Server is running on port ${port}`);
});

export const App = app;
