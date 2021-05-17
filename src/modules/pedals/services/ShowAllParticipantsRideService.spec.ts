import AppError from '@shared/errors/AppError';
import FakeSubscriptionPedalRepository from '../repositories/fakes/FakeSubscriptionPedalRepository';
import CreateSubscriptionPedalService from './CreateSubscriptionPedalService';

import ShowAllParticipantsRideService from './ShowAllParticipantsRideService';

import FakePedalRepository from '../repositories/fakes/FakePedalRepository';
import CreatePedalService from './CreatePedalService';

import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import CreateUserService from '@modules/users/services/CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUser: CreateUserService;

let fakeSubscriptionPedalRepository: FakeSubscriptionPedalRepository;
let createSubscriptionPedal: CreateSubscriptionPedalService;

let fakePedalRepository: FakePedalRepository;
let createPedalService: CreatePedalService;

let showAllParticipantsRideService: ShowAllParticipantsRideService;

describe('CreateSubscriptionPedal', () => {
   beforeEach(() => {
      fakeSubscriptionPedalRepository = new FakeSubscriptionPedalRepository();
      fakePedalRepository = new FakePedalRepository();

      createSubscriptionPedal = new CreateSubscriptionPedalService(fakeSubscriptionPedalRepository);
      createPedalService = new CreatePedalService(fakePedalRepository);
      showAllParticipantsRideService = new ShowAllParticipantsRideService(fakeSubscriptionPedalRepository);

      fakeUsersRepository = new FakeUsersRepository();
      fakeHashProvider = new FakeHashProvider();
      createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider);
   });

   it('should be able to show the cyclist in a ride', async () => {
      const pedal = await createPedalService.execute({
         name: 'Pedal legal',
         start_date: new Date(2021, 4, 12, 0, 0, 0),
         start_date_registration: new Date(2021, 4, 1, 0, 0, 0),
         end_date_registration: new Date(2021, 4, 5, 0, 0, 0),
         start_place: 'Capela',
         additional_information: 'Vai ser legal',
         participants_limit: 100
      })
      const user = await createUser.execute({
         name: 'John Doe',
         email: 'johndoe@example.com',
         password: '123456'
      });

      const subscribe = await createSubscriptionPedal.execute({
         ride_id: pedal.id,
         user_id: user.id,
         subscription_date: new Date(2021, 4, 4)
      });

      expect(subscribe).toEqual([user.id]);
   })

})
