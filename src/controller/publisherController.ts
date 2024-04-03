// src/controllers/bookController.ts
import { Request, Response } from 'express';
import AppDataSource from '../database/connection';
import Publisher from '../models/publisherModel';
import PublisherView from '../views/publisherView';
import { publisherSchema } from '../schemas/validators';

class PublisherController {
  static async getAllPublishers(req: Request, res: Response) {
    try {
      const publisherRepository = AppDataSource.getRepository(Publisher);

      const publishers = await publisherRepository.find();

      return res.json(PublisherView.renderMany(publishers));

    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  };

  static async getPublisherById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const publisherRepository = AppDataSource.getRepository(Publisher);

      const publisher = await publisherRepository.findOneBy({ id: parseInt(id) });

      if (!publisher) {
        return res.status(404).json({ message: 'Editora não encontrad' });
      }

      return res.json(PublisherView.render(publisher));
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  };

  static async createPublisher(req: Request, res: Response) {
    const { name, books } = req.body;

    try {

      const data = { name }

      await publisherSchema.validate(data, { abortEarly: false });

      const publisherRepository = AppDataSource.getRepository(Publisher);

      const publisher = await publisherRepository.create(data).save();

      return res.status(201).json(publisher);

    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  };

  // static async updatePublisher(req: Request, res: Response) {
  //   const { id } = req.params;
  //   const { title, author, isbn, yearOfPublication } = req.body;

  //   try {
  //     const publisherRepository = AppDataSource.getRepository(Publisher);

  //     const publisher = await publisherRepository.findOneBy({ id: parseInt(id) });

  //     if (!publisher) {
  //       return res.status(404).json({ message: 'Livro não encontrado' });
  //     }

  //     const data = { title, author, isbn, yearOfPublication };

  //     await schema.validate(data, {
  //       abortEarly: false,
  //     });

  //     book.title = title;
  //     book.author = author;
  //     book.isbn = isbn;
  //     book.yearOfPublication = yearOfPublication;

  //     await publisherRepository.save(publisher);

  //     return res.json(PublisherView.render(publisher));
  //   } catch (err: any) {
  //     return res.status(400).json({ message: err.message });
  //   }
  // };

  static async deletePublisher(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const publisherRepository = AppDataSource.getRepository(Publisher);

      const publisher = await publisherRepository.findOneBy({ id: parseInt(id) });

      if (!publisher) {
        return res.status(404).json({ message: 'Livro não encontrado' });
      }

      await publisherRepository.remove(publisher);

      return res.status(204).json();
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  };
}

export default PublisherController;
