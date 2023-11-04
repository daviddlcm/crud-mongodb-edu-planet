const blogModel = require('../models/blog.model');

const create = async (req, res) => {
    try{
        let blog = new blogModel({
            titulo: req.body.titulo,
            url_imagen: req.body.imagen,
            contenido: req.body.contenido,
            created_by: req.body.created_by
        })
        await blog.save()
        return res.status(201).json({
            message:"blog creado con exito"
        })
    }catch(error){
        return res.status(500).json({
            message: "error al crear un blog",
            error: error.message
        })
    }
}
const getById = async (req, res) => {
    try{
        const blogId = req.params.id;
        const blog = await blogModel.findById(blogId);
        if(!blog){
            return res.status(404).json({
                message: "blog no encontrado"
            })
        }
        return res.status(200).json({
            message: "blog encontrado",
            data: blog
        })
    }catch(error){
        return res.status(500).json({
            message: "error al obtener un blog",
            error: error.message
        })
    }
}
const getAll = async (req, res) => {
    try{
        const blogs = await blogModel.find({deleted: false});
        return res.status(200).json({
            message: "blogs encontrados",
            data: blogs
        })
    }catch(error){
        return res.status(500).json({
            message:"error al obtener todos los blogs",
            error: error.message,
        })
    }
}
const update = async (req, res) => {
    try{
        const blogId = req.params.id;
        const datosActualizar ={
            ...req.body,
            updated_at: Date.now(),
            updated_by: "1",
        }
        const blogActualizado = await blogModel.findByIdAndUpdate(blogId, datosActualizar);
        if(!blogActualizado){
            return res.status(404).json({
                message: "blog no encontrado",
            })
        }
        return res.status(200).json({
            message: "blog actualizado con exito",
        })
    }catch(error){
        return res.status(500).json({
            message:"error al actualizar un blog",
            error: error.message,
        })
    }
}
const deleteLogico = async (req, res) => {
    try{
        const blogId = req.params.id;
        const blogEliminado = await blogModel.findByIdAndUpdate(blogId,{
            deleted: true,
            deleted_at: new Date(),
            deleted_by: "1",
        })
        if(!blogEliminado){
            return res.status(404).json({
                message: "blog no encontrado",
            })
        }
        return res.status(200).json({
            message: "blog eliminado con exito",
        })
    }catch(error){
        return res.status(500).json({
            message:"error al eliminar un blog",
            error: error.message,
        })
    }
}
const deleteFisico = async (req, res) => {
    try{
        const blogId = req.params.id;
        const usuarioEliminado = await blogModel.findByIdAndDelete(blogId);
        if(!usuarioEliminado){
            return res.status(404).json({
                message: "blog no encontrado",
            })
        }
        return res.status(200).json({
            message: "blog eliminado con exito",
        })
    }catch(error){
        return res.status(500).json({
            message:"error al eliminar un blog",
            error: error.message,
        })
    }
}

module.exports = {
    create,
    getById,
    getAll,
    update,
    deleteLogico,
    deleteFisico
}