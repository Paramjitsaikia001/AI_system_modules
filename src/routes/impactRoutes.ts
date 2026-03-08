import { createImpactReport } from "../controllers/impactController";
import express from "express";

const router = express.Router();

router.post("/generate", createImpactReport);

export default router;