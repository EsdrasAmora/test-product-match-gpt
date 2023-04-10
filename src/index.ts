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

  // console.log("here", schemaRes);
  // const schemaConfig = {
  //   class: "Products",
  //   vectorizer: "text2vec-openai",
  // };

  // const response = await client.schema
  //   .classCreator()
  //   .withClass(schemaConfig)
  //   .do();
  // console.log("response", response);

  // const img = readFileSync("./img/hi-mom.jpg");

  // const b64 = Buffer.from(img).toString("base64");

  // await client.data
  //   .creator()
  //   .withClassName("Meme")
  //   .withProperties({
  //     image: b64,
  //     text: "matrix meme",
  //   })
  //   .do();
}

void main();
