import { getRepository, Repository } from 'typeorm';

import IPedalsRepository from '@modules/pedals/repositories/IPedalRepository';
import ICreatePedalDTO from '@modules/pedals/dtos/ICreatePedalDTO';

import { Pedal } from '../entities/Pedal';

class PedalsRepository implements IPedalsRepository {
   private ormRepository: Repository<Pedal>;

   constructor() {
      this.ormRepository = getRepository(Pedal);
   }

   public async create({ name, start_date, start_date_registration, end_date_registration, additional_information, start_place, participants_limit }: ICreatePedalDTO): Promise<Pedal> {
      const pedal = this.ormRepository.create({
         name,
         start_date,
         start_date_registration,
         end_date_registration,
         additional_information,
         start_place,
         participants_limit
      });

      await this.ormRepository.save(pedal);

      return pedal;
   }

   public async findPedal(id: string): Promise<Pedal | undefined> {
      const pedal = await this.ormRepository.findOne({
         where: { id }
      });

      return pedal;
   }
}

export default PedalsRepository;
