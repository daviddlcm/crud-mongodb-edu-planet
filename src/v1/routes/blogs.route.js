const express = require("express")
const router = express.Router()
const blogController = require("../../controllers/blogs.controller")

const verifyToken = require("../../middlewares/auth.middleware")

router.post("/blog",verifyToken, blogController.create)
router.get("/blog/:id", blogController.getById)
router.get("/blog", blogController.getAll)
router.patch("/blog/:id", verifyToken,blogController.update)
router.delete("/blog/:id", verifyToken,blogController.deleteLogico)
router.delete("/blog/fisico/:id",verifyToken, blogController.deleteFisico)
module.exports = router;