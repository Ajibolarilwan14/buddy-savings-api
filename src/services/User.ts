import { DataSource } from "typeorm";
import bcrypt from "bcrypt";
import { Users } from "../entity/User";
import { AppDataSource } from "../data-source";
import { validate } from "class-validator";
import IUser from "../interfaces/user";

const userRepository = AppDataSource.getRepository(Users);

export const registerUser = async (email, firstName, lastName, password) => {
  const existingUser = await userRepository.findOneBy({
    email,
  });

  if (existingUser) throw new Error("User already exist!");

  const newUser = new Users();
  newUser.email = email;
  (newUser.firstName = firstName), (newUser.lastName = lastName);
  newUser.password = bcrypt.hashSync(password, 10);

  const errors = await validate(newUser);
  if (errors.length > 0) {
    throw new Error("Some validation failed!");
  } else {
    await userRepository.manager.save(newUser);

    delete newUser.password;

    return newUser;
  }
};

export const loginUser = async (email, password) => {
  const user = await userRepository.findOneBy({
    email,
  });

  if (!user) throw new Error("No user found!");

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) throw new Error("Email/password is incorrect!");

  delete user.password;

  return user;
};

export const getSavings = async (id) => {
  const savings = await userRepository.find({
    where: {
      id,
    },
    relations: {
      buddySavings: true,
    },
  });

  // @ts-ignore
  delete savings.password;

  return savings;
};
