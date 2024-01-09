import { pool } from "../Config/db.js";

//to check a attribute is unique or not
export const ValidateService = (arr, cb) => {
  pool.query(`select ?? from ?? where ?? = ?`, arr, (err, result, fields) => {
    if (err) {
      cb(err, null);
      return;
    }
    if (result.length == 0) {
      cb(null, true);
      return;
    }
    cb(null, false);
    return;
  });
};

export const SignupService = () => {};

export const LoginService = () => {};
