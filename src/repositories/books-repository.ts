import { prisma } from '@/config';

async function getUser(userId: number) {
    return prisma.booking.findFirst({
        where: {
            userId: userId
        }
    });
}

async function getRoom(roomId: number){
    return prisma.room.findFirst({
        where: {
            id: roomId
        }
    });
}

export const booksRepository = {
    getUser,
    getRoom
}