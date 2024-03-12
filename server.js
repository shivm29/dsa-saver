import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import authRoutes from "./routes/authRoutes.js"

// creating REST app
const app = express()
dotenv.config()

// middlewares
app.use(express.json())

// connecting database : 
connectDB();

// routes
app.use('/api/v1/auth', authRoutes);


app.get("/", (req, res) => {
    res.send("<h1>Server Running YAAY!</h1>")
})

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})