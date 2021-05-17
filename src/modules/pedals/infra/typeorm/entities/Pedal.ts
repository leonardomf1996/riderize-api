import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('pedals')
class Pedal {

   @PrimaryColumn()
   readonly id: string;

   @Column()
   name: string;

   @Column()
   start_date: Date;

   @Column()
   start_date_registration: Date;

   @Column()
   end_date_registration: Date;

   @Column()
   additional_information: string;

   @Column()
   start_place: string;

   @Column()
   participants_limit: number;

   constructor() {
      if (!this.id) {
         this.id = uuid();
      }
   }
}

export { Pedal };
