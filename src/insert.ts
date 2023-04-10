import weaviate from "weaviate-ts-client";
import dotenv from "dotenv";

dotenv.config();
async function main() {
  const client = weaviate.client({
    scheme: "http",
    host: "localhost:8080",
    headers: { "X-OpenAI-Api-Key": process.env.OPENAI_APIKEY! },
  });

  // Get the data from the data.json file
  const data = await getJsonData();

  // Prepare a batcher
  let batcher = client.batch.objectsBatcher();
  let counter: number = 0;
  let batchSize: number = 100;

  interface Question {
    Answer: string;
    Question: string;
    Category: string;
  }

  data.forEach((question: Question) => {
    // Construct an object with a class and properties 'answer' and 'question'
    const obj = {
      class: "Question",
      properties: {
        answer: question.Answer,
        question: question.Question,
        category: question.Category,
      },
    };

    // add the object to the batch queue
    batcher = batcher.withObject(obj);

    // When the batch counter reaches batchSize, push the objects to Weaviate
    if (counter++ == batchSize) {
      // flush the batch queue
      batcher
        .do()
        .then((res: any) => {
          console.log(res);
        })
        .catch((err: Error) => {
          console.error(err);
        });

      // restart the batch queue
      counter = 0;
      batcher = client.batch.objectsBatcher();
    }
  });

  // Flush the remaining objects
  const response = await batcher.do();
  console.log(response);
}

async function getJsonData(): Promise<any> {
  const file: Response = await fetch(
    "https://raw.githubusercontent.com/weaviate-tutorials/quickstart/main/data/jeopardy_tiny.json"
  );
  return file.json();
}

void main();
