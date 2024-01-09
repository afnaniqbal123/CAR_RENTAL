import express from "express";
import { Delete, Details, Update } from "../Controller/CustomerController.js";
import { authToken } from "../Middlewares/auth.js";
import { CustomerCheck } from "../Middlewares/CustomerCheck.js";

const CustomerProfileRoute = express.Router();

CustomerProfileRoute.get("/details/", authToken, CustomerCheck, Details);
CustomerProfileRoute.put("/details/", authToken, CustomerCheck, Update);
CustomerProfileRoute.delete("/details/", authToken, CustomerCheck, Delete);

export default CustomerProfileRoute;
