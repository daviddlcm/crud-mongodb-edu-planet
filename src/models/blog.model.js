const mongoose = require('mongoose');
const blogsSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        unique: true
    },
    url_imagen: {
        type: String,
        required: true
    },
    contenido: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: new Date()
    },
    created_by: {
        type: String,
        required: true
    },
    updated_at: {
        type: Date,
        default: null
    },
    updated_by: {
        type: String,
        default: null,
    },
    deleted:{
        type: Boolean,
        default: false,
        required: false,
    },
    deleted_at: {
        type: Date,
        default: null
    },
    deleted_by: {
        type: String,
        default: null
    }
})
module.exports = mongoose.model('blog', blogsSchema)