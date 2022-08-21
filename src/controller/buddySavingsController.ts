import { editSavings, fetchASavings } from './../services/BuddySavings';
import { testEmail } from "./../emails/buddySavings";
import { createSavings, deleteSavings } from "../services/BuddySavings";
import { Request, Response } from "express";

export const createBuddySavings = async (req: Request, res: Response) => {

    const details = {
        ...req.body
    }
    console.log(details);
    
    
  try {
    // @ts-ignore
    const savings = await createSavings(details, req.user);

    res.status(201).json(savings);
  } catch (error) {
    console.log(error);

    res.status(400).send(error);
  }
  // @ts-ignore
  // res.send(req.user);
};

export const editBuddySavings = async (req: Request, res: Response) => {
    const details = {
      ...req.body
    };

    try {
        const savings = editSavings(req.params.id, details);
        
        res.send(savings);
    } catch (error) {
        res.status(500).send(error);
    }

};

export const deleteBuddySavings = async (req: Request, res: Response) => {
  try {
    // @ts-ignore
    const deletedSavings = await deleteSavings(req.params.id, req.user.id);

    res.send(deletedSavings);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getSingleSaving = async (req: Request, res: Response) => {
    try {
        const savings = await fetchASavings(req.params.id);

        res.send(savings);
    } catch (error) {
        res.status(500).send(error)
    }
}
