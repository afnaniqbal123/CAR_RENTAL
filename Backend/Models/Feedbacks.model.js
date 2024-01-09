import { sql } from "../Config/db.js";

export class FeedBacks {
  constructor(feedBack) {
    this.FeedBack = feedBack.message;
    this.rating = feedBack.rating;
    this.Contract_ID = feedBack.contract_ID;
  }

  create = (result) => {
    sql.query("INSERT INTO FeedBacks SET ?", this, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("created FeedBacks: ", { id: res.insertId, ...res });
      result(null, { id: res.insertId, ...res });
    });
  };
  // SELECT p.P_Name,v.Name,C.Cname,p.Price,p.Picture,c.Start_Date,c.End_Date FROM Customer C, Products p,Vendor v,Contract c WHERE p.V_ID = v.V_ID AND c.V_ID = p.V_ID AND C.C_ID = c.C_ID AND ?? = ?
  static findByIdForCustomer = (id, user, result) => {
    user = "c." + user;
    sql.query(
      "SELECT c.C_ID,c.V_ID,c.Start_Date,c.End_Date,f.Feedback,f.Rating,c.P_ID FROM Contract c, FeedBacks f WHERE c.Contract_ID = f.Contract_ID AND ?? = ?",
      [user, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        //cus ven date msg price
        if (res.length) {
          console.log("found FeedBacks: ", res);
          result(null, res);
          return;
        }
        // not found FeedBacks with the id
        result({ kind: "not_found" }, null);
      }
    );
  };

  static getAll = (result) => {
    let query = "SELECT * FROM FeedBacks";
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("FeedBacks: ", res);
      result(null, res);
    });
  };

  static updateById = (id, values, result) => {
    sql.query(
      "UPDATE FeedBacks SET ? WHERE C_ID = ?",
      [values, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        if (res.affectedRows == 0) {
          // not found FeedBacks with the id
          result({ kind: "not_found" }, null);
          return;
        }
        console.log("updated FeedBacks: ", { id: id, ...res });
        result(null, { id: id, ...res });
      }
    );
  };

  static deleteById = (id, result) => {
    sql.query("DELETE FROM FeedBacks WHERE C_ID = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.affectedRows == 0) {
        // not found FeedBacks with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("deleted FeedBacks with C_ID: ", id);
      result(null, res);
    });
  };

  static deleteAll = (result) => {
    sql.query("DELETE FROM FeedBacks", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log(`deleted ${res.affectedRows} FeedBacks`);
      result(null, res);
    });
  };
}
