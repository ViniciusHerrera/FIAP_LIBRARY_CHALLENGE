import IPublisher from "./publisherInterface";

export default interface IBook {
  id: number;
  title: string;
  author: string;
  isbn: string;
  yearOfPublication: number;
  publisher: IPublisher;
}