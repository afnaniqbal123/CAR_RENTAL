import express from "express";
import {
  Signup_C_Conttroller,
  Signup_V_Conttroller,
} from "../Controller/SignupController.js";
import { Unique_Customer, Unique_Vendor } from "../Middlewares/Unique.js";
import { CustomerSignup, VendorSignup } from "../Middlewares/Validator.js";
const SignupRoutes = express.Router();

SignupRoutes.post("/C", CustomerSignup, Unique_Customer, Signup_C_Conttroller);
SignupRoutes.post("/V", VendorSignup, Unique_Vendor, Signup_V_Conttroller);

export default SignupRoutes;
