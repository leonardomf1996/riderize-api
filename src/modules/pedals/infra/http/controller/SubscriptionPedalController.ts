import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateSubscriptionPedalService from '@modules/pedals/services/CreateSubscriptionPedalService';
import ShowAllParticipantsRideService from '@modules/pedals/services/ShowAllParticipantsRideService';

export default class SubscriptionPedalController {
   public async create(request: Request, response: Response): Promise<Response> {
      const { ride_id, user_id } = request.body;
      const subscription_date = new Date();

      const createSubscriptionPedal = container.resolve(CreateSubscriptionPedalService);

      const subscription = await createSubscriptionPedal.execute({
         ride_id,
         user_id,
         subscription_date
      });

      return response.json(subscription);
   }
   public async showUsers(request: Request, response: Response): Promise<Response> {
      const { ride_id } = request.body;

      const showAllParticipantsRide = container.resolve(ShowAllParticipantsRideService);

      const findUsers = await showAllParticipantsRide.execute({
         ride_id
      });

      return response.json(findUsers);
   }
}
