import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1648738624611 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'usuarios',
                columns: [
                    {
                        name: 'id',
                        type: 'string',
                        isPrimary: true,
                        isNullable: false
                    },
                    {
                        name: 'name',
                        type: 'string',
                        isNullable: false
                    },
                    {
                        name: 'email',
                        type: 'string',
                        isNullable: true
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('usuarios')
    }

}
