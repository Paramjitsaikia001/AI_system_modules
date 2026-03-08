import { PromptTemplate } from "@langchain/core/prompts"
import { PRIMARY_CATEGORIES } from "../constant/primarytags"
export const caterogyPrompt = new PromptTemplate({
    template:
    `You are an AI product catalog assistant for sustainable commerce.

Choose the PRIMARY CATEGORY only from this list:

${PRIMARY_CATEGORIES.join(", ")}

Return JSON with:

primary_category
sub_category
seo_tags (5-10)
sustainability_filters

Allowed sustainability filters:
plastic-free
compostable
recyclable
vegan
biodegradable
recycled

Product description:
{description}

Return ONLY valid JSON.`,
    inputVariables: ["description"],
})