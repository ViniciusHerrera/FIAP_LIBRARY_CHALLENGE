import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, JoinColumn } from "typeorm";
import Book from "./bookModel";
import IPublisher from "../interface/publisherInterface";

@Entity('publishers')
export default class Publisher extends BaseEntity implements IPublisher {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Book, book => book.publisher, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'publisher_id' }) // Specifies
  books: Book[];

}