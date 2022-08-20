import { AppDataSource } from './../data-source/index';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { Users } from '../entity/User';

const userRepository = AppDataSource.getRepository(Users);

export const requireAuth = (async (req: Request, res: Response, NextFunction) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decodedJWT = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userRepository.findOneBy({
            id: decodedJWT.id
        });

        if (!user) throw new Error();

        req.token = token;
        req.user = user;
        NextFunction();

    } catch (error) {
        res.status(401).send({
            message: "Please sign in to continue"
        });
    }
})