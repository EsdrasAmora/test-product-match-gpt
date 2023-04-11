import weaviate, { WeaviateClient } from "weaviate-ts-client";
import dotenv from "dotenv";

dotenv.config();
const client = weaviate.client({
  scheme: "http",
  host: "localhost:8080",
  headers: { "X-OpenAI-Api-Key": process.env.OPENAI_APIKEY! },
});

client.graphql
  .get()
  .withClassName("Product")
  .withFields("category description segments supplier")
  .withNearText({ concepts: ["ovos"] })
  .withLimit(10)
  .do()
  .then((res: any) => {
    console.log("good", res);
    console.dir(res.data.Get.Product, { depth: 100 });
  })
  .catch((err: Error) => {
    console.error("bad", err);
  });
