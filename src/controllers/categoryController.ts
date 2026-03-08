import { error, log } from "node:console";
import { generateCategoryTags } from "../services/categoryService";
import { Request, Response } from "express";
export async function CategoryTagGenerator(req: Request, res: Response) {

    try {
        const { description } = req.body

        if (!description) {
            return res.status(400).json({
                error: "Product desciption is required"
            });
        }

        const result = await generateCategoryTags(description)

        res.json({
            success: true,
            data: result
        })
        
    } catch (error) {
        return res.status(400).json({
                error: "Category tag generation failed."
            });

    }
}