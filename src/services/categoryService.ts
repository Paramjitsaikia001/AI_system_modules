import { log } from "node:console";
import { runCategoryChain } from "../chains/categoryChain";
import { Product } from "../models/Product";

export async function generateCategoryTags(description :string){

    const airesponse= await runCategoryChain(description)

    try {
        const cleaned = (airesponse as string)
          .replace(/```json/g, "")
          .replace(/```/g, "")
          .trim();

        const parsed = JSON.parse(cleaned);
        const SavedProduct = await Product.create({
            description,
            ...parsed
        })
        return SavedProduct
        
    } catch (error) {
        throw new Error("Invalid JSON return from AI")
    }
}