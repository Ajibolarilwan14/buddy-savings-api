import express from 'express';
import { register, login } from '../controller/userController';

const Router = express.Router();

Router.post('/user/register', register);
Router.post('/user/login', login);


export default Router;