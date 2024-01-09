import { sql } from "../Config/db.js";

export const Unique_Customer = (req, res, next) => {
  let { Email, AccountNo } = req.body;
  sql.query(
    "Select * from Customer WHERE Email=? OR AccountNo=? ",
    [Email, AccountNo],
    (err, result) => {
      if (err) console.log(err);
      else if (result.length === 0) {
        next();
        return;
      }
      res.status(403).send("Values Not Unique");
      return;
    }
  );
};

export const Unique_Vendor = (req, res, next) => {
  let { Email, AccountNo } = req.body;
  sql.query(
    "Select * from Vendor WHERE Email=? OR Account_num=? ",
    [Email, AccountNo],
    (err, result) => {
      if (err) console.log(err);
      else if (result.length === 0) {
        next();
        return;
      }
      res.status(403).send("Values Not Unique");
      return;
    }
  );
};