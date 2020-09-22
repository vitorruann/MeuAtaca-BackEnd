# Login Mercado

Neste local iremos mostrar com exemplos **práticos** como realizar **requisições** para realizar login por parte dos logistas. Mostramos também como deverá ser as **respostas**. Importante resaltar que os exemplos foram criados utilizando o Freamework **REACT**.

**Importante verificar o tutorial da criação da base url com axios antes de continuar, para acessar clique [aqui](/Info/axios/README.MD)**

# Rota para o logista realizar login no sistema
Base para envio da requsição
```
https://meuataca-backend.herokuapp.com/sessionsMarket, {
	email,
    password
};
```
### Realizar Login (/sessionsMarket)
* **INSOMNIA**

<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/login/marketLogin/InsominiaReqRes.JPG"/>

**Exemplo de uma requisição(req) do tipo POST para o login no sistema e a resposta (res) do backend utilizando Insomnia**

Na imagem acima, estamos fazendo a requsição para a rota **/sessionsMarket**, passamos no body da requsição um JSON com as informações de (email, password). Como retorno, recebemos um status **200 OK**, informando que a requisição foi feita com sucesso e também recebemos o retorno com as informações do mercado/atacadista que realizou o login.

<br/>

* **AXIOS**
  
<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/login/marketLogin/RequiPostLogin.JPG"/>

**Exemplo de uma requisição(req) do tipo POST para o login no sistema e a resposta (res) do backend utilizando Axios**

No exemplo acima, temos uma função (**handleSubmit**), que recebe como parametro a váriavel **data** que veio do form contendo os valores de (email e password). E utilizando a api criada anteriormente do axios, realizamos a requisição de **POST** para a rota **/sessionsMarket**, passamos no body da requisição os valores email e password. Caso o login seja realizado com sucesso, percaba que estamos guardando o valor do ID do mercado no storage do navegador, está técnica será muito importante para as próximas rotas. Tudo isso dentro de uma condição try catch, que caso ocorra algum erro na alteração do usuário, irá gerar um alert com as informações do erro (para mais informações sobre os erros clique [aqui](../../erros/README.MD).

## Licença
MIT © [@Vitorruan](https://github.com/vitorruann)

## [Voltar](../../../README.md)