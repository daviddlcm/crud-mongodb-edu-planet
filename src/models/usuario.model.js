const moongoose = require('mongoose');
const usuarioSchema = moongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true,
    },
})
module.exports = moongoose.model('usuario', usuarioSchema)