import Book from "../models/bookModel";

class BookView {
  static render(book: Book) {
    return {
      id: book.id,
      title: book.title,
      author: book.author,
      isbn: book.isbn,
      yearOfPublication: book.yearOfPublication
    };
  };

  static renderMany(books: Book[]) {
    return books.map(book => this.render(book));
  };
}

export default BookView;