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
    const { name, cpf, password, email } = req.body;

    if (password) {
      const password_hash = await bcrypt.hash(password, 8);

      const user = {
        name,
        cpf,
        password_hash,
        email
      }
  
      const response = await UserCustumer.create(user)
      return res.json(response);
    
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

    const response = await UserCustumer.findById(id);

    return res.json(response);
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
    const { email, oldPassword, password } = req.body;

    const userCustomer = await UserCustumer.findById(id);
    
    if (userCustomer.email !== email && email) {
      const userExist = await UserCustumer.find({ email: email});
    
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
      console.log("a")
      const response = await UserCustumer.findByIdAndUpdate({_id: id}, userUpdate);

      return res.json(response);
    }

    const response = await UserCustumer.findByIdAndUpdate({_id: id}, req.body);

    return res.json(response);
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

    const response = await UserCustumer.findByIdAndRemove(id);

    return res.json(response);
  }
}

export default new UserCustomerController();