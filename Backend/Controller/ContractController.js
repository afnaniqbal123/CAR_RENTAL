import { Contract } from "../Models/Contract.model.js";
import { Products } from "../Models/Product.model.js";

export const Add = (req, res) => {};
export const view_C = (req, res) => {
  const { id } = req.body;
  console.log(id);
  Contract.ViewContract(id, "C_ID", (err, result) => {
    if (err) res.send(err).status(401);
    else res.send(result).status(200);
  });
};
export const view_V = (req, res) => {
  const { id } = req.body;
  console.log(id);
  Contract.ViewContract(id, "V_ID", (err, result) => {
    if (err) res.send(err).status(401);
    else res.send(result).status(200);
  });
};
export const AddContract = (req, res) => {
  const { id, pid, vid, sd, ed } = req.body;
  if (sd && ed) {
    Products.CheckAvailability(pid, (err, result) => {
      if (result == true) {
        let contract = new Contract({
          cid: id,
          pid: pid,
          vid: vid,
          sd: sd,
          ed: ed,
        });
        contract.create((err, result1) => {
          if (err) res.send(["Contract Not Created", ...err]).status(403);
          else {
            Products.setAvailable(pid, (err, result2) => {
              if (err)
                res
                  .send(["Contract Created But Available Not Set", ...err])
                  .status(403);
              else {
                res.send("All Done.").status(200);
              }
            });
          }
        });
      } else {
        res.send("SORRY !!! Already Booked , Select Another Car").status(403);
      }
    });
  } else {
    res.send("Error!! No Start_date and End_Date").status(403);
  }
};
export const Update = (req, res) => {};

export const Bookings = (req, res) => {
  const { id } = req.body;
  Contract.Booking(id, (err, result) => {
    if (err) res.send(err).status(401);
    else res.send(result).status(200);
  });
};
