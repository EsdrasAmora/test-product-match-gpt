import weaviate, { WeaviateClient } from "weaviate-ts-client";
import dotenv from "dotenv";

dotenv.config();
const client = weaviate.client({
  scheme: "http",
  host: "localhost:8080",
  headers: { "X-OpenAI-Api-Key": process.env.OPENAI_APIKEY! },
});

client.graphql
  // .get()
  .aggregate()
  .withClassName("Product")
  .withFields("meta { count }")
  // .withFields("meta { count } ")
  // .withNearText({ concepts: ["calorico"] })
  // .withObjectLimit(10)
  // .withSort([{ path: ["description"], order: "asc" }])
  // .withLimit(10)
  // .withGroup({ force: 0.2, type: "description" })
  .do()
  .then((res: any) => {
    console.log("good", res);
    console.dir(res.data.Aggregate.Product, { depth: 100 });
    // console.dir(res.data.Get.Product, { depth: 100 });
  });

// client.graphql
//   .get()
//   .withClassName("Product")
//   // .withGroup({ force: 0.1, type: "text2vec-openai" })
//   // .withFields("category description segments supplier")
//   // .withNearText({ concepts: ["ovos"] })
//   // .withLimit(10)
//   .do()
//   .then((res: any) => {
//     console.log("good", res);
//     console.dir(res.data.Get.Product, { depth: 100 });
//   })
//   .catch((err: Error) => {
//     console.error("bad", err);
//   });
