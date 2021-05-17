import AppError from '@shared/errors/AppError';

import FakePedalRepository from '../repositories/fakes/FakePedalRepository';
import CreatePedalService from './CreatePedalService';

let fakePedalRepository: FakePedalRepository;
let createPedal: CreatePedalService;

describe('CreatePedal', () => {
   beforeEach(() => {
      fakePedalRepository = new FakePedalRepository();
      createPedal = new CreatePedalService(fakePedalRepository);
   });

   it('should be able to create a new pedal', async () => {
      const pedal = await createPedal.execute({
         name: 'Pedalada legal',
         start_date: new Date(2021, 6, 11, 0, 0, 0),
         start_date_registration: new Date(2021, 6, 1, 0, 0, 0),
         end_date_registration: new Date(2021, 6, 2, 0, 0, 0),
         additional_information: 'Vai ser legal',
         participants_limit: 100,
         start_place: 'Mesquita'
      });

      expect(pedal).toHaveProperty('name');
   });
})
