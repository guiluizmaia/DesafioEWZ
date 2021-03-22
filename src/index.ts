import 'reflect-metadata';
import express from 'express';
import routes from './routes';
import PipedriveController from './app/Controllers/PipedriveController';

import './database/connect';
import BlingController from './app/Controllers/BlingController';

setInterval(PipedriveController.execute, 600000);

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3333);