const express=require('express');
const app=express();

app.set("PORT",process.env.PORT || 4000);

//middlewares
app.use(express.json());

module.exports=app;