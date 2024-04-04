import { Router } from 'express';
import PublisherController from '../controller/publisherController';

const router = Router();

router.get('/publishers', PublisherController.getAllPublishers);
router.get('/publishers/:id', PublisherController.getPublisherById);
router.post('/publishers', PublisherController.createPublisher);
router.put('/publishers/:id', PublisherController.updatePublisher);
router.delete('/publishers/:id', PublisherController.deletePublisher);

export default router;