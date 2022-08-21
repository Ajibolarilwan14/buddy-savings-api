import { requireAuth } from './../middleware/requireAuth';
import express from 'express';
import { register, login, mySavings, currentUser } from '../controller/userController';

const Router = express.Router();

Router.post('/register', register);
Router.post('/login', login);
Router.get('/mysavings', requireAuth, mySavings);
Router.get('/me', requireAuth, currentUser);


export default Router;