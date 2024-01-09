import express from "express";
import cors from "cors";
import LoginRoutes from "./Routes/LoginRoute.js";
import SignupRoutes from "./Routes/SignupRoute.js";
import ProductsRoute from "./Routes/Products.js";
import ContractRoute from "./Routes/Contract.js";
import cookieParser from "cookie-parser";
import CustomerProfileRoute from "./Routes/CustomerProfile.js";
import VendorProfile from "./Routes/VendorProfile.js";
import FeedbackRoute from "./Routes/Feedback.js";
const app = express();
const port = 8000;

// Middlewares
app.use(express.json());
app.use(
  cookieParser({
    httpOnly: false,
    secure: false,
  })
);
app.use("*", cors({ credentials: true }));
// Routes
app.use("/Login", LoginRoutes);
app.use("/signup", SignupRoutes);
app.use("/products", ProductsRoute);
app.use("/contract", ContractRoute);
app.use("/customerProfile", CustomerProfileRoute);
app.use("/Vendor", VendorProfile);
app.use("/feedback", FeedbackRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
