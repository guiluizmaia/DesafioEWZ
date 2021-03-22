import axios from 'axios';
import PedidoRepository from '../Repositories/PedidoRepository';

class BlingController{
    private API_KEY = '8a133d40a60c911090adf317cd2f86b5a6aa5ec61fa06e311d1e987776677aad28b74030';
    async create(dealsWon: any){
        for(const deal of dealsWon.data){
            const { id, user_id, title, value } = deal;
            const XML = '<pedido><cliente><nome>'+ user_id.name + '</nome></cliente><item><codigo>' + id + '</codigo><descricao>' + title + '</descricao><qtde>1</qtde><vlr_unit>' + value + '</vlr_unit></item></pedido>'
            axios.post('https://bling.com.br/Api/v2/pedido/json&apikey=' + this.API_KEY + '&xml=' + XML)
            .then(function(response){
                console.log("Funcionou");
            }).catch(function(error){
                console.log(error);
            })
        }
        this.bd();
    }

    async bd(){
        const blingDados = await axios.get('https://bling.com.br/Api/v2/pedidos/json&apikey=' + this.API_KEY);
        PedidoRepository.execute(blingDados.data.retorno.pedidos);
    }
}

export default new BlingController();
