import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Subscriber } from '../db/models';
import * as database from '../db/repo';

export const getSubscribers = async (req : Request, res : Response) => {
    try {

        const page: number = req.query.page ? parseInt(req.query.page as string) : 1;
        const limit: number = req.query.limit ? parseInt(req.query.limit as string) : 10;
        const offset: number = (page - 1) * limit;

        const subscribers : Subscriber[] = await database.findAll(offset, limit);

        if (!subscribers || subscribers.length === 0) {
            return res.status(StatusCodes.NOT_FOUND).json({msg : 'Subscribers not found.'});
        }
        return res.status(StatusCodes.OK).json({subscribers, page, limit});
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error});
    }
}

export const createSubscribers = async (req : Request, res : Response) => {
    try {
        const { firstName, lastName, email } = req.body;
        if (!firstName || !lastName || !email ) {
            return res.status(StatusCodes.BAD_REQUEST).json({error : 'Missing required parameter(s).'});
        }
        // TODO: add additional validation such as properly formatted email, etc.

        const subscriber = await database.findByEmail(email);
        if (subscriber) {
            return res.status(StatusCodes.CONFLICT).json({error : 'This email address has already been registered.'});
        };

        const newSubscriber = await database.create(req.body);
        return res.status(StatusCodes.CREATED).json({newSubscriber});

    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error});
    }
}