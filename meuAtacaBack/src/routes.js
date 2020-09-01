import { Router } from 'express';
import UserCustomerController from './app/controllers/UserCustomerController';  
import UserMarketController from './app/controllers/UserMarketController';  
import PromotionController from './app/controllers/PromotionController';  
import SessionController from './app/controllers/SessionController';  

const router = new Router();

router.post('/newCustomer', UserCustomerController.store);
router.post('/newMarket', UserMarketController.store);
router.post('/sessions', SessionController.store);
router.post('/sessionsMarket', SessionController.storeM);

router.get('/customer/:id', UserCustomerController.show);
router.put('/updateCustomer/:id', UserCustomerController.update);
router.delete('/deleteCustomer/:id', UserCustomerController.destroy);

router.get('/allMarket', UserMarketController.index);
router.get('/market/:id', UserMarketController.show);
router.put('/updateMarket/:id', UserMarketController.update);
router.delete('/deleteMarket/:id', UserMarketController.destroy);

router.post('/newPromotion/:id', PromotionController.store);
router.get('/allPromotion', PromotionController.index);
router.get('/promotion/:id', PromotionController.show);
router.delete('/deletePromotion/:id', PromotionController.destroy);

export default router;
