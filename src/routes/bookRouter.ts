import { Router } from 'express';
import { getAllBooks, createBook } from '../controller/bookController';

const router = Router();

router.get('/books', getAllBooks);
router.post('/books', createBook);
// router.put('/books/:id', updateBook);
// router.delete('/books/:id', deleteBook);

export default router;