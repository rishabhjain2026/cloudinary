const mongoose=require('mongoose');

const modelSchema=new mongoose.Schema({
    url:{
        type:String,
    }
})
module.exports=mongoose.model("ImageModel",modelSchema);