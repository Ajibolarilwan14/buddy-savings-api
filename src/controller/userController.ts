import { authToken } from './../helpers/generateAuthToken';
import { Request, Response, NextFunction } from 'express';
import  { registerUser, loginUser } from '../services/User';

export const register = (async(req: Request, res: Response) => {
    try {
        const user = await registerUser(req.body.email, req.body.firstName, req.body.lastName, req.body.password);
        const token = authToken(user);

        res.status(201).send({
            user,
            token
        });
        
    } catch (error) {
        res.status(400).send(error);
    }
});

export const login = (async(req: Request, res: Response) => {
    try {
        const user = await loginUser(req.body.email, req.body.password);
        const token = authToken(user);
       
        res.status(200).send({
            user,
            token
        });

    } catch (error) {
        res.status(400).send(error);
    }
});