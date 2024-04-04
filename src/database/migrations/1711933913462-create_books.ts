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
                    isNullable: false,
                },
                {
                    name: 'author',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'isbn',
                    type: 'varchar',
                    length: '17',
                    isNullable: false,
                },
                {
                    name: 'yearOfPublication',
                    type: 'integer',
                    isNullable: false,
                },
                {
                    name: 'publisher_id',
                    type: 'integer',
                    isNullable: false,
                }
            ],
            foreignKeys: [                                   // Criação da chave estrangeira
                {
                    name: 'FK_book_publisher',                  // Nome da chave estrangeira
                    columnNames: ['publisher_id'],          // Coluna que ela se referencia na tabela atual
                    referencedTableName: 'publishers',      // Tabela referenciada
                    referencedColumnNames: ['id'],          // Coluna da tabela referenciada
                    onUpdate: 'CASCADE',                    // Quando houver uma atualização de id na tabela orfanatos, aqui será atualizado
                    onDelete: 'CASCADE',                    // Quando houver um delete na tabela orfanatos, aqui será deletado
                }
            ]
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('books')
    }

}
