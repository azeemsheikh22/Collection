// const dbConnect = require("./mongodb");

// const insert = async () => {
//   const db = await dbConnect();
//   const result = db.insertOne({
//     name: "Watch",
//     price: 231,
//     brand: "G Shoc",
//     Category: "Watch",
//   });
// };

// insert();


// const dbConnect = require('./mongodb')


// const main = async()=>{
//     let data= await dbConnect();
//     data = await data.find().toArray();
//     console.log(data)
// }

// main()

// const {MongoClient} = require('mongodb')
// const {MongoClient} = require('mongodb');                                                                                                                                                                                                                             require('mongodb')
// const url ='mongodb://0.0.0.0:27017';
// const database ='ProjectS'
// const client = new MongoClient(url);

// async function getData(){

//     let result = await client.connect();
//     let db = result.db(database);
//     let collection = db.collection('fahad1');
//     let Data = await collection.find({}).toArray();

//     console.log(Data);
// }
// getData();