import User from '../models/Usuario';

class UserController {
  async store(req, res) {
    const usua = req.body;

    const response = await User.create(usua)
    return res.json(response);
  }
}

export default new UserController();