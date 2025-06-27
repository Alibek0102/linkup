import express from 'express';
import dotenv from 'dotenv';

import { AuthRouter } from './routes/auth/index.js';
import { CitiesRouter } from './routes/cities/index.js';
import { InterestsRouter } from './routes/interests/index.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/auth', AuthRouter);
app.use('/cities', CitiesRouter);
app.use('/interests', InterestsRouter);


app.listen(3000, (err) => {
    if (err) {
        return console.log('server error');
    }

    console.log('started OK!');
});