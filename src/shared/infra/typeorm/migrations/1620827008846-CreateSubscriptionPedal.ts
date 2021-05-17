import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateSubscriptionPedal1620827008846 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
         new Table({
            name: 'subscriptionPedals',
            columns: [
               {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
                  generationStrategy: 'uuid',
                  default: 'uuid_generate_v4()',
               },
               {
                  name: 'ride_id',
                  type: 'uuid',
               },
               {
                  name: 'user_id',
                  type: 'uuid',
               },
               {
                  name: 'subscription_date',
                  type: 'timestamp',
                  default: 'now()'
               }
            ]
         })
      );

      await queryRunner.createForeignKey('subscriptionPedals', new TableForeignKey({
         name: 'subscriptionPedalsFK',
         columnNames: ['user_id'],
         referencedColumnNames: ['id'],
         referencedTableName: 'users',
         onDelete: 'SET NULL',
         onUpdate: 'CASCADE',
      }));
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('subscriptionPedals', 'subscriptionPedalsFK');
      await queryRunner.dropTable('subscriptionPedals');
   }

}
