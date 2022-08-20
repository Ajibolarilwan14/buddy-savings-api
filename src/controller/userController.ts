import { Request, Response, NextFunction } from 'express';
import  { registerUser } from '../services/User';

export const register = ((req: Request, res: Response) => {
    try {
        const user = registerUser(req.body.email, req.body.firstName, req.body.lastName, req.body.password);

        if (!user) res.status(400).send({
            message: "Something went wrong"
        });
    
        res.status(201).send({
            user
        })
        
    } catch (error) {
        res.json(error).status(400);
    }
});

export const home = ((req: Request, res: Response) => {
    res.send("Lets go!!!");
});