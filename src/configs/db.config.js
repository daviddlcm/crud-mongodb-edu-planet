require("dotenv").config()
const moongose = require('mongoose');

moongose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('conectado a mongoDB');
})
.catch((err) => {
    console.log('error al conectar a mongoDB', err);
})