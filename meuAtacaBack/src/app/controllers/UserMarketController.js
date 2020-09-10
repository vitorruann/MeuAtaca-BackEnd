import UserMarket from '../models/UserMarket';
import bcrypt from 'bcryptjs';
import * as Yup from 'yup';
class UserMarketController {
  async store(req, res) {
    const {name: nameR, cnpj: cnpjR , password: passwordR} = req.body;

    if (nameR !== undefined) {
      if (nameR.trim() === "") {
        delete req.body.name;
      }
    }
    if (cnpjR !== undefined) {
      if (cnpjR.trim() === "") {
        delete req.body.cnpj;
      }  
    }
    if (passwordR !== undefined) {
      if (passwordR.trim() === "") {
        delete req.body.password;
      }  
    }

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      cnpj: Yup.string().required(),
      password: Yup.string().min(6).required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validação de dados falhou" });
    }


    const cnpjExist = await UserMarket.findOne({cnpj: cnpjR});

    if (cnpjExist) {
      return res.status(400).json({ error: "CNPJ já cadastrado." });
    }

    const password_hash = await bcrypt.hash(passwordR, 8);

    const addUser = {
      name: nameR,
      cnpj: cnpjR,
      password_hash
    }

    const response = await UserMarket.create(addUser);

    const { _id, name , cnpj } = response;

    const userMarket = {
      id: _id,
      name,
      cnpj
    };
    
    return res.json(userMarket)
  }

  async index(req, res) {
    const response = await UserMarket.find();

    const allMarkets = response.map(r => ({
      id: r._id,
      name: r.name,
      cnpj: r.cnpj,
    }));

    
    return res.json(allMarkets);
  }

  async show(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Usuário mercado não foi informado" }); 
    }

    const response = await UserMarket.findById(id);

    const { _id, name, cnpj } =  response;

    const userMarket = {
      id: _id,
      name,
      cnpj
    }

    return res.json(userMarket);
  }

  async update(req, res) {
    const { name: nameR, cnpj: cnpjR , password: passwordR, oldPassword } = req.body;

    if (nameR !== undefined) {
      if (nameR.trim() === "") {
        delete req.body.name;
      }
    }
    if (cnpjR !== undefined) {
      if (cnpjR.trim() === "") {
        delete req.body.cnpj;
      }  
    }
    if (oldPassword !== undefined) {
      if (oldPassword.trim() === "") {
        delete req.body.oldPassword;
      }  
    }
    if (passwordR !== undefined) {
      if (passwordR.trim() === "") {
        delete req.body.password;
      }  
    }

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

    const userReturn = await UserMarket.findById(id);


    if (cnpjR !== userReturn.cnpj && cnpjR) {
      const cnpjExist = await UserMarket.findOne({cnpj: cnpjR});
      
      if (cnpjExist) {

        return res.status(400).json({ error: "CNPJ já cadastrado." });
      }  
    }

    if (passwordR && oldPassword) {
      const checkPassword = await bcrypt.compare(oldPassword, userReturn.password_hash);

      if (oldPassword && !(checkPassword)) {
        return res.status(401).json({ error: "Senha incorreta" });
      }  

      const password_hash = await bcrypt.hash(passwordR, 8);

      const userUpdate = {
        ...req.body,
        password_hash
      }

      const response = await UserMarket.findByIdAndUpdate({_id: id}, userUpdate);

      const { _id, name, cnpj } = response;

      const userMarket = {
        id: _id,
        name,
        cnpj
      }

      return res.json(userMarket);
    }

    const response = await UserMarket.findByIdAndUpdate({_id: id}, req.body);

    const { _id, name, cnpj } = response;

      const userMarket = {
        id: _id,
        name,
        cnpj
      }

      return res.json(userMarket);
  }

  async destroy(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Usuário mercado não foi informado" }); 
    }

    const response = await UserMarket.findByIdAndDelete(id);

    const { _id, name, cnpj } = response;

    const userDeleted = {
      id: _id,
      name,
      cnpj
    }

    return res.json(userDeleted);
  }
}

export default new UserMarketController();