import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

import User from '@modules/users/infra/typeorm/entities/User';
import { Pedal } from './Pedal';

@Entity('subscriptionPedals')
class SubscriptionPedal {

   @PrimaryColumn()
   readonly id: string;

   @Column()
   ride_id: string;

   @ManyToOne(() => Pedal)
   @JoinColumn({ name: 'ride_id' })
   id_ride: Pedal;

   @Column()
   user_id: string;

   @ManyToOne(() => User)
   @JoinColumn({ name: 'user_id' })
   cyclist: User;

   @Column()
   subscription_date: Date;

   constructor() {
      if (!this.id) {
         this.id = uuid();
      }
   }
}

export { SubscriptionPedal };
