import Book from "../models/bookModel";
import PublisherView from "./publisherView";

class BookView {
  static render(book: Book) {
    return {
      id: book.id,
      title: book.title,
      author: book.author,
      isbn: book.isbn,
      yearOfPublication: book.yearOfPublication,
      publisher: PublisherView.renderOnly(book.publisher)
    };
  };

  static renderNoPublisher(book: Book) {
    return {
      id: book.id,
      title: book.title,
      author: book.author,
      isbn: book.isbn,
    };
  };

  static renderMany(books: Book[], noPublisher?: boolean) {
    if (noPublisher)
      return books.map(book => this.renderNoPublisher(book));
    else
      return books.map(book => this.render(book));
  };

}

export default BookView;