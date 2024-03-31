// src/controllers/bookController.ts
import { Request, Response } from 'express';
import { Book } from '../models/bookModel';

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const createBook = async (req: Request, res: Response) => {
  const { title, author, isbn, yearOfPublication } = req.body;
  try {
    const book = await Book.create({ title, author, isbn, yearOfPublication }).save();
    res.status(201).json(book);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

// Implement updateBook, deleteBook controllers similarly
