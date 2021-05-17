import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import pedalsRouter from '@modules/pedals/infra/http/routes/pedals.routes';
import subscriptionsPedalsRouter from '@modules/pedals/infra/http/routes/subscriptionsPedals.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/pedals', pedalsRouter);
routes.use('/subscriptionPedals', subscriptionsPedalsRouter);

export default routes;
