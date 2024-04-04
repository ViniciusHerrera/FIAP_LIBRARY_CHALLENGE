// src/controllers/bookController.ts
import { Request, Response } from 'express';
import AppDataSource from '../database/connection';
import Publisher from '../models/publisherModel';
import Book from '../models/bookModel';
import BookView from '../views/bookView';
import PublisherController from './publisherController';
import { bookSchema } from '../schemas/validators';

class BookController {
  static async getAllBooks(req: Request, res: Response) {
    try {
      const bookRepository = AppDataSource.getRepository(Book);

      const books = await bookRepository.find({ // O método find quando não tem condição, lista tudo
        relations: ['publisher']
      });

      return res.json(BookView.renderMany(books));

    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  };

  static async getBookById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const bookRepository = AppDataSource.getRepository(Book);

      const book = await bookRepository.findOne({
        relations: ['publisher'],
        where: { id: parseInt(id) }
      });

      if (!book) {
        return res.status(404).json({ message: 'Livro não encontrado' });
      }

      return res.json(BookView.render(book));
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  };

  static async createBook(req: Request, res: Response) {
    const { title, author, isbn, yearOfPublication, publisher } = req.body;

    try {

      const data = { title, author, isbn, yearOfPublication, publisher }

      await bookSchema.validate(data, {
        abortEarly: false,
      });

      const publisherExists = await PublisherController.checkIfPublisherExists(publisher);

      if (!publisherExists) {
        return res.status(404).json({ message: 'Editora não encontrada' });
      }

      const bookRepository = AppDataSource.getRepository(Book);

      const book = await bookRepository.create(data).save();

      return res.status(201).json(book);

    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  };

  static async updateBook(req: Request, res: Response) {
    const { id } = req.params;
    const { title, author, isbn, yearOfPublication, publisher } = req.body;

    try {
      const bookRepository = AppDataSource.getRepository(Book);

      let book = await bookRepository.findOne({
        relations: ['publisher'],
        where: { id: parseInt(id) }
      });

      if (!book) {
        return res.status(404).json({ message: 'Livro não encontrado' });
      }

      const publisherExists = await PublisherController.checkIfPublisherExists(publisher);

      if (!publisherExists) {
        return res.status(404).json({ message: 'Editora não encontrada' });
      }

      const data = { title, author, isbn, yearOfPublication, publisher };

      await bookSchema.validate(data, {
        abortEarly: false,
      });

      book.title = title;
      book.author = author;
      book.isbn = isbn;
      book.yearOfPublication = yearOfPublication;
      book.publisher = publisher;

      await bookRepository.save(book);

      book = await bookRepository.findOne({
        relations: ['publisher'],
        where: { id: parseInt(id) }
      });

      if (book) {
        return res.json(BookView.render(book));
      }
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  };

  static async deleteBook(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const bookRepository = AppDataSource.getRepository(Book);

      const book = await bookRepository.findOneBy({ id: parseInt(id) });

      if (!book) {
        return res.status(404).json({ message: 'Livro não encontrado' });
      }

      await bookRepository.remove(book);

      return res.status(204).json();
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  };

  static async publisherHasBooks(publisher: Publisher): Promise<boolean> {
    try {
      const bookRepository = AppDataSource.getRepository(Book);

      const book = await bookRepository.findOneBy({ publisher: publisher });

      return book ? true : false;

    } catch (err: any) {
      throw err;
    }
  };


}

export default BookController;
