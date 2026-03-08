import { PromptTemplate } from "@langchain/core/prompts";

export const ImpactPrompt = new PromptTemplate({
  template:
    `
    You are a sustainability impact analyst.

Using the environmental data provided, generate a sustainability report.

Return ONLY valid JSON in this format:

{{
  "plastic_saved_grams": number,
  "carbon_avoided_kg": number,
  "local_sourcing_impact": "",
  "impact_statement": ""
}}

Environmental Data:
Plastic saved: {plastic_saved_grams} grams
Carbon avoided: {carbon_avoided_kg} kg
Product: {product}
Quantity: {quantity}
`,
  inputVariables: [
    "plastic_saved_grams",
    "carbon_avoided_kg",
    "product",
    "quantity"
  ]
})