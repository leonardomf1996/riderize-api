import { inject, injectable } from 'tsyringe';

import { SubscriptionPedal } from '../infra/typeorm/entities/SubscriptionPedal';
import ISubscriptionPedalRepository from '../repositories/ISubscriptionPedalRepository';

import ICreateSubscriptionPedalDTO from '../dtos/ICreateSubscriptionPedalDTO';
import AppError from '@shared/errors/AppError';

interface IRequest {
   ride_id: string;
}

@injectable()
class ShowAllParticipantsRideService {
   constructor(
      @inject('SubscriptionPedalsRepository')
      private subscriptionPedalsRepository: ISubscriptionPedalRepository,
   ) { }

   public async execute({ ride_id }: IRequest): Promise<string[]> {
      const { id } = await this.subscriptionPedalsRepository.findPedal(ride_id);

      if (!id) {
         throw new AppError('Ride not found!');
      }

      const findUsers = await this.subscriptionPedalsRepository.showParticipants(id);

      if (!findUsers) {
         throw new AppError('Users not found!');
      }

      return findUsers;
   }
}

export default ShowAllParticipantsRideService;
