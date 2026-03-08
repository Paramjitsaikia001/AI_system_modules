import "dotenv/config";
import {ChatGoogleGenerativeAI} from "@langchain/google-genai"

export const genmodel = new ChatGoogleGenerativeAI({
    model: "gemini-2.5-flash-lite",
    apiKey: process.env.GOOGLE_API_KEY ,
    temperature: 0.9,
})