# Manter Usuário final

Neste local iremos mostrar com exemplos **práticos** como realizar **requisições** para o backend e como deverá ser as **respostas**. Este local é exclusivo para as rotas de **usuário final**, que inicialmente será feito na plataforma Mobile.

**Importante verificar o tutorial da criação da base url com axios antes de continuar, para acessar clique [aqui](/Info/axios/README.MD)**

# Rota para criação de usuários
Base para envio da requsição
```
https://meuataca-backend.herokuapp.com/newCustomer, {
  name,
  email,
  cpf,
  password
};
``` 

### Criar usuário (/newCustomer)
* **INSOMNIA**

<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/userCustomer/InsominiaReqRes.JPG"/>

**Exemplo de uma requisição(req) do tipo POST para a criação de um usuário e a resposta (res) do backend utilizando Insomnia**

Na imagem acima, estamos fazendo a requsição para a rota **/newCustomer**, e passando no body da requsição um JSON com as informações de (nome, email, cpf e password). Como retorno, recebemos um status **200 OK**, informando que a requisição foi feita com sucesso e também recebemos o retorno com as informações do usuário que foi criado, inclusive o ID que é gerado de forma automática.

<br/>

* **AXIOS**
  
<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/userCustomer/RequiPostCriar.JPG"/>

**Exemplo de uma requisição(req) do tipo POST para a criação de um usuário e a resposta (res) do backend utilizando Axios**

No exemplo acima, temos uma função (**handleSubmit**), que recebe como parametro a váriavel **data** que veio do form contendo os valores de (nome, email, cpf, password). E utilizando a api criada anteriormente do axios, realizamos a requisição de **POST** para a rota **/newCustomer**, passando no body da requisição os valores name, email, cpf e password. Tudo isso dentro de uma condição try catch, que caso ocorra algum erro na criação do usuário, irá gerar um alert com as informações do erro (para mais informações sobre os erros clique [aqui]()).

# Rota para alterar usuários
Base para envio da requsição
```
https://meuataca-backend.herokuapp.com/updateCustomer/IdUsuario, {
  name,
  email,
  cpf,
  password,
  confirmPassword,
  oldPassword
};
``` 

### Alterar usuário (/updateCustomer/:id)
* **INSOMNIA**
  
<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/userCustomer/InsominiaReqResUpdate.JPG"/>

**Exemplo de uma requisição(req) do tipo PUT para a alteração de um usuário e a resposta (res) do backend utilizando Insomnia**

Na imagem acima, estamos fazendo a requsição para a rota **/updateCustomer/5f65437063c77800217cdde6**, onde **5f65437063c77800217cdde6** é o id do usuário criado anteriormente e passando no body da requsição um JSON com as informações de (nome, email, cpf, password, confirmPassword e oldPassword). Como retorno, recebemos um status **200 OK**, informando que a requisição foi feita com sucesso e também recebemos o retorno com as informações do usuário que foi alterado, inclusive o ID que é gerado de forma automática. Neste exemplo enviamos todos os campos para alteração, mas não é necessário, mas caso se deseje alterar a senha, será necessário enviar os 3 campos. Para informações sobre os erros clique [aqui](). 

<br/>

* **AXIOS**
  
<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/userCustomer/RequiPutAlterar.JPG"/>

**Exemplo de uma requisição(req) do tipo PUT para a criação de um usuário e a resposta (res) do backend utilizando Axios**

No exemplo acima, temos uma função (**handleSubmit**), que recebe como parametro a váriavel **data** que veio do form contendo os valores de (nome, email, cpf, password, confirmPassword e oldPassword) não é necessário mandar todas os valóres. E utilizando a api criada anteriormente do axios, realizamos a requisição de **PUT** para a rota **/updateCustomer/5f65437063c77800217cdde6**, passando no body da requisição os valores nome, email, cpf, password, confirmPassword e oldPassword. Tudo isso dentro de uma condição try catch, que caso ocorra algum erro na alteração do usuário, irá gerar um alert com as informações do erro (para mais informações sobre os erros clique [aqui]()).

# Rota para deletar usuários
Base para envio da requsição
```
https://meuataca-backend.herokuapp.com/updateCustomer/IdUsuario;
``` 

### Deletar usuário (/deleteCustomer/:id)
* **INSOMNIA**
  
<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/userCustomer/InsominiaReqResDelete.JPG"/>

**Exemplo de uma requisição(req) do tipo DELETE para a exclução de um usuário e a resposta (res) do backend utilizando Insomnia**

Na imagem acima, estamos fazendo a requsição para a rota **/deleteCustomer/5f663902700e530021c76943**, onde **5f663902700e530021c76943** é o id do usuário criado anteriormente. Como retorno, recebemos um status **200 OK**, informando que a requisição foi feita com sucesso e também recebemos o retorno com as informações do usuário que foi excluido. Para informações sobre os erros clique [aqui](). 

<br/>

* **AXIOS**
  
<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/userCustomer/RequiDeleteDeletar.JPG"/>

**Exemplo de uma requisição(req) do tipo DELETE para a criação de um usuário e a resposta (res) do backend utilizando Axios**

No exemplo acima, temos uma função (**handleSubmit**) que é acionada quando o usuário clica no botão para excluir o usuário. Utilizando a api criada anteriormente do axios, realizamos a requisição de **DELETE** para a rota **/deleteCustomer/5f663902700e530021c76943**. Tudo isso dentro de uma condição try catch, que caso ocorra algum erro na exclusão do usuário, irá gerar um alert com as informações do erro (para mais informações sobre os erros clique [aqui]()).

## Licença
MIT © [@Vitorruan](https://github.com/vitorruann)

## [Voltar](../../README.md)
