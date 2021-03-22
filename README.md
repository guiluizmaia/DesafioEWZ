- [x] -Criar contas testes nas plataformas [Pipedrive](https://www.pipedrive.com/pt) e [Bling](https://www.bling.com.br/home).
- [x] - Criar uma integração entre as plataformas Pipedrive e Bling. (A integração deve buscar as oportunidades com status igual a "ganho" no Pipedrive, depois inseri-las como pedido no Bling).
- [x] - Criar banco de dados SQL(preferência por PostgreSQL).
- [x] - Criar uma Tabela no banco de dados para salvar as oportunidades inseridas no Bling que deve armazenar as seguintes informações.
- Valor do produto;
- Data da sincronização;
- [x] - Criar endpoint para trazer todos os registros agrupados por data.
- [x] - Criar endpoint para trazer os dados sincronizados em uma data específica.


<h1>DESCRIÇÃO DA APLICAÇÃO</h1>
<p>.A cada 600000 milissegundos(10 minutos) o PipedriveController.execute é chamado e nele pegamos o retorno do PipedriveConnection.execute (Conexão). Com o retorno pega a api do pipedrive e faz um getAllDeals aonde os deals for igual a won e por fim passa esse objeto para o BlingController.create.</p>
<br>
<p>.No BlingController.create desestruturamos e pegamos só os dados necessários para fazer o post no Bling(Realizamos o post com o Axios). e por fim chamamos outra função da mesma classe que tem o intuito de fazer um get de todos os pedidos do bling e enviar o retorno para o PedidoRepository.execute.</p>
<br>
<p>.O PedidoRepository.execute tem a função de desestruturar o objeto recebido e salvar as informações requisitadas no BD.</p>
<br>
<p>.Já nas rotas, a rota './' faz um get com todos os itens do banco de dados com um order by focado nas datas de forma decrescente (os mais novos ficam por cima), e a rota '/:data' recebe como parâmetro uma data e retorna todos os itens do banco que tiverem ela</p>
