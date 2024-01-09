import { body, Result, validationResult } from "express-validator";

//for errors
const Check_Error = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }
  next();
};

// Login
export const CustomerLogin = [
  body("Email").exists().isEmail(),
  body("Password").exists().isLength({ max: 10 }),
  Check_Error,
];
export const VendorLogin = [
  body("Email").exists().isEmail(),
  body("Password").exists().isLength({ max: 10 }),
  Check_Error,
];

// Signup
export const CustomerSignup = [
  body("Name").exists().isLength({ max: 20 }),
  body("Contact").exists().isLength({ max: 11, min: 11 }),
  body("Address").exists().isLength({ max: 30 }),
  body("Email").exists().isEmail(),
  body("Password").exists().isLength({ max: 10 }),
  body("AccountNo").exists().isLength({ max: 14 }),
  Check_Error,
];
export const VendorSignup = [
  body("Name").exists().isLength({ max: 20 }),
  body("Location").exists().isLength({ max: 20 }),
  body("Contact").exists().isLength({ max: 11, min: 11 }),
  body("Address").exists().isLength({ max: 30 }),
  body("Email").exists().isEmail(),
  body("Password").exists().isLength({ max: 10 }),
  body("AccountNo").exists().isLength({ max: 14 }),
  Check_Error,
];
