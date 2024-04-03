import { Router } from 'express';
import PublisherController from '../controller/publisherController';

const router = Router();

router.get('/publisher', PublisherController.getAllPublishers);
router.get('/publisher/:id', PublisherController.getPublisherById);
router.post('/publisher', PublisherController.createPublisher);
router.put('/publisher/:id', PublisherController.updatePublisher);
router.delete('/publisher/:id', PublisherController.deletePublisher);

export default router;