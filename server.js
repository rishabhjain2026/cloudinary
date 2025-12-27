const mongoose = require('mongoose');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const router=require("./routes")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.mongo_url).then(()=>{
    console.log("connected to mongodb");
}).catch((error)=>{
    console.log("error in connecting to database")
    console.log(error);
})


app.use("/api",router);
const port=process.env.PORT

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})