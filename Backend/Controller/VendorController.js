import { Vendor } from "../Models/Vendor.model.js";

export const Details = (req, res) => {
  const { id } = req.body;
  Vendor.findById(id, (err, result) => {
    if (err) res.send(err).status(400);
    else res.send(result).status(200);
  });
};
export const Update = (req, res) => {
  let { Name, Address, Contact, id, Location } = req.body;
  console.log(Name);
  Vendor.updateById(
    id,
    {
      Name: Name,
      Location: Location,
      Address: Address,
      Contact: Contact,
    },
    (err, result) => {
      if (err) res.send(err).status(400);
      else res.send(result).status(200);
    }
  );
};
