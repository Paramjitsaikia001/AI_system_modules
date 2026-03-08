import express from "express";
import { CategoryTagGenerator } from "../controllers/categoryController";

const router = express.Router()

router.post("/generate",CategoryTagGenerator)

export default router