import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreatePedalService from '@modules/pedals/services/CreatePedalService';

export default class PedalController {
   public async create(request: Request, response: Response): Promise<Response> {
      const { name, start_date, start_date_registration, end_date_registration, start_place } = request.body;
      let { additional_information, participants_limit } = request.body;

      if (!additional_information) {
         additional_information = '';
      }
      if (!participants_limit) {
         participants_limit = '';
      }


      const createPedal = container.resolve(CreatePedalService);

      const pedal = await createPedal.execute({
         name,
         start_date,
         start_date_registration,
         end_date_registration,
         start_place,
         additional_information,
         participants_limit
      });

      return response.json(pedal);
   }
}
