import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import PedalsController from '../controller/PedalController';

const pedalsRouter = Router();
const pedalsController = new PedalsController();

pedalsRouter.use(ensureAuthenticated);

pedalsRouter.post('/', pedalsController.create);

export default pedalsRouter;
