import express from 'express';
import { getAllUser, home } from '../controller/userController';

const Router = express.Router();
// console.log(Router);

Router.post('/user', getAllUser);
Router.get('/', home);


export default Router;