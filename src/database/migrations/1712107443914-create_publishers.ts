import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePublishers1712107443914 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'publishers',
            columns: [                  // Cada coluna é declarada como um objeto
                {
                    name: 'id',                         // Nome da coluna
                    type: 'integer',                    // Tipo da coluna
                    unsigned: true,                     // Não tera numero negativo
                    isPrimary: true,                    // Define chave primaria
                    isGenerated: true,                  // Gerada automatica pelo banco de dados
                    generationStrategy: 'increment',    // Auto incremental
                },
                {
                    name: 'name',
                    type: 'varchar',
                    isNullable: false,
                }
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('publishers')
    }

}
