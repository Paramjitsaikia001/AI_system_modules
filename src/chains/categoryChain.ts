import { genmodel } from "../config/geminiConfig";
import { caterogyPrompt } from "../prompts/categoryPrompt";

export async function runCategoryChain(description: string) {
    const prompt =await caterogyPrompt.format({description})
    const response =await genmodel.invoke(prompt)

    return response.content
}