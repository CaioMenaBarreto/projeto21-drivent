import { prisma } from "@/config"

export async function getHotels() {
    const hotels = await prisma.hotel.findMany();
    return hotels
}

export async function getRooms(hotelId: number){
    const rooms = await prisma.room.findMany({
        where: {
            hotelId: hotelId
        }
    })
}

export async function verifyUserId(userId: number) {
    const user = await prisma.user.findFirst({
        where: {
            id: userId
        }
    });
    return user
}

export async function verifyEnrollment(userId: number) {
    return prisma.enrollment.findFirst({
        where: { userId },
        include: {
            Address: true,
        },
    });
}

export async function verifyTicket(enrollmentId: number) {
    return prisma.ticket.findFirst({
        where: { enrollmentId: enrollmentId }
    });
}

export async function verifyTicketTypeId(ticketTypeId: number) {
    return prisma.ticketType.findFirst({
        where: { id: ticketTypeId }
    });
}

export const hotelsRepository = {
    getHotels,
    verifyUserId,
    verifyTicket,
    verifyEnrollment,
    verifyTicketTypeId,
    getRooms
}