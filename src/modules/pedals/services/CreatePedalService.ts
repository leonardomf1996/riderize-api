import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import { Pedal } from '../infra/typeorm/entities/Pedal';
import IPedalRepository from '../repositories/IPedalRepository';

import ICreatePedalDTO from '../dtos/ICreatePedalDTO';

@injectable()
class CreatePedalService {
   constructor(
      @inject('PedalsRepository')
      private pedalsRepository: IPedalRepository,
   ) { }

   public async execute({ name, start_date, start_date_registration, end_date_registration, additional_information, start_place, participants_limit }: ICreatePedalDTO): Promise<Pedal> {
      const pedal = await this.pedalsRepository.create({
         name,
         start_date,
         start_date_registration,
         end_date_registration,
         additional_information,
         start_place,
         participants_limit
      });

      return pedal;
   }
}

export default CreatePedalService;
