import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePedidosTable1616272210206 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'pedidos',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                },
                {
                    name: 'title',
                    type: 'varchar',
                },
                {
                    name: 'formatted_value',
                    type: 'varchar',
                },
                {
                    name: 'status',
                    type: 'varchar',
                },
                {
                    name: 'add_time',
                    type: 'varchar',
                },
                {
                    name: 'update_time',
                    type: 'varchar',
                },
            ],            
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('pedidos')
    }

}
