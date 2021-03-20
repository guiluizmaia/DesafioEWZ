import { Request, Response } from "express";
import { getRepository } from 'typeorm';
import Pedidos from "../models/Pedidos";

class PipedriveController{
    async execute(){
        const lib = require('pipedrive');

        lib.Configuration.apiToken= '5e6debbcfb76027edcfd7bb656e73584dca6002d';

        const controller = lib.DealsController;
    
        const dealsWon = await controller.getAllDeals({status: 'won'},function(context: object){
            return context;
        });

        const repository = getRepository(Pedidos);

        for(const deal of dealsWon.data){
            const { id, title, formatted_value, status, add_time, update_time } = deal;
            
            const pedidoExists = await repository.findOne({where: {id}})
            if(pedidoExists){
               pedidoExists.title = title; 
               pedidoExists.formatted_value = formatted_value;
               pedidoExists.status = status;
               pedidoExists.add_time = add_time.slice(0, 10);
               pedidoExists.update_time = update_time.slice(0, 10);

               await repository.save(pedidoExists);
               console.log(pedidoExists);
            }else{
                const pedido = repository.create({ id, title, formatted_value, status, add_time: add_time.slice(0, 10), update_time: update_time.slice(0, 10) });
                await repository.save(pedido);
                console.log(pedido)
            }  
        }  
    }
}

export default new PipedriveController();