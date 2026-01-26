require("dotenv").config()
const express = require("express")
const cors = require("cors")
const router = require("./routes/maintenanceRequestsRouter")
const connectDB = require("./config/db")
const authRouter = require("./routes/authRoutes")

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api", router)
app.use("/api", authRouter)
app.use("/api", authRouter)

app.get("/", (req, res) => {
  res.json({ message: "CORS working" })
})


connectDB();

app.listen(process.env.PORT, () => {
  console.log(`App is running on ${process.env.PORT}`)
})
