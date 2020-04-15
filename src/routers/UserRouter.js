const {Router}=require('express');
const route=Router();

const movies=require('../models/MovieModel');

//nueva movie
route.post("/postmovie",async (req,res)=>{
    const {name,image,category,description,director,elenco,rank} = req.body;

    const movie=new movies({
        name,
        image,
        category,
        description,
        director,
        elenco, 
        rank
    })
    const vermovie=await movie.save();
    res.status(2010).json({info:"nueva pelicula"});
})

//obtener movies
route.get("/getmovies",(req,res)=>{
    const getmovies=movies.find();
    res.json(getmovies);
})

module.exports=route;