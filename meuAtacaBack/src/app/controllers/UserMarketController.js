import UserMarket from '../models/UserMarket';
import bcrypt from 'bcryptjs';
class UserMarketController {
  async store(req, res) {
    const { name, cnpj, password} = req.body;

    if (password) {
      const password_hash = await bcrypt.hash(password, 8);

      const userMarket = {
        name,
        cnpj,
        password_hash
      }

      console.log(userMarket);

    const response = await UserMarket.create(userMarket);
    return res.json(response)
    } else {
      return res.status(400).json(({ erro: "Senha não cadastrada"}));
    }
  }

  async index(req, res) {
    const response = await UserMarket.find();

    return res.json(response);
  }

  async show(req, res) {
    const { id } = req.params;

    const response = await UserMarket.findById(id);

    return res.json(response);
  }

  async update(req, res) {
    const { id } = req.params;
    const market = req.body;

    const response = await UserMarket.findByIdAndUpdate({_id: id}, market);

    return res.json(response);
  }

  async destroy(req, res) {
    const { id } = req.params;

    const response = await UserMarket.findByIdAndDelete(id);

    return res.json(response);
  }
}

export default new UserMarketController();