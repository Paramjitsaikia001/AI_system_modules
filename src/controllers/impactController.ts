import { success } from "zod";
import { generateImpactReport } from "../services/impactService";
import { Request,Response } from "express";

export async function createImpactReport(req:Request,res:Response){
    try {
        const { product, quantity } = req.body;

        if (!product || !quantity) {
            return res.status(400).json({ error: "Product and quantity are required." });
        }

        const report = await generateImpactReport(product, quantity);
        res.status(201).json({
            success: true,
            data: report
        });
    } catch (error) {
        console.error("Error generating impact report:", error);
        res.status(500).json({ error: "An error occurred while generating the impact report." });
    }
}