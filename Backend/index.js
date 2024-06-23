import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './route/user.route.js'
import cors from 'cors';


const PORT=process.env.PORT_SERVE || 4001;
const URI=process.env.DB_URI

const app=express();
app.use(cors());

dotenv.config();

try{
    mongoose.connect(URI);
    console.log("Connected to DB")
}catch(error){
    console.log("Error: ",error)
}

app.use("/user",userRoute);

app.listen(PORT,function(){
    console.log(`Server is listening on the port ${PORT}`);
});