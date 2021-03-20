import 'reflect-metadata';
import express from 'express';
import routes from './routes';

import PipedriveController from './app/Controllers/PipedriveController';

import './database/connect';

setInterval(PipedriveController.execute, 60000)

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000);