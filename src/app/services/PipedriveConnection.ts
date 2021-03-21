class PipedriveConnection{
    execute(){
        const lib = require('pipedrive');

        lib.Configuration.apiToken= '5e6debbcfb76027edcfd7bb656e73584dca6002d';

        const controller = lib.DealsController;

        return controller;
    }
}

export default new PipedriveConnection();