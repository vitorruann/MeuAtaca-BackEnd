# Manter Mercado

Neste local iremos mostrar com exemplos **práticos** como realizar **requisições** para o backend e como deverá ser as **respostas**. Este local é exclusivo para as rotas de **mercados e atacadistas**. Importante resaltar que os exemplos foram criados utilizando o Freamework **REACT**.

**Importante verificar o tutorial da criação da base url com axios antes de continuar, para acessar clique [aqui](/Info/axios/README.MD)**

# Rota para criação de usuários
Base para envio da requsição
```
https://meuataca-backend.herokuapp.com/newMarket, {
  name,
  email,
  cnpj,
  password
};
``` 

### Criar usuário (/newCustomer)
* **INSOMNIA**

<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/userMarket/InsominiaReqRes.JPG"/>

**Exemplo de uma requisição(req) do tipo POST para a criação de um usuário e a resposta (res) do backend utilizando Insomnia**

Na imagem acima, estamos fazendo a requsição para a rota **/newMarket**, e passando no body da requsição um JSON com as informações de (nome, email, cnpf e password). Como retorno, recebemos um status **200 OK**, informando que a requisição foi feita com sucesso e também recebemos o retorno com as informações do usuário que foi criado, inclusive o ID que é gerado de forma automática.

<br/>

* **AXIOS**
  
<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/userMarket/RequiPostCriar.JPG"/>

**Exemplo de uma requisição(req) do tipo POST para a criação de um usuário e a resposta (res) do backend utilizando Axios**

No exemplo acima, temos uma função (**handleSubmit**), que recebe como parametro a váriavel **data** que veio do form contendo os valores de (nome, email, cnpj, password). E utilizando a api criada anteriormente do axios, realizamos a requisição de **POST** para a rota **/newMarket**, passando no body da requisição os valores name, email, cnpj e password. Tudo isso dentro de uma condição try catch, que caso ocorra algum erro na criação do usuário, irá gerar um alert com as informações do erro (para mais informações sobre os erros clique [aqui](../erros/README.MD).

# Rota para alterar usuários
Base para envio da requsição
```
https://meuataca-backend.herokuapp.com/updateMarket/IDUsuario, {
  name,
  email,
  cnpj,
  password,
  confirmPassword,
  oldPassword
};
``` 

### Alterar usuário (/updateCustomer/:id)
* **INSOMNIA**
  
<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/userMarket/InsominiaReqResUpdate.JPG"/>

**Exemplo de uma requisição(req) do tipo PUT para a alteração de um usuário e a resposta (res) do backend utilizando Insomnia**

Na imagem acima, estamos fazendo a requsição para a rota **/updateMarket/5f694ac3917ab30021d699a6**, onde **5f694ac3917ab30021d699a6** é o id do usuário criado anteriormente, e passando no body da requsição um JSON com as informações de (nome, email, cnpj, password, confirmPassword e oldPassword). Como retorno, recebemos um status **200 OK**, informando que a requisição foi feita com sucesso e também recebemos o retorno com as informações do usuário que foi alterado, inclusive o ID que é gerado de forma automática. Neste exemplo enviamos todos os campos para alteração, mas não é necessário, mas caso se deseje alterar a senha, será necessário enviar os 3 campos. Para informações sobre os erros clique [aqui](../erros/README.MD). 

<br/>

* **AXIOS**
  
<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/userCustomer/RequiPutAlterar.JPG"/>

**Exemplo de uma requisição(req) do tipo PUT para a criação de um usuário e a resposta (res) do backend utilizando Axios**

No exemplo acima, temos uma função (**handleSubmit**), que recebe como parametro a váriavel **data** que veio do form contendo os valores de (nome, email, cnpj, password, confirmPassword e oldPassword) não é necessário mandar todas os valóres. E utilizando a api criada anteriormente do axios, realizamos a requisição de **PUT** para a rota **/updateMarket/5f694ac3917ab30021d699a6**, perceba que estamos pegando o ID do localStorage, onde ele foi inserido no momento em que o usuário fez o login no sistema, e passando no body da requisição os valores nome, email, cnpj, password, confirmPassword e oldPassword. Tudo isso dentro de uma condição try catch, que caso ocorra algum erro na alteração do usuário, irá gerar um alert com as informações do erro (para mais informações sobre os erros clique [aqui](../erros/README.MD).

# Rota para deletar usuários
Base para envio da requsição
```
https://meuataca-backend.herokuapp.com/deleteMarket/IDUsuario;
``` 

### Deletar usuário (/deleteMarket/:id)
* **INSOMNIA**
  
<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/userMarket/InsominiaReqResDelete.JPG"/>

**Exemplo de uma requisição(req) do tipo DELETE para a exclução de um usuário e a resposta (res) do backend utilizando Insomnia**

Na imagem acima, estamos fazendo a requsição para a rota **/deleteMarket/5f665802ce81d000210741d1**, onde **5f665802ce81d000210741d1** é o id do usuário criado anteriormente. Como retorno, recebemos um status **200 OK**, informando que a requisição foi feita com sucesso e também recebemos o retorno com as informações do usuário que foi excluido. Para informações sobre os erros clique [aqui](../erros/README.MD). 

<br/>

* **AXIOS**
  
<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/userMarket/RequiDeleteDeletar.JPG"/>

**Exemplo de uma requisição(req) do tipo DELETE para a criação de um usuário e a resposta (res) do backend utilizando Axios**

No exemplo acima, temos uma função (**handleSubmit**) que é acionada quando o usuário clica no botão para excluir o usuário. Utilizando a api criada anteriormente do axios, realizamos a requisição de **DELETE** para a rota **/deleteMarket/5f665802ce81d000210741d1**. Perceba que estamos pegando o ID do localStorage, onde ele foi inserido no momento em que o usuário fez o login no sistema. Tudo isso dentro de uma condição try catch, que caso ocorra algum erro na exclusão do usuário, irá gerar um alert com as informações do erro (para mais informações sobre os erros clique [aqui](../erros/README.MD).

## Licença
MIT © [@Vitorruan](https://github.com/vitorruann)

## [Voltar](../../README.md)
