import { sql } from "../Config/db.js";

// constructor
export class Vendor {
  constructor(vendor) {
    this.Name = vendor.Name;
    this.Location = vendor.Location;
    this.Contact = vendor.Contact;
    this.Address = vendor.Address;
    this.Email = vendor.Email;
    this.Ratings = vendor.Rating;
    this.Account_num = vendor.Account_num;
  }

  create = (result) => {
    sql.query("INSERT INTO Vendor SET ?", this, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("created tutorial: ", { id: res.insertId, ...res });
      result(null, { id: res.insertId, ...res });
    });
  };

  static findById = (id, result) => {
    sql.query(`SELECT * FROM Vendor WHERE V_ID = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found Vendor: ", res);
        result(null, res);
        return;
      }
      // not found Vendor with the id
      result({ kind: "not_found" }, null);
    });
  };

  static getAll = (result) => {
    sql.query("SELECT * FROM Vendor", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("tutorials: ", res);
      result(null, res);
    });
  };

  static updateById = (id, values, result) => {
    sql.query(
      "UPDATE Vendor SET ? where V_ID = ? ",
      [values, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        if (res.affectedRows == 0) {
          // not found Vendor with the id
          result({ kind: "not_found" }, null);
          return;
        }
        console.log("updated Vendor: ", { id: id, ...res });
        result(null, { id: id, ...res });
      }
    );
  };

  static deleteById = (id, result) => {
    sql.query("DELETE FROM Vendor WHERE V_ID = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found Vendor with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("deleted tutorial with id: ", id);
      result(null, res);
    });
  };
}
