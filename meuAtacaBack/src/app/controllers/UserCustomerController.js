import UserCustumer from '../models/UserCustomer';
import bcrypt from 'bcryptjs';
import * as Yup from 'yup';

class UserCustomerController {

  // Aplicação Mobile faz uma requisição http do tipo post para o endereço:
  // http://localhost:8050/newCustomer
  // Esssa requisição chega no backend e pelo arquivo "routes" acessa o método "store" do controller de Usuário customer
  // router.post('/newCustomer', UserCustomerController.store);
  // O método store abaixo pega os valores do body da requisição EX:
  // {
  //   "name": "Customer",
  //   "cpf": "777.777.777-77",
  //   "password": "123456",
  //   "email": "customer@teste.com"
  // }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      cpf: Yup.string().required(),
      email: Yup.string().required(),
      password: Yup.string().min(6).required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validação de dados falhou" });
    }

    const { name: nameR , cpf: cpfR, password, email: emailR } = req.body;

    const emailExist = await UserCustumer.findOne({email: emailR});
    const cpfExist = await UserCustumer.findOne({cpf: cpfR});

    if (emailExist) {
      return res.status(400).json({ error: "Email já cadastrado." });
    }

    if (cpfExist) {
      return res.status(400).json({ error: "CPF já cadastrado." });
    }


    if (password) {
      const password_hash = await bcrypt.hash(password, 8);

      const user = {
        name: nameR,
        cpf: cpfR,
        password_hash,
        email: emailR
      }
  
      const response = await UserCustumer.create(user);

      const { _id, name, cpf, email } = response;

      const userCreate = {
        id: _id,
        name,
        cpf,
        email
      }

      return res.json(userCreate);
    
    } else {
      return res.status(400).json(({ erro: "Senha não cadastrada"}));
    }
  }


  // Aplicação Mobile faz uma requisição http do tipo get para o endereço:
  // http://localhost:8050/customer/5f4bec8385268c36e89baef8
  // Esssa requisição chega no backend e pelo arquivo "routes" acessa o método "show" do controller de Usuário customer
  // router.get('/customer/:id', UserCustomerController.show);
  // O método show abaixo pega os valores do id pelo params da requisição EX:
  // EX: "http://localhost:8050/customer/5f4bec8385268c36e89baef8"
  // O método vai procurar o usuário com o ID "5f4bec8385268c36e89baef8"

  async show(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Usuário não foi informado" }); 
    }

    const response = await UserCustumer.findById(id);

    const { _id, name, cpf, email } = response;

    const user = {
      id: _id,
      name,
      cpf,
      email
    }

    return res.json(user);
  }

  // Aplicação Mobile faz uma requisição http do tipo put para o endereço:
  // http://localhost:8050/updateCustomer/5f4bec8385268c36e89baef8
  // Esssa requisição chega no backend e pelo arquivo "routes" acessa o método "update" do controller de Usuário customer
  // router.put('/updateCustomer/:id', UserCustomerController.update);
  // O método update abaixo pega os valores do id pelo params da requisição EX:
  // EX: "http://localhost:8050/updateCustomer/5f4bec8385268c36e89baef8"
  // O método vai procurar o usuário com o ID "5f4bec8385268c36e89baef8" para fazer o update das informações
  // Ele pega as informações contidas no body da requisição para fazer o update
  // {
  //   "name": "Ruan 2"
  // }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      cpf: Yup.string(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when("oldPassword", (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when("password", (password, field) =>
        password ? field.required().oneOf([Yup.ref("password")]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validação de dados falhou" });
    }

    const { id } = req.params;
    const { email: emailR, oldPassword, password, cpf: cpfR } = req.body;

    const userCustomer = await UserCustumer.findById(id);

    if (userCustomer.cpf !== cpfR && cpfR) {
      const cpfExist = await UserCustumer.findOne({cpf: cpfR});

      if (cpfExist) {
        return res.status(400).json({ error: "CPF já cadastrado." });
      }
    }
    
    if (userCustomer.email !== emailR && emailR) {
      const userExist = await UserCustumer.findOne({ email: emailR});
    
      if (userExist) {
        return res.status(400).json({ error: "Email já cadastrado." });
      }
    }

    if (password) {
      const checkPassword = await bcrypt.compare(oldPassword, userCustomer.password_hash);

      if (oldPassword && !(checkPassword)) {
        return res.status(401).json({ error: "Senha incorreta" });
      }  

      const password_hash = await bcrypt.hash(password, 8);

      const userUpdate = {
        ...req.body,
        password_hash
      }

      const response = await UserCustumer.findByIdAndUpdate({_id: id}, userUpdate);

      const { _id, name, cpf, email } = response;

      const user = {
        id: _id,
        name,
        cpf,
        email
      }

      return res.json(user);
    }

    const response = await UserCustumer.findByIdAndUpdate({_id: id}, req.body);

    const { _id, name, cpf, email } = response;

    const user = {
      id: _id,
      name,
      cpf,
      email
    }

    return res.json(user);
  }

  // Aplicação Mobile faz uma requisição http do tipo post para o endereço:
  // http://localhost:8050/deleteCustomer/5f4bd7f3e0a4f42ebc64971a
  // Esssa requisição chega no backend e pelo arquivo "routes" acessa o método "destroy" do controller de Usuário customer
  // router.delete('/deleteCustomer/:id', UserCustomerController.destroy);
  // O método destroy abaixo pega os valores do id pelo params da requisição EX:
  // EX: "http://localhost:8050/deleteCustomer/5f4bd7f3e0a4f42ebc64971a"
  // O método vai procurar o usuário com o ID "5f4bec8385268c36e89baef8" e vai deletar ele.

  async destroy(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Usuário não foi informado" }); 
    }

    const response = await UserCustumer.findByIdAndRemove(id);

    const { _id, name, cpf, email } = response;

    const user = {
      id: _id,
      name,
      cpf,
      email
    }

    return res.json(user);
  }
}

export default new UserCustomerController();