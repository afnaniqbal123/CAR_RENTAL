import { sql } from "../Config/db.js";

export class Customer {
  constructor(customer) {
    this.Cname = customer.Cname;
    this.Contact = customer.Contact;
    this.Address = customer.Address;
    this.Email = customer.Email;
    this.AccountNo = customer.AccountNo;
  }

  create = (result) => {
    sql.query("INSERT INTO Customer SET ?", this, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("created Customer: ", { id: res.insertId, ...res });
      result(null, { id: res.insertId, ...res });
    });
  };

  static findById = (id, result) => {
    sql.query(`SELECT * FROM Customer WHERE C_ID = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found Customer: ", res[0]);
        result(null, res[0]);
        return;
      }
      // not found Customer with the id
      result({ kind: "not_found" }, null);
    });
  };

  static getAll = (title, result) => {
    let query = "SELECT * FROM Customer";
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("Customer: ", res);
      result(null, res);
    });
  };

  static updateById = (id, values, result) => {
    sql.query(
      "UPDATE Customer SET ? WHERE C_ID = ?",
      [values, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        if (res.affectedRows == 0) {
          // not found Customer with the id
          result({ kind: "not_found" }, null);
          return;
        }
        console.log("updated Customer: ", { id: id, ...res });
        result(null, { id: id, ...res });
      }
    );
  };

  static deleteById = (id, result) => {
    sql.query("DELETE FROM Customer WHERE C_ID = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("deleted Customer with C_ID: ", id);
      result(null, res);
    });
  };

  static deleteAll = (result) => {
    sql.query("DELETE FROM Customer", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log(`deleted ${res.affectedRows} Customer`);
      result(null, res);
    });
  };
}