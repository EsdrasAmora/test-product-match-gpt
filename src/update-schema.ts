import { client } from "./client";

async function main() {
  const schemaRes = await client.schema.getter().do();

  console.log("here", schemaRes);
  // const schemaConfig = {
  //   class: "Product",
  //   vectorizer: "text2vec-openai",
  // };

  // const response = await client.schema
  //   .classCreator()
  //   .withClass(schemaConfig)
  //   .do();
  // console.log("response", response);
}

void main();
