import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinColumn, ManyToOne } from "typeorm";
import Publisher from "./publisherModel";
import IBook from "../interface/bookInterface";

@Entity('books')
export default class Book extends BaseEntity implements IBook {
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

  @ManyToOne(() => Publisher, publisher => publisher.books)
  @JoinColumn({ name: 'publisher_id' })
  publisher: Publisher;
}