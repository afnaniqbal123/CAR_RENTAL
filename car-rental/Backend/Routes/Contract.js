import express from "express";
import {
  AddContract,
  Bookings,
  view_C,
  view_V,
} from "../Controller/ContractController.js";
import { authToken } from "../Middlewares/auth.js";
import { CustomerCheck } from "../Middlewares/CustomerCheck.js";
import { VendorCheck } from "../Middlewares/VendorCheck.js";

const ContractRoute = express.Router();

ContractRoute.get("/view/V", authToken, VendorCheck, view_V);
ContractRoute.get("/view/C", authToken, CustomerCheck, view_C);
ContractRoute.post("/add", authToken, CustomerCheck, AddContract);
ContractRoute.post("/bookings", authToken, VendorCheck, Bookings);
ContractRoute.put("/update", authToken, VendorCheck);

export default ContractRoute;
