import express from 'express';
import { register, login } from '../controller/userController';

const Router = express.Router();

Router.post('/register', register);
Router.post('/login', login);
Router.get('/buddysavings')


export default Router;