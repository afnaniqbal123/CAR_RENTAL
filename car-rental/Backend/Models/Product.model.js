import { sql } from "../Config/db.js";

export class Products {
  constructor(product) {
    this.P_Model = product.P_Model;
    this.V_ID = product.V_ID;
    this.P_Name = product.P_Name;
    this.Picture = product.Picture;
    this.Price = product.Price;
    this.Seats = product.Seats;
    this.Description = product.descrip;
    this.Available = 1;
    this.Car_Type = product.Car_Type;
    this.Brand = product.Brand;
  }

  create = (result) => {
    sql.query("INSERT INTO Products SET ?", this, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("product added: ", { id: res.insertId, ...res });
      result(null, { id: res.insertId, ...res });
    });
  };

  static FiltersS = (requirement, result) => {
    const { Price, Car_Type, Location } = requirement;
    let query =
      "SELECT v.Location,p.P_ID,p.P_Name, p.P_Model, p.Price, p.Picture, v.Name, v.Location,p.Car_Type FROM Products p,Vendor v WHERE p.V_ID = v.V_ID";
    query = (Price && query + ` AND p.Price <=  "` + Price + `"`) || query;
    query =
      (Location && query + ` AND v.Location =  "` + Location + `"`) || query;
    query =
      (Car_Type && query + ` AND p.Car_Type =  "` + Car_Type + `"`) || query;
    console.log(Car_Type);
    sql.query(query, requirement, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found Product: ", res);
        result(null, res);
        return;
      }
      // not found Product with the id
      result(null, { kind: "not_found" });
    });
  };
  static FiltersP = (price, result) => {
    sql.query(
      `SELECT p.P_Name, p.P_Model, p.Price, p.Picture, v.Name, v.Location FROM Products p,Vendor v WHERE p.V_ID = v.V_ID AND Price <= ?`,
      [price],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        if (res.length) {
          console.log("found Product: ", res);
          result(null, res);
          return;
        }
        // not found Product with the id
        result(null, { kind: "not_found" });
      }
    );
  };

  static getAll = (result) => {
    sql.query(
      `SELECT p.P_ID,p.Car_Type,p.P_Name, p.P_Model, p.Price, p.Picture, v.Name, v.Location FROM Products p,Vendor v WHERE p.available = 1 AND p.V_ID= v.V_ID`,
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
        if (res.length) {
          console.log("Product: found ", res);
          result(null, res);
          return;
        }
        result(null, { kind: "no products" });
      }
    );
  };
  static view_V = (id, result) => {
    sql.query(`SELECT * FROM Products WHERE V_ID = ?`, [id], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.length) {
        console.log("Product: found ", res);
        result(null, res);
        return;
      }
      result(null, { kind: "no products" });
    });
  };
  static updateById = (vid, pid, values, result) => {
    sql.query(
      "UPDATE Products SET ? WHERE P_ID = ? AND V_ID = ?",
      [values, pid, vid],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
        if (res.affectedRows == 0) {
          // not found Product with the id
          result(null, { kind: "not_found" });
          return;
        }
        console.log("updated Product: ");
        result(null, res);
      }
    );
  };

  static deleteById = (vid, pid, result) => {
    sql.query(
      "DELETE FROM Products WHERE P_ID = ? AND V_ID = ?",
      [pid, vid],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        if (res.affectedRows == 0) {
          // not found Customer with the id
          result(null, { kind: "not_found" });
          return;
        }
        console.log("deleted Product with P_ID: ", pid);
        result(null, res);
      }
    );
  };
  static findOneV = (id, result) => {
    sql.query("select * FROM Products WHERE P_ID = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.affectedRows == 0) {
        // not found Customer with the id
        result(null, { kind: "not_found" });
        return;
      }
      result(null, res[0]);
    });
  };
  static findOneC = (id, result) => {
    sql.query(
      "select p.P_ID,p.V_ID,p.Car_Type,p.P_Name, p.P_Model, p.Price, p.Picture, v.Name, v.Location,p.Seats,p.Description,p.Brand,v.Ratings FROM Products p ,Vendor v WHERE p.available = 1 AND  v.V_ID = p.V_ID AND P_ID = ?",
      id,
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        if (res.affectedRows == 0) {
          // not found Customer with the id
          result(null, { kind: "not_found" });
          return;
        }
        result(null, res[0]);
      }
    );
  };

  static setAvailable = (P_ID, result) => {
    sql.query(
      "UPDATE Products SET ? WHERE P_ID = ?",
      [{ Available: 0 }, P_ID],
      (err, res) => {
        if (err) {
          console.log(err);
          result(err, null);
        } else {
          result(null, res);
        }
      }
    );
  };

  static CheckAvailability = (P_ID, result) => {
    sql.query(
      "Select * from Products where P_ID = ? AND available = 1",
      P_ID,
      (err, res) => {
        if (err) {
          result(err, null);
        } else {
          console.log(res);
          if (res.length) {
            result(null, true);
          } else {
            result(null, false);
          }
        }
      }
    );
  };
}
