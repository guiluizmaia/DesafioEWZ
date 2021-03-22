import { getRepository } from 'typeorm';
import Pedidos from "../models/Pedidos";

class PedidoRepository{
    async execute(blingDados: any){
        const repository = getRepository(Pedidos);

        for(const dado of blingDados){
            const { totalprodutos, data, numero } = dado.pedido;

            const pedidoExist = await repository.findOne({id: numero})
            if(!pedidoExist){            
                const pedido = await repository.create({id: numero, data, valor: totalprodutos});
                await repository.save(pedido);
            }
        }  
    }

    async list(){
        const repository = getRepository(Pedidos);
        const allDataDecres = await repository.createQueryBuilder("data").orderBy("data", "DESC").getMany();
        return allDataDecres;         
    }

    async listData(data: string){
        const repository = getRepository(Pedidos);
        const allData = await repository.find({where: {data: data}})
        return allData;
    }
}
 
export default new PedidoRepository();