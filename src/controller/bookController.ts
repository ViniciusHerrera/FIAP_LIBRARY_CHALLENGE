// src/controllers/bookController.ts
import { Request, Response } from 'express';
import AppDataSource from '../database/connection';
import Book from '../models/bookModel';
import BookView from '../views/bookView';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  title: Yup.string().required('Titulo obrigatório'),
  author: Yup.string().required('Autor Obrigatorio'),
  isbn: Yup.string().required('Isbn é obrigatório').max(17, 'Tamanho máximo permitido para o isbn é 17 caracteres'),
  yearOfPublication: Yup.number().required('Data de publicação é obrigatorio'),
});

class BookController {
  static async getAllBooks(req: Request, res: Response) {
    try {
      const bookRepository = AppDataSource.getRepository(Book);

      const books = await bookRepository.find();

      return res.json(BookView.renderMany(books));

    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  };

  static async getBookById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const bookRepository = AppDataSource.getRepository(Book);

      const book = await bookRepository.findOneBy({ id: parseInt(id) });

      if (!book) {
        return res.status(404).json({ message: 'Livro não encontrado' });
      }

      return res.json(BookView.render(book));
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }

  static async createBook(req: Request, res: Response) {
    const { title, author, isbn, yearOfPublication } = req.body;

    try {

      const data = { title, author, isbn, yearOfPublication }

      await schema.validate(data, {
        abortEarly: false,
      });

      const bookRepository = AppDataSource.getRepository(Book);

      const book = await bookRepository.create(data).save();

      return res.status(201).json(book);

    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  };

  static async updateBook(req: Request, res: Response) {
    const { id } = req.params;
    const { title, author, isbn, yearOfPublication } = req.body;

    try {
      const bookRepository = AppDataSource.getRepository(Book);

      const book = await bookRepository.findOneBy({ id: parseInt(id) });

      if (!book) {
        return res.status(404).json({ message: 'Livro não encontrado' });
      }

      const data = { title, author, isbn, yearOfPublication };

      await schema.validate(data, {
        abortEarly: false,
      });

      book.title = title;
      book.author = author;
      book.isbn = isbn;
      book.yearOfPublication = yearOfPublication;

      await bookRepository.save(book);

      return res.json(BookView.render(book));
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
}

export default BookController;
