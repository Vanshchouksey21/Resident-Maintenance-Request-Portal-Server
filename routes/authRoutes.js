const express = require("express")
const { loginController, closeController } = require("../controllers/authController")
const authRouter = express.Router()


authRouter.post("/login" ,loginController )

authRouter.put("/close/:_id" ,closeController)


module.exports = authRouter
