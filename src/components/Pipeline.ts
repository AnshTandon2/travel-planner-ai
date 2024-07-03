import { parameters } from "../types";
const { AzureOpenAI } = require("openai");

// You will need to set these environment variables or edit the following values
const endpoint = "https://travel-app1.openai.azure.com/";
const apiKey =  process.env.Key;
const apiVersion = "2024-04-01-preview";
const deployment = "gpt-35-turbo"; //The deployment name for your completions API model. The instruct model is the only new model that supports the legacy API.

async function pipeline(params: parameters) {

  const client = new AzureOpenAI({ endpoint, apiKey, dangerouslyAllowBrowser: true, apiVersion, deployment });

  const result = await client.chat.completions.create({
    messages: [
      { role: "system", content: "You are a helpful assistant, helping people plan vacation trips. Do not output anything other than JSON"},
      { role: "user", content: `I am a person looking to plan a vacation from ${params.starting_location} 
      to ${params.ending_location} for ${params.duration} days. Find activities that in total fall
      within ${params.budget} dollars`},
      { role: "user", content: `Output multiple itineraries in the form of a list of JSON objects which are based on the information previously provided 
      and follow the given format:

      {
        "title": string;
        "subtitle": string;
        "locations": string[];
        "descriptions": string[];
        "times (hrs)": number[];
        "costs ($)": number[];
      }
      
      There should be at least 3 itineraries and at most 6`}
    ],
    model: "",
  });

  return result.choices[0].message.content;
}

export default pipeline;
