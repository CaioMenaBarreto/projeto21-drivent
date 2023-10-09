import { notFoundError, unauthorizedError } from "@/errors";
import { booksRepository } from "@/repositories/books-repository";
import { Booking } from "@prisma/client";

async function getBooks(userId: number) {
    if(!userId) throw unauthorizedError();
    const book: Booking = await booksRepository.getUser(userId);
    if(!book.userId) throw notFoundError();
    const room = await booksRepository.getRoom(book.roomId)
    const result = {
        "id": book.id,
        "Room": room
    }
    return result;
}

export const booksService = {
    getBooks
}