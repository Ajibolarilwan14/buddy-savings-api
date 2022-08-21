import { authToken } from "./../helpers/generateAuthToken";
import { Request, Response, NextFunction } from "express";
import { registerUser, loginUser, getSavings } from "../services/User";

export const register = async (req: Request, res: Response) => {
  try {
    const user = await registerUser(
      req.body.email,
      req.body.firstName,
      req.body.lastName,
      req.body.password
    );
    const token = authToken(user);

    res.status(201).send({
      user,
      token,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const user = await loginUser(req.body.email, req.body.password);
    const token = authToken(user);

    res.status(200).send({
      user,
      token,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

export const mySavings = async (req: Request, res: Response) => {
  try {
    // @ts-ignore
    const savings = await getSavings(req.user.id);

    res.send(savings);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const currentUser = (req: Request, res: Response) => {
  // @ts-ignore
  const user = req.user;

  res.send(user);
};
