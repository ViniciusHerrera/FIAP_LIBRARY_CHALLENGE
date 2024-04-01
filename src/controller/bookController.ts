// src/controllers/bookController.ts
import AppDataSource from '../database/connection';
import { Request, Response } from 'express';
import Book from '../models/bookModel';
import BookView from '../views/bookView';

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

  static async createBook(req: Request, res: Response) {
    const { title, author, isbn, yearOfPublication } = req.body;

    try {
      const bookRepository = AppDataSource.getRepository(Book);

      const book = await bookRepository.create({ title, author, isbn, yearOfPublication }).save();

      return res.status(201).json(book);

    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  };

}

export default BookController;
