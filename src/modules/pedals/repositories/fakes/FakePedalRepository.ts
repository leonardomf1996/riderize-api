import IPedalRepository from '@modules/pedals/repositories/IPedalRepository';
import ICreatePedalDTO from '@modules/pedals/dtos/ICreatePedalDTO';

import { Pedal } from '../../infra/typeorm/entities/Pedal';

class PedalRepository implements IPedalRepository {
   private pedals: Pedal[] = [];

   public async create({ name, participants_limit, start_place, additional_information, end_date_registration, start_date_registration, start_date }: ICreatePedalDTO): Promise<Pedal> {
      const pedal = new Pedal();

      Object.assign(pedal, { name, participants_limit, start_place, additional_information, end_date_registration, start_date_registration, start_date });

      this.pedals.push(pedal);

      return pedal;
   }

   public async findPedal(id: string): Promise<Pedal | undefined> {
      const findPedal = this.pedals.find(pedal => pedal.id === id);

      return findPedal;
   }
}

export default PedalRepository;
