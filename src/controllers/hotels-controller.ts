import hotelsService from '@/services/hotels-service';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';
import { hotelsRepository } from '@/repositories/hotels-repository';

export async function getHotels(req: AuthenticatedRequest, res: Response){
    const { userId } = req;
    const hotels = await hotelsService.getHotels(userId);
    res.status(httpStatus.OK).send(hotels);
}

export async function getHotelsById(req: AuthenticatedRequest, res: Response){
    const { userId } = req;
    const hotelId = parseInt(req.params.hotelId);
    const rooms = await hotelsService.getHotelsById(hotelId, userId);
    res.status(httpStatus.OK).send(rooms);
}