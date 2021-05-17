import { SubscriptionPedal } from '../infra/typeorm/entities/SubscriptionPedal';
import { Pedal } from '../infra/typeorm/entities/Pedal'; //
import ICreateSubscriptionPedalDTO from '../dtos/ICreateSubscriptionPedalDTO';
import ICreatePedalDTO  from '../dtos/ICreatePedalDTO'; //

/* export default interface ISubscriptionPedalRepository {
   create(data: ICreateSubscriptionPedalDTO): Promise<SubscriptionPedal>;
   checkDate(ride_id: string, subscription_date: Date): Promise<boolean>;
} */
export default interface ISubscriptionPedalRepository {
   create(data: ICreateSubscriptionPedalDTO): Promise<SubscriptionPedal>;
   checkDate(ride_id: string, subscription_date: Date): Promise<boolean>;

   createPedal(data: ICreatePedalDTO): Promise<Pedal>;
   findPedal(id: string): Promise<Pedal | undefined>;

   showParticipants(id: string): Promise<string[]>;
}
