import { Router } from 'express';

import UsersController from '../controllers/UsersController';

/* import ensureAuthenticated from '../middlewares/ensureAuthenticated'; */

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post('/', usersController.create);

export default usersRouter;
