# Manter Usuário final

Neste local iremos mostrar com exemplos **práticos** como realizar **requisições** para o backend e como deverá ser as **respostas**. Este local é exclusivo para as rotas de **usuário final**, que inicialmente será feito na plataforma Mobile.

## Rota para criação de usuários

### Axios

Utilizado para criar a URL para acesso ao BACKEND.

Axios é um cliente HTTP, que funciona tanto no browser quanto em node.js. A biblioteca é basicamente uma API que sabe interagir tanto com XMLHttpRequest quanto com a interface http do node.

**Comando para instalção**: yarn add axios

**Exemplo** de criação da base URL para as requisições que serão realizadas para o backend:

<br/>

<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/userCustomer/axios.JPG"/>


Neste caso estamos exportando por default a api. Então, quando formos usar, precisaramos importar.

## Criar usuário
### Exemplo de uma requisição(req) do tipo **POST** para a criação de um usuário e a resposta (res) do backend utilizando Insomnia

<br/>

<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/userCustomer/InsominiaReqRes.JPG"/>

<br/>

Aqui estamos fazendo a requsição para a rota **/newCustomer**, e passando no body da requsição um JSON com as informações de (nome, cpf, password e senha)

### Exemplo de uma requisição(req) do tipo **POST** para a criação de um usuário e a resposta (res) do backend utilizando Axios

<br/>

<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/userCustomer/RequiPostCriar.JPG"/>

<br/>

Neste exemplo, temos uma função, que recebe como parametro a váriavel **data** que veio do form contendo os valores de (nome, email, cpf e password). E utilizando a api criada anteriormente do axios, realizamos a requisição de **POST** para a rota **/newCustomer**, passando no body da requisição os valores name, email, cpf e password

[Voltar](../../README.md)