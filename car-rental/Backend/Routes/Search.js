import express from "express";
import { CustomerCheck } from "../Middlewares/CustomerCheck";

const SearchRoute = express.Router();

SearchRoute.get("/", CustomerCheck);
