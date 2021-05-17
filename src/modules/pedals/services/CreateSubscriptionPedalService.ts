import { inject, injectable } from 'tsyringe';

import { SubscriptionPedal } from '../infra/typeorm/entities/SubscriptionPedal';
import ISubscriptionPedalRepository from '../repositories/ISubscriptionPedalRepository';

import ICreateSubscriptionPedalDTO from '../dtos/ICreateSubscriptionPedalDTO';

@injectable()
class CreateSubscriptionPedalService {
   constructor(
      /* @inject('PedalRepository')
      private pedalRepository: IPedalRepository, */

      @inject('SubscriptionPedalsRepository')
      private subscriptionPedalsRepository: ISubscriptionPedalRepository,

   ) { }

   public async execute({ ride_id, user_id, subscription_date }: ICreateSubscriptionPedalDTO): Promise<SubscriptionPedal> {
      const { id } = await this.subscriptionPedalsRepository.findPedal(ride_id);
      const pedalId = id; // Para entender melhor o que estou enviando

      /*  const checkSubscribeDate = await this.subscriptionPedalsRepository.checkDate(
          pedalId,
          subscription_date
       );
       if (!checkSubscribeDate) {
          throw new AppError('Registration date has expired')
       } */

      const subscription = await this.subscriptionPedalsRepository.create({
         ride_id: pedalId,
         user_id,
         subscription_date
      });

      return subscription;
   }
}

export default CreateSubscriptionPedalService;
