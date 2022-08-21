import { testEmail } from './../emails/buddySavings';
import { createSavings, deleteSavings } from "../services/BuddySavings";
import { Request, Response } from "express";
import { json } from 'stream/consumers';

export const createBuddySavings = async (req: Request, res: Response) => {
  const details = {
    title: req.body.title,
    no_of_friends: req.body.no_of_friends,
    do_you_or_your_buddies_have_a_target:
      req.body.do_you_or_your_buddies_have_a_target,
    target: req.body.target,
    plan_to_save: req.body.plan_to_save,
    frequency: req.body.frequency,
    start_when: req.body.start_when,
    how_long_do_you_want_to_save_for: req.body.how_long_do_you_want_to_save_for,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    relationship_with_buddies: req.body.relationship_with_buddies,
    buddies: JSON.stringify(req.body.buddies),
  };
  try {
    // @ts-ignore
      const savings = await createSavings(details, req.user);
    //   @ts-ignore
    //   const email = await testEmail(req.user.email);

    res.status(201).json(savings);
  } catch (error) {
    console.log(error);

    res.status(400).send(error);
  }
  // @ts-ignore
  // res.send(req.user);
};

export const editBuddySavings = async () => {};

export const deleteBuddySavings = async (req: Request, res: Response) => {

    try {
        // @ts-ignore
        const deletedSavings = await deleteSavings(req.params.id, req.user.id);

        res.send(deleteBuddySavings);
    } catch (error) {
        res.status(500).send(error);
    }
};
