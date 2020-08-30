import UserCustumer from '../models/UserCustomer';

class UserCustomerController {
  async store(req, res) {
    const user = req.body;

    const response = await UserCustumer.create(user)
    return res.json(response);
  }

  async show(req, res) {
    const { id } = req.params;

    const response = await UserCustumer.findById(id);

    return res.json(response);
  }

  async update(req, res) {
    const { id } = req.params;
    const promo = req.body;

    const response = await UserCustumer.findByIdAndUpdate({_id: id}, promo)

    return res.json(response);
  }

  async destroy(req, res) {
    const { id } = req.params;

    const response = await UserCustumer.findByIdAndRemove(id);

    return res.json(response);
  }
}

export default new UserCustomerController();