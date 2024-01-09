import { Customer } from "../Models/Customer.model.js";

export const Details = (req, res) => {
  const { id } = req.body;
  Customer.findById(id, (err, result) => {
    if (err) res.send(err).status(400);
    else res.send(result).status(200);
  });
};
export const Update = (req, res) => {
  let { Cname, Addresss, Contacts, id } = req.body;
  Customer.updateById(
    id,
    { Cname: Cname, Addresss: Addresss, Contacts: Contacts },
    (err, result) => {
      if (err) res.send(err).status(400);
      else res.send("All Done.").status(200);
    }
  );
};

export const Delete = (req, res) => {
  const { id } = req.body;
  Customer.deleteById(id, (err, result) => {
    if (err) res.send(err).status(400);
    else res.send(result).status(200);
  });
};
