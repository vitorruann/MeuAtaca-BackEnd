# Manter Promoções

Neste local iremos mostrar com exemplos **práticos** como realizar **requisições** para manter as promções. Por parte dos mercados e atacadistas será feita a criação, visualização e exclução das promoções. E por parte dos usuários, eles poderam visualizar as pormoções de todos os atacadistas ou promoções de atacadistas específicos. Mostramos também como deverá ser as **respostas**. Importante resaltar que os exemplos foram criados utilizando o Freamework **REACT**.

**Importante verificar o tutorial da criação da base url com axios antes de continuar, para acessar clique [aqui](/Info/axios/README.MD)**

# Rota para criação de promoções (Apenas para Mercados e atacadistas)
Base para envio da requsição
```
https://meuataca-backend.herokuapp.com/newPromotion/IDMercado, {
	product,
	value,
	quantity,
	description
};
``` 

### Criar promoção (/newPromotion/:id)
* **INSOMNIA**

<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/promotion/InsominiaReqRes.JPG"/>

**Exemplo de uma requisição(req) do tipo POST para a criação de uma promoção e a resposta (res) do backend utilizando Insomnia**

Na imagem acima, estamos fazendo a requsição para a rota **/newPromotion/5f665802ce81d000210741d1**, onde **5f665802ce81d000210741d1** é o ID do mercado (logado no sistema) que está criando a promoção. Passamos no body da requsição um JSON com as informações de (produto, valor, quantidade e descrição). Como retorno, recebemos um status **200 OK**, informando que a requisição foi feita com sucesso e também recebemos o retorno com as informações da promoção que foi criada, inclusive o ID que é gerado de forma automática.

<br/>

* **AXIOS**
  
<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/promotion/RequiPostCriar.JPG"/>

**Exemplo de uma requisição(req) do tipo POST para a criação de uma promoção e a resposta (res) do backend utilizando Axios**

No exemplo acima, temos uma função (**handleSubmit**), que recebe como parametro a váriavel **data** que veio do form contendo os valores de (produto, valor, quantidade e descrição). E utilizando a api criada anteriormente do axios, realizamos a requisição de **POST** para a rota **/newPromotion/5f665802ce81d000210741d1**, perceba que estamos pegando o ID do localStorage, onde ele foi inserido no momento em que o mercado fez o login no sistema, e passando no body da requisição os valores nproduto, valor, quantidade e descrição. Tudo isso dentro de uma condição try catch, que caso ocorra algum erro na alteração do usuário, irá gerar um alert com as informações do erro (para mais informações sobre os erros clique [aqui](../erros/README.MD).

# Rota para deletar promoção (Apenas para Mercados e atacadistas)
Base para envio da requsição
```
https://meuataca-backend.herokuapp.com/deletePromotion/IDMercado
``` 

### Deletar promoção (/deletePromotion/:id)
* **INSOMNIA**
  
<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/promotion/InsominiaReqResDeletar.JPG"/>

**Exemplo de uma requisição(req) do tipo DELETE para a exclução de uma promoção e a resposta (res) do backend utilizando Insomnia**

Na imagem acima, estamos fazendo a requsição para a rota **/deletePromotion/5f66586dce81d000210741d2**, onde **5f66586dce81d000210741d2** é o id da promoção criada anteriormente. Como retorno, recebemos um status **200 OK**, informando que a requisição foi feita com sucesso e também recebemos o retorno com as informações da promoção que foi excluido. Para informações sobre os erros clique [aqui](../erros/README.MD). 

<br/>

* **AXIOS**
  
<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/promotion/RequiDeleteDeletar.JPG"/>

**Exemplo de uma requisição(req) do tipo DELETE para a exclução de uma promoção e a resposta (res) do backend utilizando Axios**

No exemplo acima, temos uma função (**handleSubmit**) que recebe como parametro a váriavel **data** que veio do form contendo os valores do ID da promoção. Utilizando a api criada anteriormente do axios, realizamos a requisição de **DELETE** para a rota **/deletePromotion/5f66586dce81d000210741d2**. Tudo isso dentro de uma condição try catch, que caso ocorra algum erro na exclusão do usuário, irá gerar um alert com as informações do erro (para mais informações sobre os erros clique [aqui](../erros/README.MD).

# Rota para visualização de promoções específicas por atacadista/mercado (Tanto para logista quanto para usuário final)
Base para envio da requsição
```
https://meuataca-backend.herokuapp.com/promotion/IDMercado
``` 
### Visualizar promoções por atacadistas (/promotion/:id)
* **INSOMNIA**
  
<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/promotion/InsominiaReqResPromoAtaca.JPG"/>

**Exemplo de uma requisição(req) do tipo GET para a visualizar todas as promoções de um atacadista/mercado específico e a resposta (res) do backend utilizando Insomnia**

Na imagem acima, estamos fazendo a requsição para a rota **/promotion/5f665802ce81d000210741d1**, onde **5f665802ce81d000210741d1** é o id do mercado que criou as promoções anteriormente. Como retorno, recebemos um status **200 OK**, informando que a requisição foi feita com sucesso e também recebemos o retorno com as informações das promoções que já foram cadastrada no banco. Para informações sobre os erros clique [aqui](../erros/README.MD). 

<br/>

* **AXIOS**
  
<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/promotion/RequiGetPromoAtaca.JPG"/>

**Exemplo de uma requisição(req) do tipo GET para a visualizar todas as promoções de um atacadista/mercado específico e a resposta (res) do backend utilizando Axios**

No exemplo acima, temos uma função (**useEffect**) que é executada assim que a pagina é montada. Perceba que estamos pegando o ID do localStorage, onde ele foi inserido no momento em que o mercado fez o login no sistema, Utilizando a api criada anteriormente do axios, para realizar a requisição de **GET** para a rota **/promotion/5f665802ce81d000210741d1**. Tudo isso dentro de uma condição try catch, que caso ocorra algum erro na visualização das promoções, irá gerar um alert com as informações do erro (para mais informações sobre os erros clique [aqui](../erros/README.MD).

# Rota para visualização de todas as promoções de todos os atacadista/mercado (Apenas para usuário final)
Base para envio da requsição
```
https://meuataca-backend.herokuapp.com/allPromotion
``` 
### Visualizar todas as promoções (/allPromotion)
* **INSOMNIA**
  
<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/promotion/InsominiaReqResPromo.JPG"/>

**Exemplo de uma requisição(req) do tipo GET para a visualizar todas as promoções e a resposta (res) do backend utilizando Insomnia**

Na imagem acima, estamos fazendo a requsição para a rota **/allPromotion**. Como retorno, recebemos um status **200 OK**, informando que a requisição foi feita com sucesso e também recebemos o retorno com as informações das promoções que já foram cadastrada no banco. Para informações sobre os erros clique [aqui](../erros/README.MD). 

<br/>

* **AXIOS**
  
<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/promotion/RequiGetPromo.JPG"/>

**Exemplo de uma requisição(req) do tipo GET para a visualizar todas as promoções e a resposta (res) do backend utilizandoAxios**

No exemplo acima, temos uma função (**useEffect**) que é executada assim que a pagina é montada. Utilizando a api criada anteriormente do axios, para realizar a requisição de **GET** para a rota **/allPromotion**. Tudo isso dentro de uma condição try catch, que caso ocorra algum erro na visualização das promoções, irá gerar um alert com as informações do erro (para mais informações sobre os erros clique [aqui](../erros/README.MD).

## Licença
MIT © [@Vitorruan](https://github.com/vitorruann)

## [Voltar](../../README.md)