import { Products } from "../Models/Product.model.js";

export const View_C = (req, res) => {
  Products.getAll((err, result) => {
    if (err) {
      res.send(err).status(400);
    } else {
      res.send(result).status(200);
    }
  });
};
export const Search = (req, res) => {
  console.log(req.body);
  Products.FiltersS(req.body, (err, result) => {
    if (err) res.send(err).status(400);
    else res.send(result).status(200);
  });
};
export const View_V = (req, res) => {
  const { id } = req.body;
  Products.view_V(id, (err, result) => {
    if (err) res.send(err).status(400);
    else res.send(result).status(200);
  });
};
export const Add = (req, res) => {
  console.log(req.body);
  const {
    P_Model,
    id,
    P_Name,
    Picture,
    Price,
    Car_Type,
    Seats,
    descrip,
    Brand,
  } = req.body;
  const product = new Products({
    P_Model: P_Model,
    V_ID: id,
    P_Name: P_Name,
    Picture: Picture,
    Price: Price,
    Car_Type: Car_Type,
    Avaliable: "1",
    Seats: Seats,
    descrip: descrip,
    Brand: Brand,
  });
  product.create((err, result) => {
    if (err) res.send(err).status(400);
    else res.send(result).status(200);
  });
};
export const getOneV = (req, res) => {
  let { id } = req.params;
  console.log(id);
  Products.findOneV(id, (err, result) => {
    if (err) res.send(err).status(400);
    else res.send(result).status(200);
  });
};
export const getOneC = (req, res) => {
  let { id } = req.params;
  console.log(id);
  Products.findOneC(id, (err, result) => {
    if (err) res.send(err).status(400);
    else res.send(result).status(200);
  });
};
export const Update = (req, res) => {
  let { Price, id, P_ID } = req.body;
  Products.updateById(id, P_ID, { Price: Price }, (err, result) => {
    if (err) res.send(err).status(400);
    else res.send(result).status(200);
  });
};
export const Delete = (req, res) => {
  let { ID } = req.params;
  let { id } = req.body;
  Products.deleteById(id, ID, (err, result) => {
    if (err) res.send(err).status(400);
    else res.send(result).status(200);
  });
};
