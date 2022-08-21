import { requireAuth } from './../middleware/requireAuth';
import { createBuddySavings, editBuddySavings, deleteBuddySavings } from './../controller/buddySavingsController';
import express from 'express';

const Router = express.Router();

Router.route('/savings')
    .post(requireAuth, createBuddySavings)
    .patch(requireAuth, editBuddySavings)
    .delete(requireAuth, deleteBuddySavings);



export default Router