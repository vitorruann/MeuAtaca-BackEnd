import UserCustomer from '../models/UserCustomer';
import UserMarket from '../models/UserMarket';
import bcrypt from 'bcryptjs';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await UserCustomer.findOne({email: email});

    if (!user) {
      return res.status(401).json({ error: "Usuário não encontrado"});
    }

    const checkPassword = await bcrypt.compare(password, user.password_hash);

    if (!checkPassword) {
      return res.status(401).json({ error: "Senha incorreta"});
    }

    const { id, name, cpf } = user;

    return res.json({
      user: {
        id,
        name,
        cpf,
        email
      }  
    });
  }

  async storeM(req, res) {
    const { cnpj, password } = req.body;

    const userMarket = await UserMarket.findOne({ cnpj: cnpj});

    if (!userMarket) {
      return res.status(401).json({ error: "CNPJ não encontrado"});
    }

    const checkPassword = await bcrypt.compare(password, userMarket.password_hash);

    if (!checkPassword) {
      return res.status(401).json({ error: "Senha incorreta"});
    }

    const { name } = userMarket;

    return res.json({
      userMarket: {
        name,
        cnpj
      }
    })
  }
}

export default new SessionController();