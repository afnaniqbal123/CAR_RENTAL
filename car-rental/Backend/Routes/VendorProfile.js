import express from "express";
import { Details, Update } from "../Controller/VendorController.js";
import { authToken } from "../Middlewares/auth.js";
import { VendorCheck } from "../Middlewares/VendorCheck.js";

const VendorProfile = express.Router();

VendorProfile.get("/profile/", authToken, VendorCheck, Details);
VendorProfile.put("/profile/", authToken, VendorCheck, Update);
VendorProfile.delete("/profile/", authToken, VendorCheck);

export default VendorProfile;
