require("../config/db.config");
const blogModel = require("../models/blogs.model");

const moongoose = require("mongoose");

const blogs = [
    {titulo:"blog 1", url_imagen:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.entrepren",contenido:"algo1",created_by:"1"},
    {titulo:"blog 2", url_imagen:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.entrepren",contenido:"algo2",created_by:"1"},
    {titulo:"blog 3", url_imagen:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.entrepren",contenido:"algo3",created_by:"1"},
    {titulo:"blog 4", url_imagen:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.entrepren",contenido:"algo4",created_by:"1"},
    {titulo:"blog 5", url_imagen:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.entrepren",contenido:"algo5",created_by:"1"},
    {titulo:"blog 6", url_imagen:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.entrepren",contenido:"algo6",created_by:"1"},
]

blogModel.deleteMany({})
.then(()=>{
    return blogModel.insertMany(blogs)
})
.then(()=>{
    console.log("blogs insertados")
    moongoose.connection.close();
})
.catch((error)=>{
    console.log(error)
    moongoose.connection.close();
})