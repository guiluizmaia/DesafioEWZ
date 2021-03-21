import { Router } from 'express';
import PipedriveController from './app/Controllers/PipedriveController';

const routes = Router();

routes.get('/', PipedriveController.list);
routes.get('/:data', PipedriveController.listData);

export default routes;