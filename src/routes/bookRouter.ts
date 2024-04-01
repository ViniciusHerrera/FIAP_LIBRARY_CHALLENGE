import { Router } from 'express';
import BookController from '../controller/bookController';

const router = Router();

router.get('/books', BookController.getAllBooks);
router.post('/books', BookController.createBook);
// router.put('/books/:id', updateBook);
// router.delete('/books/:id', deleteBook);

export default router;