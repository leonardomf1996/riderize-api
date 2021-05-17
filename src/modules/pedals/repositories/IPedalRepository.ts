import { Pedal } from '../infra/typeorm/entities/Pedal';
import ICreatePedalDTO from '../dtos/ICreatePedalDTO';

export default interface IPedalRepository {
   create(data: ICreatePedalDTO): Promise<Pedal>;
   findPedal(id: string): Promise<Pedal | undefined>;
}
