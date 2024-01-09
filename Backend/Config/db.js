import { createConnection } from "mysql";
import { createPool } from "mysql2";

export const sql = createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "car_rental",
});
// export const sql = createPool({
//   host: "sql12.freesqldatabase.com",
//   user: "sql12575845",
//   password: "sVjmmRqVhZ",
//   database: "sql12575845",
//   connectionLimit: 10,
// });

// sql.connect((err) => {
//   if (err) {
//     console.log(err);
//   } else console.log("Connected");
// });
// const promisePool = sql.promise();

// const func = async (id, table) => {
//   const [rows, fields] = await promisePool.execute(
//     "SELECT Password from `${table}` where Email = `${id}`"
//   );
//   return rows;
// };
// await func("ahaziq26@gmail.com", "CLogin").then((data) => console.log(data));

// Testing for Join
// sql.query("SELECT * FROM customer", (err, result) => {
//   if (err) console.log(result);
//   else console.log(result);
// });

export default createPool;
