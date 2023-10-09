import faker from '@faker-js/faker';
import { prisma } from '@/config';

export async function createRoom(hotelId: number) {
    return await prisma.room.create({
        data: {
            name: faker.name.findName(),
            capacity: faker.datatype.number(),
            hotelId: hotelId
        },
    });
}

export async function createBooking(roomId: number, userId: number) {
    return await prisma.booking.create({
        data: {
            userId: userId,
            roomId: roomId
        },
    });
}