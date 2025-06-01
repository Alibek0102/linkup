import express from 'express';
import { AuthRouter } from './routes/auth/index.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

app.use('/auth', AuthRouter);



app.listen(3000, (err) => {
    if (err) {
        return console.log('server error');
    }

    console.log('started OK!');
});