import express from "express";
import { AddFeedback } from "../Controller/FeedbackController.js";
import { authToken } from "../Middlewares/auth.js";
import { CustomerCheck } from "../Middlewares/CustomerCheck.js";

const FeedbackRoute = express.Router();

FeedbackRoute.post("/C/:id", authToken, CustomerCheck, AddFeedback);

export default FeedbackRoute;
