import IBook from "./bookInterface";

export default interface IPublisher {
  id: number;
  name: string;
  books: IBook[];
}