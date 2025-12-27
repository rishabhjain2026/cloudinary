const mongoose=require('mongoose');

const modelSchema=new mongoose.Schema({
    imageUrl:{
        type:String,
    }
})
module.exports=mongoose.model("ImageModel",modelSchema);