const {Schema,model}=require('mongoose');
const bcrypt=require('bcryptjs')

const UserSchema=new Schema({
    user:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

UserSchema.methods.hashPassword=async (password)=>{
    const salt=await bcrypt.genSalt(10);
    const hash=await bcrypt.hash(password,salt);
    return hash;
}

UserSchema.methods.verificarPassword=async function(password){
    const compare=await bcrypt.compare(password,this.password);
    return compare;
}

module.exports=model(User,UserSchema);