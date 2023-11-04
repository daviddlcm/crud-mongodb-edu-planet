const userModel = require('../models/usuario.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltos = parseInt(process.env.SALTOS)
const singUp = async (req, res) => {
    const result = await userModel.find({username:req.body.username})
    if(result[0]){
        return res.status(200).json({
            message:"usuario ya agregado"
        })
    }
    const user = new userModel( {
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password,saltos),
    })
    const usuarioCreated = user.save()

    const token = jwt.sign({id:usuarioCreated._id},process.env.SECRET,{
        expiresIn: 86400 // son 24 horas
    })
    return res.status(200).json({
        message:"sign up",
        token:token
    })
}
const singIn = async (req, res) => {
    const usuarioFound = await userModel.find({username:req.body.username})
    if(!usuarioFound[0]){
        return res.status(404).json({
            message:"usuario o password incorrectos"
        })
    }
    const matchPassword = bcrypt.compareSync(req.body.password,usuarioFound[0].password)
    if(!matchPassword){
        return res.status(404).json({
            message:"usuario o password incorrectos"
        })
    }
    const token = jwt.sign({id:usuarioFound.id_usuario},process.env.SECRET    ,{
        expiresIn: 86400
    })
    return res.status(200).json({
        message:"sign in",
        token: token,
    })
}
module.exports = {
    singUp,
    singIn,
}