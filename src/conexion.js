const mongoose=require('mongoose');

mongoose.connect(process.env.URL,{
    useCreateIndex:true,
    useFindAndModify:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})

.then(()=>{
    console.log("conexion exitosa a mongo");
})
.catch(()=>{
    console.log("error de conexion a mongo");
});