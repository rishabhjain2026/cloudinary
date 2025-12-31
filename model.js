const mongoose=require('mongoose');

const modelSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    url:{
        type:String,
    }
})
module.exports=mongoose.model("ImageModel",modelSchema);