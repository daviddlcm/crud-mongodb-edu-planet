require("dotenv").config()
require("./configs/db.config")
const express = require("express")
const app = express()
const PORT = process.env.PORT

const blogRoutes = require("./v1/routes/blogs.route")
const authRoutes = require("./v1/routes/auth.route")

app.use(express.json())
app.use("/api/v1", blogRoutes, authRoutes)

app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`)
})