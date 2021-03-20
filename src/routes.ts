import { Router } from 'express';

const lib = require('pipedrive');

lib.Configuration.apiToken= '5e6debbcfb76027edcfd7bb656e73584dca6002d';

const routes = Router();

routes.get('/', async (req, res) => {
    const user = await lib.UsersController.getCurrentUserData();
 
    res.send(user);
});

export default routes;