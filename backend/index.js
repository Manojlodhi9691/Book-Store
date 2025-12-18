import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoute from "./route/user.route.js";

const app= express();

import bookRoute from './route/book.route.js'
app.use(cors());
dotenv.config();
const PORT= process.env.PORT||4001;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//connect to mongo db

const URI=process.env.MongoDBURI
mongoose
  .connect(URI)
  .then(() => console.log(" Connected to MongoDB"))
  .catch(err => console.log(" MongoDB connection error:", err));




//defining route
app.use("/book",bookRoute);
app.use('/user',userRoute);
app.listen(PORT, () => { 
    console.log(` Server is listening on port ${PORT}`);
    console.log(process.env.PORT);
});