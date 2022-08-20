import { Request, Response, NextFunction } from 'express';
import  { getUser } from '../services/User';

export const getAllUser = ((req: Request, res: Response) => {
    try {
        const user = getUser(req.body.email, req.body.firstName, req.body.lastName, req.body.password);
    
        res.json(user).status(201);
        
    } catch (error) {
        res.json(error).status(400);
    }
});

export const home = ((req: Request, res: Response) => {
    res.send("Lets go!!!");
});