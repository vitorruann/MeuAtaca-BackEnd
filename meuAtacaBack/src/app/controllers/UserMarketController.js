import UserMarket from '../models/UserMarket';
import { response } from 'express';

class UserMarketController {
  async store(req, res) {
    const user = req.body;

    const response = await UserMarket.create(user);

    return res.json(response)
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