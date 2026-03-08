import { ImpactReport } from "../models/ImpactReport";
import { runImpactChain } from "../chains/impactChain";
import { calculateImpact } from "../utils/impactCalculator";

export async function generateImpactReport(product:string,quantity:number){
    const impact = calculateImpact(quantity);

    const aiResponse=await runImpactChain({
        ... impact,
        product,
        quantity

    });

    const result = (aiResponse as string).replace(/```json/g, '').replace(/```/g, '').trim();

    const parsed= JSON.parse(result);
    const savedResult = await ImpactReport.create({
        product,
        quantity,
        ... parsed
    });

    return savedResult;
}