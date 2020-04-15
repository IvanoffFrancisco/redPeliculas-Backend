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
    recommend:[
        {
            user:{
                type:String,
                require:true,
                unique:true
            },
            coment:String,
            estado:Boolean
        }
    ]
})