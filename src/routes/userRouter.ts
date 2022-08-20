import express from 'express';
import { register, home } from '../controller/userController';

const Router = express.Router();

Router.post('/user/register', register);
Router.get('/', home);


export default Router;