import UserCustomer from '../models/UserCustomer';
import UserMarket from '../models/UserMarket';
import bcrypt from 'bcryptjs';
import * as Yup from 'yup';
class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validação dos dados falhou" }); 
    }

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
      id,
      name,
      cpf,
      email
    });
  }

  async storeM(req, res) {
    const schema = Yup.object().shape({
      cnpj: Yup.string().required(),
      password: Yup.string().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validação dos dados falho" });
    }

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
      name,
      cnpj
    })
  }
}

export default new SessionController();