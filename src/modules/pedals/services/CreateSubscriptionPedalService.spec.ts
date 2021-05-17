import AppError from '@shared/errors/AppError';
import FakeSubscriptionPedalRepository from '../repositories/fakes/FakeSubscriptionPedalRepository';
import CreateSubscriptionPedalService from './CreateSubscriptionPedalService';

import FakePedalRepository from '../repositories/fakes/FakePedalRepository';
import CreatePedalService from './CreatePedalService';

let fakeSubscriptionPedalRepository: FakeSubscriptionPedalRepository;
let createSubscriptionPedal: CreateSubscriptionPedalService;

let fakePedalRepository: FakePedalRepository;
let createPedalService: CreatePedalService;


describe('CreateSubscriptionPedal', () => {
   beforeEach(() => {
      fakeSubscriptionPedalRepository = new FakeSubscriptionPedalRepository();
      fakePedalRepository = new FakePedalRepository();

      createSubscriptionPedal = new CreateSubscriptionPedalService(fakeSubscriptionPedalRepository, fakePedalRepository);
      createPedalService = new CreatePedalService(fakePedalRepository);
   });

   it('should not be able to register for an event with the registration limit expired', async () => {
      const subscriptionDate = new Date(2021, 5, 12, 0, 0, 0);

      const pedal = await createPedalService.execute({
         name: 'Pedal legal',
         start_date: new Date(2021, 4, 12, 0, 0, 0),
         start_date_registration: new Date(2021, 4, 1, 0, 0, 0),
         end_date_registration: new Date(2021, 4, 5, 0, 0, 0),
         start_place: 'Capela',
         additional_information: 'Vai ser legal',
         participants_limit: 100
      })

      expect(createSubscriptionPedal.execute({
         ride_id: pedal.id,
         user_id: 'abc123',
         subscription_date: subscriptionDate
      })).rejects.toBeInstanceOf(AppError);
   })

})
