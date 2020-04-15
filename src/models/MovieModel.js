const {Schema,model}=require('mongoose');

const MovieSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    director:{
        type:String
    },
    elenco:{
        type:String
    },
    rank:{
        type:Number
    }
})

module.exports=model("movie",MovieSchema);