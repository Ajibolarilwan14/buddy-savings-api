import { requireAuth } from './../middleware/requireAuth';
import { createBuddySavings } from './../controller/buddySavingsController';
import express from 'express';

const Router = express.Router();

Router.post('/buddysavings/create', requireAuth, createBuddySavings);



export default Router