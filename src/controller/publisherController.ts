// src/controllers/bookController.ts
import { Request, Response } from 'express';
import AppDataSource from '../database/connection';
import Publisher from '../models/publisherModel';
import PublisherView from '../views/publisherView';
import { publisherSchema } from '../schemas/validators';
import BookController from './bookController';

class PublisherController {
  static async getAllPublishers(req: Request, res: Response) {
    try {
      const publisherRepository = AppDataSource.getRepository(Publisher);

      const publishers = await publisherRepository.find({ // O método find quando não tem condição, lista tudo
        relations: ['books']
      });

      return res.json(PublisherView.renderMany(publishers));

    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  };

  static async getPublisherById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const publisherRepository = AppDataSource.getRepository(Publisher);

      const publisher = await publisherRepository.findOne({
        relations: ['books'],
        where: { id: parseInt(id) }
      });

      if (!publisher) {
        return res.status(404).json({ message: 'Editora não encontrad' });
      }

      return res.json(PublisherView.render(publisher));
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  };

  static async createPublisher(req: Request, res: Response) {
    const { name } = req.body;

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

  static async updatePublisher(req: Request, res: Response) {
    const { id } = req.params;
    const { name } = req.body;

    try {
      const publisherRepository = AppDataSource.getRepository(Publisher);

      const publisher = await publisherRepository.findOne({
        relations: ['books'],
        where: { id: parseInt(id) }
      });

      if (!publisher) {
        return res.status(404).json({ message: 'Editora não encontrada' });
      }

      const data = { name };

      await publisherSchema.validate(data, { abortEarly: false });

      publisher.name = name;

      await publisherRepository.save(publisher);

      return res.json(PublisherView.render(publisher));
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  };

  static async deletePublisher(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const publisherRepository = AppDataSource.getRepository(Publisher);

      const publisher = await publisherRepository.findOneBy({ id: parseInt(id) });

      if (!publisher) {
        return res.status(404).json({ message: 'Livro não encontrado' });
      }

      const publisherHasBooks = await BookController.publisherHasBooks(publisher);
      if (publisherHasBooks) {
        return res.status(405).json({ message: 'Editora possui livros atrelados' });
      }

      await publisherRepository.remove(publisher);

      return res.status(204).json();
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  };

  static async checkIfPublisherExists(id: number): Promise<boolean> {
    try {
      const publisherRepository = AppDataSource.getRepository(Publisher);

      const publisher = await publisherRepository.findOneBy({ id: id });

      return publisher ? true : false;

    } catch (err: any) {
      throw err;
    }
  };
}

export default PublisherController;
