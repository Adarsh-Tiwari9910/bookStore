import express from "express"
 import { mongoose } from "mongoose";
 import  "dotenv/config";
 import bookRoute from './route/book.route.js'
 import userRoute from './route/user.route.js'
 import cors from "cors";
 import bodyParser from "body-parser";
 
  
//  
const app = express()
const PORT=process.env.PORT||4000;
const URI=process.env.MongoDBURI;
 app.use(cors());
 app.use(express.json());
 app.use(bodyParser.urlencoded({
  extended:true
 }))
 
 app.use(express.json());
 
 

// mongo
 
 try{
     mongoose.connect(URI,{
      useNewUrlParser:true,
      useUnifiedTopology:true
  
});
console.log("connected to mongodb")
 }catch(error){
console.log(error)
 }

 
// defining routes
 app.use("/book",bookRoute);
 app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Server app ${URI} listening on port ${PORT}`)
})