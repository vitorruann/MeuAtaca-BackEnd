import Promotion from '../models/Promotion';
import UserMarket from '../models/UserMarket';
import * as Yup from 'yup';

class PromotionController {

  // Aplicação WEB faz uma requisição http do tipo post para o endereço:
  // http://localhost:8050/newPromotion/5f4bd9b1a7b27a2ce061b79b
  // Esssa requisição chega no backend e pelo arquivo "routes" acessa o método "store" do controller de promoção
  // router.post('/newPromotion/:id', PromotionController.store);
  // O método stores abaixo pega o id do mercado que está fazendo a criação da promoção pelo params da requisição
  // EX: "http://localhost:8050/newPromotion/5f4bd9b1a7b27a2ce061b79b"
  // e também pega os valores do body da requisição EX:
  // {
  //   "product": "Bolacha",
  //   "value": "10",
  //   "quantity": "3",
  //   "description": "Bolacha salgada"
  // }

  
  async store(req, res) {
    const schema = Yup.object().shape({
      product: Yup.string().required(),
      value: Yup.number().required(),
      quantity: Yup.number().required(),
      description: Yup.string()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Validação dos dados falhou" }); 
    }

    const { product, value, quantity, description } = req.body;
    const marketID = req.params.id;

    if (!marketID) {
      return res.status(400).json({ error: "Mercado não existe ou não foi informado" }); 
    }

    const userMarket = await UserMarket.findById(marketID);

    console.log(userMarket);

    const promocao = {
      product,
      value,
      quantity,
      description,
      marketID,
      marketName: userMarket.name
    }

    const response = await Promotion.create(promocao);

    return res.json(response);
  }

  // Aplicação WEB faz uma requisição http do tipo get para o endereço:
  // http://localhost:8050/allPromotion
  // Esssa requisição chega no backend e pelo arquivo "routes" acessa o método "index" do controller de promoção
  // router.get('/allPromotion', PromotionController.index);
  // O método index recebe a requisição e faz a pesquisa por todas as promoções cadastradas, independente do mercado
  // Retornando todas as promoções criadas

  async index(req, res) {
    const response = await Promotion.find();

    return res.json(response);
  }

  // Aplicação WEB faz uma requisição http do tipo get para o endereço:
  // http://localhost:8050/promotion/5f4bd9b1a7b27a2ce061b79b
  // Esssa requisição chega no backend e pelo arquivo "routes" acessa o método "show" do controller de promoção
  // router.get('/promotion/:id', PromotionController.show);
  // O método show recebe a requisição e faz a pesquisa por todas as promoções cadastradas, independente do mercado
  // Retornando todas as promoções criadas pelo mercado que tem o ID "5f4bd9b1a7b27a2ce061b79b"

  async show(req, res) {
    const marketID = req.params.id;
    
    if (!marketID) {
      return res.status(400).json({ error: "Mercado não existe ou não foi informado" }); 
    }

    const response = await Promotion.find({ marketID })
    
    return res.json(response);
  }

  // Aplicação WEB faz uma requisição http do tipo delete para o endereço:
  // http://localhost:8050/deletePromotion/5f4bdced35cc1d1928a05578
  // Esssa requisição chega no backend e pelo arquivo "routes" acessa o método "destroy" do controller de promoção
  // router.delete('/deletePromotion/:id', PromotionController.destroy);
  // O método destroy recebe a requisição e pega o ID da promoção que deve ser excluida pelo método params
  // EX: "http://localhost:8050/deletePromotion/5f4bdced35cc1d1928a05578"
  // E assim excluindo a pormoção com o ID "5f4bdced35cc1d1928a05578"

  async destroy(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Promoção não existe ou não foi encontrada" }); 
    }

    const response = await Promotion.findByIdAndDelete(id);

    return res.json(response);
  }

}

export default new PromotionController();