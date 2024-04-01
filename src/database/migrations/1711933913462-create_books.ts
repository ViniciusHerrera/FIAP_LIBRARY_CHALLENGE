import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateBooks1711933913462 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'books',
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
                    name: 'title',
                    type: 'varchar',
                },
                {
                    name: 'author',
                    type: 'varchar',
                },
                {
                    name: 'isbn',
                    type: 'varchar',
                    length: '17',
                },
                {
                    name: 'yearOfPublication',
                    type: 'integer',
                }
            ],
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('books')
    }

}
