export const CustomerCheck = (req, res, next) => {
  if (req.Type === "V") {
    res.status(401).send("Invalid Request");
    return;
  }
  next();
};
