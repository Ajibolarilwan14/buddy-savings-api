import { DataSource } from 'typeorm';
import bcrypt from 'bcrypt';
import { Users } from '../entity/User';
import { AppDataSource } from '../data-source';
import { validate } from 'class-validator';

const userRepository = AppDataSource.getRepository(Users);

export const registerUser = (async (email, firstName, lastName, password) => {
    const user = await userRepository.findOneBy({
        email
    });

    if(user) return false;
    

    const newUser = new Users();
    newUser.email = email;
    newUser.firstName = firstName,
    newUser.lastName = lastName;
    newUser.password = bcrypt.hashSync(password, 10);

    const errors = await validate(newUser);
    if (errors.length > 0) {
        return false;
        
    }else{
        await userRepository.manager.save(newUser);
    }

    return user;
});