import { Router } from 'express';

const lib = require('pipedrive');

lib.Configuration.apiToken= '5e6debbcfb76027edcfd7bb656e73584dca6002d';

const controller = lib.DealsController;

const routes = Router();

routes.get('/', async (req, res) => {
    const user = await lib.UsersController.getCurrentUserData();
    
    const teste = await controller.getAllDeals({status: 'won'},function(error: any , response: any, context: any){
        return context.data
    });
    res.send(teste.data);
});

export default routes;