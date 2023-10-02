import faker from "@faker-js/faker";
import { prisma } from '@/config';

export async function createHotel() {
    return prisma.hotel.create({
        data: {
            name: faker.lorem.word(),
            image: faker.image.imageUrl()
        },
    });
}

export async function createRooms(hotelId: number) {
    return prisma.room.create({
        data: {
            name: faker.lorem.word(),
            capacity: faker.datatype.number(),
            hotelId: hotelId,
            
        }
    })
}

export async function getHotelTest(){
    const hotels: [] = []
    return hotels
}

export async function getTicketTest(){
    const ticket: undefined = undefined;
    return ticket;
}