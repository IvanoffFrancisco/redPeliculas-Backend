const express=require('express');
const app=express();

//config
app.set("PORT",process.env.PORT || 4000);

//middlewares
app.use(express.json());

//routes
app.use(require('./routers/UserRouter'));

module.exports=app;