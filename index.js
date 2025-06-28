import express from 'express';
import dotenv from 'dotenv';

import { AuthRouter } from './routes/auth/index.js';
import { CitiesRouter } from './routes/cities/index.js';
import { InterestsRouter } from './routes/interests/index.js';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerOptions from './src/config/swagger_configuration.js';
import swaggerUi from "swagger-ui-express";

dotenv.config();

const app = express();
const swaggerSpec = swaggerJSDoc(swaggerOptions);
//Swagger
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());

// Routes
app.use('/auth', AuthRouter);
app.use('/cities', CitiesRouter);
app.use('/interests', InterestsRouter);


app.listen(3000, (err) => {
    if (err) {
        return console.log('server error');
    }

    console.log('started OK!');
});