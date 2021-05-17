import { isAfter, isBefore } from 'date-fns';

import ISubscriptionPedalRepository from '@modules/pedals/repositories/ISubscriptionPedalRepository';
import ICreateSubscriptionPedalDTO from '@modules/pedals/dtos/ICreateSubscriptionPedalDTO';

import { SubscriptionPedal } from '../../infra/typeorm/entities/SubscriptionPedal';
import { Pedal } from '@modules/pedals/infra/typeorm/entities/Pedal';

//
import ICreatePedalDTO from '@modules/pedals/dtos/ICreatePedalDTO';
//

class PedalRepository implements ISubscriptionPedalRepository {
   private subscriptionsPedals: SubscriptionPedal[] = [];
   private pedals: Pedal[] = [];

   public async create({ ride_id, user_id, subscription_date }: ICreateSubscriptionPedalDTO): Promise<SubscriptionPedal> {
      const subscription = new SubscriptionPedal();

      Object.assign(subscription, { ride_id, user_id, subscription_date });

      this.subscriptionsPedals.push(subscription);

      return subscription;
   }

   public async checkDate(ride_id: string, subscription_date: Date): Promise<boolean> {
      const findPedal = this.pedals.find(pedal => pedal.id === ride_id);

      if (isAfter(findPedal.start_date_registration, subscription_date) && isBefore(findPedal.end_date_registration, subscription_date)) {
         return true;
      }

      return false;
   }

   //
   public async createPedal({ name, participants_limit, start_place, additional_information, end_date_registration, start_date_registration, start_date }: ICreatePedalDTO): Promise<Pedal> {
      const pedal = new Pedal();

      Object.assign(pedal, { name, participants_limit, start_place, additional_information, end_date_registration, start_date_registration, start_date });

      this.pedals.push(pedal);

      return pedal;
   }

   public async findPedal(id: string): Promise<Pedal | undefined> {
      const findPedal = this.pedals.find(pedal => pedal.id === id);

      return findPedal;
   }

   public async showParticipants(id: string): Promise<string[]> {
      const users = this.subscriptionsPedals.map(user => {
         return user.user_id;
      })

      return users;
   }
   //
}

export default PedalRepository;
