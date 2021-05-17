import { getRepository, Repository } from 'typeorm';

import ISubscriptionPedalRepository from '@modules/pedals/repositories/ISubscriptionPedalRepository';
import ICreateSubscriptionPedalDTO from '@modules/pedals/dtos/ICreateSubscriptionPedalDTO';
import { SubscriptionPedal } from '../entities/SubscriptionPedal';
import { Pedal } from '../entities/Pedal';

import { isAfter, isBefore } from 'date-fns';

//

import ICreatePedalDTO from '@modules/pedals/dtos/ICreatePedalDTO';

//

class SubscriptionPedalsRepository implements ISubscriptionPedalRepository {
   private ormRepository: Repository<SubscriptionPedal>;
   private ormRepositoryPedal: Repository<Pedal>;

   constructor() {
      this.ormRepository = getRepository(SubscriptionPedal);
      this.ormRepositoryPedal = getRepository(Pedal);
   }

   public async create({ ride_id, user_id, subscription_date }: ICreateSubscriptionPedalDTO): Promise<SubscriptionPedal> {
      const subscription = this.ormRepository.create({
         ride_id,
         user_id,
         subscription_date
      });

      await this.ormRepository.save(subscription);

      return subscription;
   }
   public async checkDate(ride_id: string, subscription_date: Date): Promise<boolean> {
      const pedal = await this.ormRepositoryPedal.findOne({
         where: { ride_id }
      })

      if (isAfter(pedal.start_date_registration, subscription_date) && isBefore(pedal.end_date_registration, subscription_date)) {
         return true;
      }

      return false;
   }

   //
   public async createPedal({ name, start_date, start_date_registration, end_date_registration, additional_information, start_place, participants_limit }: ICreatePedalDTO): Promise<Pedal> {
      const pedal = this.ormRepositoryPedal.create({
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
      const pedal = await this.ormRepositoryPedal.findOne({
         where: { id }
      });

      return pedal;
   }
   public async showParticipants(id: string): Promise<string[]> {
      const all = await this.ormRepository.find();
      const users = all.map(user => {
         return user.user_id;
      })

      return users;
   }
   //
}

export default SubscriptionPedalsRepository;
