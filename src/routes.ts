import { Router } from 'express';
import PipedriveController from './app/Controllers/PipedriveController';

const routes = Router();

routes.get('/', PipedriveController.execute);

export default routes;