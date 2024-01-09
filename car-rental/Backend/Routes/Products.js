import express from "express";
import { VendorCheck } from "../Middlewares/VendorCheck.js";
import { CustomerCheck } from "../Middlewares/CustomerCheck.js";
import { authToken } from "../Middlewares/auth.js";
import {
  Add,
  Delete,
  getOneC,
  getOneV,
  Search,
  Update,
  View_C,
  View_V,
} from "../Controller/ProductsController.js";

const ProductsRoute = express.Router();

ProductsRoute.post("/add", authToken, VendorCheck, Add);
ProductsRoute.get("/view/V", authToken, VendorCheck, View_V);
ProductsRoute.get("/view/V/:id", authToken, VendorCheck, getOneV);
ProductsRoute.get("/view/C/:id", authToken, CustomerCheck, getOneC);
ProductsRoute.post("/search/C", authToken, CustomerCheck, Search);
ProductsRoute.get("/view/C", authToken, CustomerCheck, View_C);
ProductsRoute.delete("/delete/:ID", authToken, VendorCheck, Delete);
ProductsRoute.put("/Update", authToken, VendorCheck, Update);

export default ProductsRoute;
