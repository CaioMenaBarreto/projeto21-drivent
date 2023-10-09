import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { getBooks } from '@/controllers/books-controller';

const booksRouter = Router();

booksRouter
    .all('/*', authenticateToken)
    .get('/booking', getBooks)

export { booksRouter };