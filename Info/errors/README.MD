# Erros e Validações
Neste local iremos mostrar os possíveis erros e validação referentes aos dados que serão enviados ao backend. Para a validação de dados, utilizamos a lib **Yup**, que implementa funções prontas para garantir que as informações foram passadas corretamente. E os erros são condições que serão avalidadas, como por exemplo, se a senha for digitada incorretamente.

## Error: Validação de dados falhou
Este erro é apresentado quando um dos campos que foi passado para o backend não passou pela validação, abaixo iremos apresentar as validações que serão realizadas.

* **Login**
  
<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/errors/validateStoreLogin.JPG"/>

Como podemos ver na imagen acima, estamos validando se o e-mail que foi passado está no formato de e-mail (EX: exemplo@exemplo.com) e ambos os campos são obrigatórios. Caso a validação de dados falhar, será retornado o erro acima.

* **Criar usuários**
  
<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/errors/validateStoreUser.JPG"/>  


Como podemos ver na imagen acima, estamos validando se o e-mail que foi passado está no formato de e-mail (EX: exemplo@exemplo.com), se a senha tem no mínimo 6 dígitos e todos os campos são obrigatórios. Caso a validação de dados falhar, será retornado o erro acima.

**Obs:** Para os logistas, irá mudar apenas o campo CPF pelo CNPJ.

* **Alterar Usuário**

<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/errors/validateUpdateUser.JPG"/>  


Como podemos ver na imagen acima, estamos validando se o e-mail que foi passado está no formato de e-mail (EX: exemplo@exemplo.com), se a senha antiga tem no mínimo 6 dígitos, caso ela seja passada. Nenhum campo é obrigatório, mas caso a senha antiga for passada, também será necessário passar a nova senha e a confirmação da nova senha, e os campos de senha e confirmação de senha devem ter o mesmo valor e igualmente devem ter no mínimo 6 dígitos. Caso a validação de dados falhar, será retornado o erro acima.

**Obs:** Para os logistas, irá mudar apenas o campo CPF pelo CNPJ.

# Login

### Error: Email não encontrado

<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/errors/validateStoreLoginEmail.JPG"/>

Na parte de login no sistema, o backend realizará uma pesquisa no banco de dados, caso ele não encontre o e-mail que foi passado, será retornado o erro acima.

### Error: Senha incorreta

<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/errors/validateStoreLoginPass.JPG"/>

Na parte de login no sistema, o backend realizará uma pesquisa no banco de dados, e irá comparar se a senha que foi passado bate com a senha que está no banco. A senha é criptografada antes de ser enviada para o banco de dados por motivos de segurança, caso a senha do usúario que possui o e-mail informando junto não bater com a senha que foi passada, será retornado o erro acima.

**Obs:** Este erro pode aparecer na parte de alteração do usuário também, caso a senha informada não bata com a senha do banco.

# Usuários

### Error: Email já cadastrado

<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/errors/validateStoreEmail.JPG"/>

Na parte de criação dos usuários, o backend realizará uma pesquisa no banco de dados, caso ele encontre o e-mail que foi passado, será retornado o erro acima.

### Error: CPF/CNPJ já cadastrado

<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/errors/validateStoreCPF.JPG"/>
<br/>
<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/errors/validateStoreCNPJ.JPG"/>

Na parte de criação dos usuários, o backend realizará uma pesquisa no banco de dados, caso ele encontre o CPF/CNPJ que foi passado, será retornado o erro acima.

### Error: Senha não cadastrada

<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/errors/validateStorePass.JPG"/>

Na parte de criação dos usuários, caso o usuário não passe o valor de senha, será retornado o erro acima.

### Error: Usuário não foi informado

<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/errors/validateShowUser.JPG"/>

Na parte de visualização ou exclusão de usuários, caso o usuário não passe o valor de ID, será retornado o erro acima.

# Promoções

### Error: Mercado não existe ou não foi informado

<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/errors/validateStorePromotionMarket.JPG"/>

Na parte de criação ou visualização de promoções, caso o usuário não passe o valor de ID do mercado que está criando/excluindo a promoção, será retornado o erro acima.

### Error: Promoção não existe ou não foi encontrada

<img src="https://github.com/vitorruann/MeuAtaca-BackEnd/blob/master/Info/errors/validateDestroyPromotion.JPG"/>

Na parte de exclusão de promoções, caso o usuário não passe o valor de ID da promoção ou ela não seja encontrada no banco, será retornado o erro acima.

## Licença
MIT © [@Vitorruan](https://github.com/vitorruann)

## [Voltar](../../README.md)