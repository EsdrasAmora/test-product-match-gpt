import weaviate from "weaviate-ts-client";
import dotenv from "dotenv";

dotenv.config();
async function main() {
  const client = weaviate.client({
    scheme: "http",
    host: "localhost:8080",
    headers: { "X-OpenAI-Api-Key": process.env.OPENAI_APIKEY! },
  });

  const schemaRes = await client.schema.getter().do();

  console.log("here", schemaRes);
  //   const schemaConfig = {
  //     class: "Product",
  //     vectorizer: "text2vec-openai",
  //   };

  //   const response = await client.schema
  //     .classCreator()
  //     .withClass(schemaConfig)
  //     .do();
  //   console.log("response", response);
}

void main();
