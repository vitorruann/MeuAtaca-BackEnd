import UserMarket from '../models/UserMarket';
import bcrypt from 'bcryptjs';
import * as Yup from 'yup';
class UserMarketController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      cnpj: Yup.string().required(),
      password: Yup.string().min(6).required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validação de dados falhou" });
    }

    const { name, cnpj, password} = req.body;

    const cnpjExist = await UserMarket.find({cnpj: cnpj});

    if (cnpjExist) {
      return res.status(400).json({ error: "CNPJ já cadastrado." });
    }

    const password_hash = await bcrypt.hash(password, 8);

    const userMarket = {
      name,
      cnpj,
      password_hash
    }

    const response = await UserMarket.create(userMarket);
    return res.json(response)
  }

  async index(req, res) {
    const response = await UserMarket.find();

    return res.json(response);
  }

  async show(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Usuário mercado não foi informado" }); 
    }

    const response = await UserMarket.findById(id);

    return res.json(response);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      cnpj: Yup.string(),
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
    const { cnpj, password, oldPassword } = req.body;

    const userMarket = await UserMarket.findById(id);


    if (cnpj !== userMarket.cnpj && cnpj) {
      const cnpjExist = await UserMarket.findOne({cnpj: cnpj});
      
      if (cnpjExist) {

        return res.status(400).json({ error: "CNPJ já cadastrado." });
      }  
    }

    if (password) {
      const checkPassword = await bcrypt.compare(oldPassword, userMarket.password_hash);

      if (oldPassword && !(checkPassword)) {
        return res.status(401).json({ error: "Senha incorreta" });
      }  

      const password_hash = await bcrypt.hash(password, 8);

      const userUpdate = {
        ...req.body,
        password_hash
      }

      const response = await UserMarket.findByIdAndUpdate({_id: id}, userUpdate);
      return res.json(response);
    }

    const response = await UserMarket.findByIdAndUpdate({_id: id}, req.body);

    return res.json(response);
  }

  async destroy(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Usuário mercado não foi informado" }); 
    }

    const response = await UserMarket.findByIdAndDelete(id);

    return res.json(response);
  }
}

export default new UserMarketController();