import { getRepository } from 'typeorm';
import Pedidos from "../models/Pedidos";

class PedidoRepository{
    async execute(dealsWon: any){
        const repository = getRepository(Pedidos);

        for(const deal of dealsWon.data){
            const { id, title, formatted_value, status, add_time, update_time } = deal;
            
            const pedidoExists = await repository.findOne({where: {id}})
            if(!pedidoExists){
                const pedido = repository.create({ id, title, formatted_value, status, add_time: add_time.slice(0, 10), update_time: update_time.slice(0, 10) });
                await repository.save(pedido);
                console.log(pedido, "Criado")              
            }else{
                pedidoExists.title = title; 
                pedidoExists.formatted_value = formatted_value;
                pedidoExists.status = status;
                pedidoExists.add_time = add_time.slice(0, 10);
                pedidoExists.update_time = update_time.slice(0, 10);

                await repository.save(pedidoExists);
                console.log(pedidoExists, "Atualizado");
            }  
        }  
    }

    async list(){
        const repository = getRepository(Pedidos);
        const allDataDecres = await repository.createQueryBuilder("data").orderBy("update_time", "DESC").getMany();
        return allDataDecres;         
    }

    async listData(data: string){
        const repository = getRepository(Pedidos);
        const allData = await repository.find({where: {update_time: data}})
        return allData;
    }
}
 
export default new PedidoRepository();