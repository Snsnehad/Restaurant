import mongoose from "mongoose";

export const dbConnection = ()=>{
  mongoose.connect(process.env.MONGO_URL, {
    dbName: "RESTAURANT"
  }).then(()=>{
    console.log("Connected to Mongodb");
  }).catch((error)=>{
    console.log(error);
  })
}