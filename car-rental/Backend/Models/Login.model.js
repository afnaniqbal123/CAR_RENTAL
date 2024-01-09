import { sql } from "../Config/db.js";

// constructor
export class Login {
  constructor(login, type) {
    this.Email = login.Email;
    this.Password = login.Password;
    type === "V" ? (this.V_ID = login.id) : (this.C_ID = login.id);
  }

  create = (type, result) => {
    sql.query(
      `INSERT INTO ?? SET ?`,
      [type === `V` ? "VLogin" : "CLogin", this],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        console.log("created login: ", res);
        result(null, res);
      }
    );
  };

  static findByEmail = (table, email, result) => {
    sql.query(
      `SELECT * FROM ?? WHERE Email = ?`,
      [table === `V` ? "VLogin" : "CLogin", email],
      (err, res) => {
        if (err) {
          result(err, null);
          return;
        }
        if (res.length) {
          console.log("found Login: ", res);
          result(null, { Found: true, ...res });
          return;
        }
        // not found Login with the id
        result(null, { Found: false, ...res });
      }
    );
  };

  static updateById = (table, id, change, result) => {
    sql.query(
      "UPDATE ?? SET ? WHERE ?? = ?",
      [
        table === `V` ? "VLogin" : "CLogin",
        change,
        table === `V` ? "V_ID" : "C_ID",
        id,
      ],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        if (res.affectedRows == 0) {
          // not found Login with the id
          result({ kind: "not_found" }, null);
          return;
        }
        console.log("updated Records: ", { id: id, ...res });
        result(null, { id: id, ...res });
      }
    );
  };

  static deleteById = (table, id, result) => {
    sql.query(
      "DELETE FROM ?? WHERE ?? = ?",
      [
        table === `V` ? "VLogin" : "CLogin",
        table === `V` ? "V_ID" : "C_ID",
        id,
      ],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        if (res.affectedRows == 0) {
          // not found Login with the id
          result({ kind: "not_found" }, null);
          return;
        }
        console.log("deleted login with id: ", id);
        result(null, res);
      }
    );
  };
}
