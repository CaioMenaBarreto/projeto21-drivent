import { booksService } from '@/services/books-service';
import { booksRepository } from '@/repositories/books-repository';
import httpStatus from 'http-status';
import faker from '@faker-js/faker';

jest.mock('@/repositories/books-repository'); // Substitua pelo caminho real

beforeEach(() => {
    jest.clearAllMocks();
});

describe('GET /booking', () => {
    it('should get booking and room', async () => {
        const mockUserId = faker.datatype.number();
        const mockBooking = {
            id: faker.datatype.number(),
            userId: mockUserId,
            roomId: faker.datatype.number()
        };

        const mockRoom = {
            id: faker.datatype.number(),
            name: faker.lorem.word(),
            capacity: faker.datatype.number(),
            hotelId: faker.datatype.number(),
            // Adicione outras propriedades de acordo com a sua implementação real
        };

        booksRepository.getUser = jest.fn().mockResolvedValueOnce(mockBooking);
        booksRepository.getRoom = jest.fn().mockResolvedValueOnce(mockRoom);

        const result = await booksService.getBooks(mockUserId);

        expect(booksRepository.getUser).toHaveBeenCalledWith(mockUserId);
        expect(booksRepository.getRoom).toHaveBeenCalledWith(mockBooking.roomId);

        expect(result).toEqual({
            id: mockBooking.id,
            Room: mockRoom
        });
    });
});