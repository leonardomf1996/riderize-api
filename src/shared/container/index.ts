import { container } from 'tsyringe';

import '@modules/users/providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

import IPedalsRepository from '@modules/pedals/repositories/IPedalRepository';
import PedalsRepository from '@modules/pedals/infra/typeorm/repositories/PedalsRepository';

import ISubscriptionPedalRepository from '@modules/pedals/repositories/ISubscriptionPedalRepository';
import SubscriptionPedalsRepository from '@modules/pedals/infra/typeorm/repositories/SubscriptionPedalsRepository';

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);

container.registerSingleton<IUserTokensRepository>('UserTokensRepository', UserTokensRepository);

container.registerSingleton<IPedalsRepository>('PedalsRepository', PedalsRepository);

container.registerSingleton<ISubscriptionPedalRepository>('SubscriptionPedalsRepository', SubscriptionPedalsRepository);
