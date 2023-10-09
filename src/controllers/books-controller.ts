import { Response } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';
import { booksService } from '@/services/books-service';

export async function getBooks(req: AuthenticatedRequest, res: Response) {
    const { userId } = req;
    const books = await booksService.getBooks(userId);
    res.status(httpStatus.OK).send(books);
}
