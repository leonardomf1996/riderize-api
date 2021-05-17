import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePedal1620744210013 implements MigrationInterface {

   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
         new Table({
            name: 'pedals',
            columns: [
               {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
                  generationStrategy: 'uuid',
                  default: 'uuid_generate_v4()',
               },
               {
                  name: 'name',
                  type: 'varchar',
               },
               {
                  name: 'start_date',
                  type: 'timestamp',
               },
               {
                  name: 'start_date_registration',
                  type: 'timestamp',
               },
               {
                  name: 'end_date_registration',
                  type: 'timestamp',
               },
               {
                  name: 'additional_information',
                  type: 'varchar',
                  isNullable: true
               },
               {
                  name: 'start_place',
                  type: 'varchar'
               },
               {
                  name: 'participants_limit',
                  type: 'integer',
                  isNullable: true
               },
            ]
         })
      )
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('pedals');
   }

}
