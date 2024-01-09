import { sql } from "../Config/db.js";
import { Contract } from "./Contract.model.js";
import { Customer } from "./Customer.model.js";
import { FeedBacks } from "./Feedbacks.model.js";
import { Login } from "./Login.model.js";
import { Products } from "./Product.model.js";
import { Vendor } from "./Vendor.model.js";

// *********************FeedBAck TEST****************************
// let feedback = new FeedBacks({
//   message: "wow",
//   rating: 5,
//   contract_ID: 2,
// });
// feedback.create();
// FeedBacks.getAll((err, result) => {
//   return;
// });
FeedBacks.findByIdForCustomer(2, "C_ID", (err, result) => {
  console.log(err);
  console.log(result);
});
// *********************Contract TEST****************************
// let contract = new Contract({
//   pid: "2",
//   cid: "2",
//   vid: "2",
//   sd: "2020-11-12",
//   ed: "2020-11-13",
// });
// contract.create((err, result) => {
//   if (err) console.log(err);
//   else console.log(result);
// });
// --------------------------------------------------
// Contract.updateById("1", "1", "2", { P_ID: "2" }, (err, result) => {
//   if (err) console.log(err);
//   else console.log(result);
// });
// -------------------------------------------------------------
// Contract.ViewContract("2", "V_ID", (err, result) => {
//   if (err) console.log(err);
//   else console.log(result);
// });
// *********************Products TEST****************************
// let obj = {
//   V_ID: "2",
//   P_Model: "2020",
//   P_Name: "civic",
//   Picture: "fnvoovnovnds",
//   Price: "4000",
//   Car_Type: "sedan",
//   Avaliable: "1",
// };
// let products = new Products(obj);
// products.create((err, result) => {
//   if (err) console.log(err);
//   else console.log(result);
// });
// Products.ShowAll(2, (err, result) => {
//   if (err) console.log(err);
//   else console.log(result);
// });
// ------------------------
// Products.getAll((err, result) => {
//   if (err) console.log(err);
//   else console.log(result);
// });
// ------------------------
// Products.updateById("2", "3", { Price: "10000" }, (err, result) => {
//   if (err) console.log(err);
//   else console.log(result);
// });
// ------------------------
// Products.deleteById("2", "3", (err, result) => {
//   if (err) console.log(err);
//   else console.log(result);
// });
// Products.FiltersS({ Car_Type: "hatchback" }, (err, result) => {
//   if (err) console.log(err);
//   else console.log(result);
// });
// Products.FiltersP(100000000, (err, result) => {
//   if (err) console.log(err);
//   else console.log(result);
// });
// Products.ShowAll("1", (err, result) => {
//   if (err) console.log(err);
//   else console.log(result);
// });
// *********************CUSTOMER TEST****************************
// const obj = {
//   Cname: "Areez",
//   Contact: "0332263075",
//   Address: "R 500  20",
//   Email: "Waizbin11@gmail.com",
//   AccountNo: "03-569",
// };
// ---------------------------------------------
// const customer = new Customer(obj);
// customer.create((err, data) => {
//   if (err) console.log(err);
//   else {
//     let id = data.id;
//     console.log(id);
//     const login = new Login(
//       {
//         Email: customer.Email,
//         Password: "hell",
//         id: id,
//       },
//       "C"
//     );
//     login.create("C", (err, Data) => {
//       if (err) console.log(err);
//       else console.log(Data);
//     });
//   }
// });
// -----------------------------------------
// Customer.findById(12457, (err, res) => {
//   if (err) console.log(err);
//   else console.log(res);
// });
// ----------------------------------------------
// Customer.getAll(undefined, (err, res) => {
//   if (err) console.log(err);
//   else console.log(res);
// });
// -------------------------------------
// Customer.updateById(12457, { Cname: "Waiz" }, (err, Data) => {
//   if (err) console.log(err);
//   else console.log(Data);
// });
// -------------------------------
// Customer.deleteById(12457, (err, data) => {
//   if (err) console.log(err);
//   else console.log(data);
// });
// -------------------------------------
// Customer.deleteAll((err, data) => {
//   if (err) console.log(err);
//   else console.log(data);
// });
// ----------------------------------
// // *********************VENDOR TEST****************************
// // ---------------------------------------------
// const obj2 = {
//   Cname: "Areez",
//   location: "KHI",
//   Contact: "03322630758",
//   Address: "R 500 block 20",
//   Email: "Waizbi@gmail.com",
//   Rating: null,
//   Account_num: "034-569",
// };
// // --------------------------------------------
// let vendor = new Vendor(obj2);
// vendor.create((err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     // let id = data.id;
//     let login = new Login(
//       { Email: vendor.Email, Password: "123", id: data.id },
//       `V`
//     );
//     login.create((err, data) => {
//       if (err) {
//         console.log(err);
//         return;
//       } else console.log(data);
//     });
//   }
// });
// --------------------------------------------------------
// Vendor.deleteById(1, (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else console.log(data);
// });
// ----------------------------------
// Vendor.findById(12, (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else console.log(data);
// });
// -----------------------------------------
// Vendor.getAll((err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else console.log(data);
// });
// -----------------------------------------
// Vendor.updateById(12, { Name: "Waiz" }, (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else console.log(data);
// });
// ------------------------------------------
// Vendor.deleteById(12, (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else console.log(data);
// });
// *********************Login TEST****************************
// Login.findByEmail("C", "Waizbin11@gmail.com", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else console.log(data);
// });
// Login.updateById("C", 1, { Email: "waizbin111@gmil.com" }, (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else console.log(data);
// });
// Login.deleteById("C", 1, (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else console.log(data);
// });
// export const Unique_Customer = (req, res, next) => {
// let { Cname, Contact, Address, Email, AccountNo } = obj;
// sql.query(
//   "Select * from Customer WHERE Cname=? OR Contact=? OR Address=? OR Email=? OR AccountNo=? ",
//   [Cname, Contact, Address, Email, AccountNo],
//   (err, result) => {
//     if (err) console.log(err);
//     else if (result.length === 0) console.log("correct");
//     else console.log(result);
//     // console.log({ message: "Value Not Unique" }).sendStatus(401);
//   }
// );
// };
// sql.query("Select * from Customer", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else console.log(data);
// });
