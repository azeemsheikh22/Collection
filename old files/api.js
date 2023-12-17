// const express = require("express");
// const dbConnect = require("./mongodb");
// const mongodb = require("mongodb");
// const app = express();
// app.use(express.json());

// //    Get API
// app.get("/", async (req, res) => {
//   let data = await dbConnect();
//   data = await data.find().toArray();
//   console.log(data);
//   res.send(data);
// });

// //  Post API

// app.post("/", async (req, res) => {
//   let data = await dbConnect();
//   let result = await data.insertOne(req.body);

//   res.send(result);
// });

// //  Put API

// app.put("/", async (req, res) => {
//   let data = await dbConnect();
//   let result = await data.updateOne(
//     {
//       name: "Watch",
//     },
//     { $set: { Price: 320 } }
//   );
//   res.send(result);
// });

// // delete API

// app.delete("/:id", async (req, res) => {
//   console.log(req.params.id);

//   let data = await dbConnect();
//   let result = await data.deleteOne({
//     _id: new mongodb.ObjectId(req.params.id),
//   });

//   res.send(result);
// });
// app.listen(5000);
