import express from "express";
import {
  Login_C_Conttroller,
  Login_V_Conttroller,
} from "../Controller/LoginController.js";
import { CustomerLogin, VendorLogin } from "../Middlewares/Validator.js";
// import all controllers
// import SessionController from './app/controllers/SessionController'

const LoginRoutes = express.Router();

// Add routes
LoginRoutes.post("/C", CustomerLogin, Login_C_Conttroller);
LoginRoutes.post("/V", VendorLogin, Login_V_Conttroller);

export default LoginRoutes;
