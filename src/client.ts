import dotenv from "dotenv";
import weaviate, { WeaviateClient } from "weaviate-ts-client";

dotenv.config();
export const client = weaviate.client({
  scheme: "http",
  host: "34.31.52.135:80",
  headers: { "X-OpenAI-Api-Key": process.env.OPENAI_APIKEY! },
});
