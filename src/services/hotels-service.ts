import { notFoundError, paymentError, unauthorizedError } from "@/errors";
import { Hotels } from "@/protocols";
import { hotelsRepository } from "@/repositories/hotels-repository";
import { Booking, Room } from "@prisma/client";

async function getHotels(userId: number) {
    const user = await hotelsRepository.verifyUserId(userId);
    if (!user) throw unauthorizedError();

    const enrollment = await hotelsRepository.verifyEnrollment(userId);

    const ticket = await hotelsRepository.verifyTicket(enrollment.id);
    const hotels: Hotels = await hotelsRepository.getHotels();
    if (!enrollment || !ticket || hotels.length === 0) throw notFoundError();

    const ticketTypeId = await hotelsRepository.verifyTicketTypeId(ticket.ticketTypeId);

    if (ticket.status === "RESERVED" || ticketTypeId.isRemote === true || ticketTypeId.includesHotel === false) throw paymentError();

    return hotels;
}

async function getHotelsById(hotelId: number, userId: number) {
    const user = await hotelsRepository.verifyUserId(userId);
    if (!user) throw unauthorizedError();

    const enrollment = await hotelsRepository.verifyEnrollment(userId);

    const ticket = await hotelsRepository.verifyTicket(enrollment.id);
    const hotels: Hotels = await hotelsRepository.getHotels();
    if (!enrollment || !ticket || hotels.length === 0) throw notFoundError();

    const ticketTypeId = await hotelsRepository.verifyTicketTypeId(ticket.ticketTypeId);
    if (ticket.status === "RESERVED" || ticketTypeId.isRemote === true || ticketTypeId.includesHotel === false) throw paymentError();
    const rooms = await hotelsRepository.getRooms(hotelId);
    return rooms;
}

const hotelsService = {
    getHotels,
    getHotelsById
};

export default hotelsService;