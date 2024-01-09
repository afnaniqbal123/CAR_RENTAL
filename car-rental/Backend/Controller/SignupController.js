import { Customer } from "../Models/Customer.model.js";
import { Login } from "../Models/Login.model.js";
import { Vendor } from "../Models/Vendor.model.js";

export const Signup_C_Conttroller = (req, res) => {
  let { Name, Contact, Address, Email, AccountNo, Password } = req.body;
  let customer = new Customer({
    Cname: Name,
    Contact: Contact,
    Address: Address,
    Email: Email,
    AccountNo: AccountNo,
  });
  customer.create((err, data) => {
    if (err) res.status(500).send(err);
    else {
      let login = new Login(
        {
          Email: Email,
          Password: Password,
          id: data.id,
        },
        "C"
      );

      login.create("C", (err, result) => {
        if (err) res.status(500).send(err);
        else {
          res.sendStatus(200);
        }
      });
    }
  });
};
export const Signup_V_Conttroller = (req, res) => {
  let { Name, Location, Contact, Address, Email, AccountNo, Password } =
    req.body;
  let vendor = new Vendor({
    Name: Name,
    Location: Location,
    Contact: Contact,
    Address: Address,
    Email: Email,
    Account_num: AccountNo,
  });
  vendor.create((err, data) => {
    if (err) res.status(500).send(err);
    else {
      let login = new Login(
        {
          Email: Email,
          Password: Password,
          id: data.id,
        },
        "V"
      );
      login.create("V", (err, result) => {
        if (err) res.status(500).send(err);
        else {
          console.log("waiz");
          res.sendStatus(200);
        }
      });
    }
  });
};
