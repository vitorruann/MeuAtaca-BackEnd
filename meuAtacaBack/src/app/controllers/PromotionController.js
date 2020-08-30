import Promotion from '../models/Promotion';

class PromotionController {
  async store(req, res) {
    const { product, value, quantity, description} = req.body;
    const marketID = req.params.id;

    const promo = {
      product,
      value,
      quantity,
      description,
      marketID
    }

    const response = await Promotion.create(promo);

    return res.json(response);
  }

  async index(req, res) {
    const response = await Promotion.find();

    return res.json(response);
  }

  async show(req, res) {
    const marketID = req.params.id;
    
    const response = await Promotion.find({ marketID })
    
    return res.json(response);
  }

  async destroy(req, res) {
    const { id } = req.params;

    const response = await Promotion.findByIdAndDelete(id);

    return res.json(response);
  }

}

export default new PromotionController();