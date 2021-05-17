import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import SubscriptionPedalController from '../controller/SubscriptionPedalController';

const subscriptionPedalsRouter = Router();
const subscriptionPedalController = new SubscriptionPedalController();

subscriptionPedalsRouter.use(ensureAuthenticated);

subscriptionPedalsRouter.post('/', subscriptionPedalController.create);
subscriptionPedalsRouter.get('/', subscriptionPedalController.showUsers);

export default subscriptionPedalsRouter;
