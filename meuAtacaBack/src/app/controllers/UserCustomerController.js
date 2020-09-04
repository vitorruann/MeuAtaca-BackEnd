import UserCustumer from '../models/UserCustomer';
import bcrypt from 'bcryptjs';

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
  

  async update(req, res) {
    const { id } = req.params;
    const user = req.body;

    const response = await UserCustumer.findByIdAndUpdate({_id: id}, user)

    return res.json(response);
  }

  async destroy(req, res) {
    const { id } = req.params;

    const response = await UserCustumer.findByIdAndRemove(id);

    return res.json(response);
  }
}

export default new UserCustomerController();