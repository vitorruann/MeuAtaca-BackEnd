# Manter Usuário final

Neste local iremos mostrar com exemplos **práticos** como realizar **requisições** para o backend e como deverá ser as **respostas**. Este local é exclusivo para as rotas de **usuário final**, que inicialmente será feito na plataforma Mobile.

# Rota para criação de usuários
Base para envio da requsição
```
https://meuataca-backend.herokuapp.com/newCustomer, {
  name,
  email,
  cpf,
  email
};
``` 
### Axios

Utilizado para criar a URL para acesso ao BACKEND.

Axios é um cliente HTTP, que funciona tanto no browser quanto em node.js. A biblioteca é basicamente uma API que sabe interagir tanto com XMLHttpRequest quanto com a interface http do node.

**Comando para instalção**: yarn add axios

**Exemplo** de criação da base URL para as requisições que serão realizadas para o backend:

<br/>

<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/userCustomer/axios.JPG"/>


Neste caso estamos exportando por default a api. Então, quando formos usar, precisaramos importar.

### Criar usuário
**Exemplo de uma requisição(req) do tipo POST para a criação de um usuário e a resposta (res) do backend utilizando Insomnia**

<br/>

<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/userCustomer/InsominiaReqRes.JPG"/>

<br/>

Aqui estamos fazendo a requsição para a rota **/newCustomer**, e passando no body da requsição um JSON com as informações de (nome, cpf, password e senha). Como retorno, recebemos um status **200 OK**, informando que a requisição foi feita com sucesso e também recebemos o retorno com as informações do usuário que foi criado, inclusive o ID que é gerado de forma automática.

**Exemplo de uma requisição(req) do tipo **POST** para a criação de um usuário e a resposta (res) do backend utilizando Axios**

<br/>

<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/userCustomer/RequiPostCriar.JPG"/>

<br/>

Neste exemplo, temos uma função, que recebe como parametro a váriavel **data** que veio do form contendo os valores de (nome, email, cpf e password). E utilizando a api criada anteriormente do axios, realizamos a requisição de **POST** para a rota **/newCustomer**, passando no body da requisição os valores name, email, cpf e password

## Licença
MIT © [@Vitorruan](https://github.com/vitorruann)

## [Voltar](../../README.md)