import { AzureOpenAI } from "openai";
import * as dotenv from "dotenv";
import { FormProps } from "../types";
import { ChatCompletionCreateParams, ChatCompletionMessageParam } from "openai/resources";
dotenv.config();


// You will need to set these environment variables or edit the following values
const endpoint = "https://travel-app1.openai.azure.com/";
const apiKey = "";
const apiVersion = "2024-05-01-preview";
const deployment = "test-bot"; //The deployment name for your completions API model. The instruct model is the only new model that supports the legacy API.

async function pipeline(params: FormProps) {

  const client = new AzureOpenAI({ endpoint, apiKey, apiVersion, deployment });
  const prompt: ChatCompletionMessageParam[] = [
    { role: "system", content: "You are a helpful assistant, helping people plan vacation trips."}
  ];

  for (let i = 0; i < 1; i++) {
    prompt.push(
      { role: "user", content: `Give me a place to visit in Los Angeles for 3 days time`}
    );
  }

  const result = await client.chat.completions.create({
    messages: prompt,
    model: "",
  });

  console.log(result);
}

pipeline({
  name: "",
  email: "",
  message: ""
}).catch((err) => {
  console.error("The sample encountered an error:", err);
});

module.exports = { pipeline };
