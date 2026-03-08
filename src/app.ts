import express from "express";
import dotenv from "dotenv"
import categorytaggeneratorRouter from "./routes/categoryRoutes"
import impactRoutes from "./routes/impactRoutes"

dotenv.config()

const app=express()

app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Welcome to Rayeva AI System")
})

app.use("/api/v1/category",categorytaggeneratorRouter)
app.use("/api/v1/impact",impactRoutes)

export default app;