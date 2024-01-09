import { sql } from "../Config/db.js";

export class Contract {
  constructor(contract) {
    this.P_ID = contract.pid;
    this.V_ID = contract.vid;
    this.C_ID = contract.cid;
    this.Start_date = contract.sd;
    this.End_date = contract.ed;
  }

  create = (result) => {
    sql.query("INSERT INTO Contract SET ?", this, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("contract established: ", { id: res.insertId, ...res });
      result(null, { id: res.insertId, ...res });
    });
  };
  static ViewContract = (id, user, result) => {
    sql.query(
      `SELECT Contract_ID,start_date,end_date,Name,Price,Picture,Cname,Rating as Rating,feedback,num from customer NATURAL JOIN(SELECT * from products NATURAL JOIN(SELECT * FROM vendor NATURAL JOIN(SELECT C_ID,V_ID,P_ID,feedback,rating,start_date,end_date,contract.Contract_ID FROM contract LEFT JOIN feedbacks ON feedbacks.Contract_ID = contract.Contract_ID )as t2)as t3)as t4 where ?? = ?;`,
      [user, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        console.log(res);
        console.log("contract established: ", res.length);
        result(null, res);
      }
    );
  };
  static findById = (id, result) => {
    sql.query(
      `SELECT * FROM Contract WHERE Contract_ID = ?`,
      id,
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        if (res.length) {
          console.log("found Contract: ", res);
          result(null, res);
          return;
        }
        // not found Contract with the id
        result(null, { kind: "not_found" });
      }
    );
  };
  static updateById = (pid, vid, cid, values, result) => {
    sql.query(
      "UPDATE Contract SET ? WHERE P_ID = ? AND V_ID = ? AND C_ID = ?",
      [values, pid, vid, cid],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
        if (res.affectedRows == 0) {
          // not found Contract with the id
          result(null, { kind: "not_found" });
          return;
        }
        console.log("updated Contract: ");
        result(null, res);
      }
    );
  };
  static Booking = (id, result) => {
    sql.query(
      "SELECT p.Picture,p.P_Name,p.Price, v.Name,c.start_date,c.end_date from contract c,products p,vendor v where c.V_ID = p.V_ID AND c.V_ID = v.V_ID AND c.V_ID = ? AND p.available = 0",
      id,
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
        console.log(res);
        result(null, res);
      }
    );
  };
}
