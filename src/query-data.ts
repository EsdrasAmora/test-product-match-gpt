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
  .withClassName("Question")
  .withFields("question answer category _additional { id distance }")
  .withLimit(2)
  .do()
  .then((res: any) => {
    console.dir(res.data.Get.Question, { depth: 100 });
  })
  .catch((err: Error) => {
    console.error("bad", err);
  });
