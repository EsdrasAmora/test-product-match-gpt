// import { client } from "./client";
// import productsData from "./products_data_formated.json";

// async function main() {
//   // Prepare a batcher
//   let batcher = client.batch.objectsBatcher();
//   let counter: number = 0;
//   let batchSize: number = 100;
//   let inserted = 0;
//   let errors = 0;

//   productsData.forEach((properties) => {
//     // Construct an object with a class and properties 'answer' and 'question'
//     //@ts-ignore
//     properties.segments = undefined;
//     const obj = {
//       class: "Product",
//       properties,
//     };

//     // add the object to the batch queue
//     batcher = batcher.withObject(obj);

//     // When the batch counter reaches batchSize, push the objects to Weaviate
//     if (counter++ == batchSize) {
//       // flush the batch queue
//       batcher
//         .do()
//         .then(() => {
//           inserted += 1;
//         })
//         .catch((err: Error) => {
//           errors += 1;
//         });

//       // restart the batch queue
//       counter = 0;
//       batcher = client.batch.objectsBatcher();
//     }
//   });

//   // Flush the remaining objects
//   const response = await batcher.do();
//   console.log({ response: response.length, inserted, errors });
// }

// void main();
