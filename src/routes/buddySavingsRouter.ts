import { requireAuth } from "./../middleware/requireAuth";
import {
  createBuddySavings,
  editBuddySavings,
  deleteBuddySavings,
  getSingleSaving,
  acceptInvitation,
  rejectInvitation,
} from "./../controller/buddySavingsController";
import express from "express";

const Router = express.Router();

Router.post("/create", requireAuth, createBuddySavings);
Router.patch("/edit/:id", requireAuth, editBuddySavings);
Router.delete("/delete:id", requireAuth, deleteBuddySavings);
Router.get("/savings/:id", requireAuth, getSingleSaving);
Router.post("/savings/:id/acceptInvitation", requireAuth, acceptInvitation);
Router.post("/savings/:id/rejectInvitation", requireAuth, acceptInvitation);

export default Router;
