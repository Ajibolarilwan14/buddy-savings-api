import { DataSource } from 'typeorm';
import { Users } from '../entity/User';
import { AppDataSource } from '../data-source';
import { validate } from 'class-validator';

const userRepository = AppDataSource.getRepository(Users);
// const dataSource = new AppDataSource;

export const getUser = (async (email, firstName, lastName, password) => {
    // const user = await userRepository.findOneBy({
    //     email
    // });

    // if(user) return "User already exist";
    const user = new Users();
    user.email = email;
    user.firstName = firstName,
    user.lastName = lastName;
    user.password = password;

    const errors = await validate(user);
    if (errors.length > 0) {
        return console.error("whooops, bad/invalid data, please check your inputs and try again!");
        // console.log(__dirname);
        
        ;
    }else{
        await userRepository.manager.save(user);
    }

    return user;
});