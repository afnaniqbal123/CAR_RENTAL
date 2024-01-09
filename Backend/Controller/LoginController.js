import cookieParser from "cookie-parser";
import { CreateToken } from "../Middlewares/auth.js";
import { Login } from "../Models/Login.model.js";

export const Login_C_Conttroller = (req, res) => {
  let { Email, Password } = req.body;
  Login.findByEmail("C", Email, (err, result) => {
    console.log(result);
    if (err) console.log(err);
    if (result.Found === true && result[0].Password === Password) {
      let obj = { id: result[0].C_ID }; // yahan par kam hoga
      let token = CreateToken(obj, "C");
      res.cookie("token", token, { secure: false, httpOnly: false });
      res.send({ token: token }).status(200);
    } else {
      res.status(401).json({
        success: false,
        message: "Invalid Email OR Password",
        result: {},
      });
    }
  });
};
export const Login_V_Conttroller = (req, res) => {
  let { Email, Password } = req.body;
  Login.findByEmail("V", Email, (err, result) => {
    if (result.Found === true && result[0].Password === Password) {
      let obj = { id: result[0].V_ID }; // yahan par kam hoga
      let token = CreateToken(obj, "V");
      res.cookie("token", token, { secure: false, httpOnly: false });
      res.send({ token: token }).status(200);
    } else {
      res.status(401).json({
        success: false,
        message: "Invalid Email OR Password",
        result: {},
      });
    }
  });
};
