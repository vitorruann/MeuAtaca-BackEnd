import UserCustumer from '../models/UserCustomer';
import bcrypt from 'bcryptjs';

class UserCustomerController {
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

  async show(req, res) {
    const { id } = req.params;

    const response = await UserCustumer.findById(id);

    return res.json(response);
  }

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