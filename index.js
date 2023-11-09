import express from "express"
import connectDatabase from "./src/database/db.js"
import userRoute from "./src/routes/user.route.js"
import authRoute from "./src/routes/auth.route.js"
import dotenv from "dotenv"

dotenv.config()

const app = express();
const porta = process.env.PORT || 3000 

connectDatabase()
app.use(express.json())
app.use("/user", userRoute)
app.use("/auth", authRoute)

app.listen(porta, () => console.log(`Servidor rodando na porta: ${porta}`))