import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity('book')
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  isbn: string;

  @Column()
  yearOfPublication: number;
}