import { ImpactPrompt } from "../prompts/impactPrompt";
import { genmodel } from "../config/geminiConfig";
export async function runImpactChain(data:any) {
    const prompt= await ImpactPrompt.format(data)

    const response = await genmodel.invoke(prompt)

    return response.content

}
