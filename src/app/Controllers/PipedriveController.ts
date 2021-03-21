import { Request, Response } from "express";
import PedidoRepository from "../Repositories/PedidoRepository";
import PipedriveConnection from "../services/PipedriveConnection";


class PipedriveController{
    async execute(){
        const controller = PipedriveConnection.execute();
    
        const dealsWon = await controller.getAllDeals({status: 'won'},function(context: object){
            return context;
        });

        PedidoRepository.execute(dealsWon);
    }

    async list(req: Request, res: Response){
        const allDataDecres = await PedidoRepository.list();
        return res.status(200).json(allDataDecres);
    }

    async listData(req: Request, res: Response){
        const { data } = req.params;
        const allData = await PedidoRepository.listData(data);
        return res.status(200).json(allData);
    }
}

export default new PipedriveController();