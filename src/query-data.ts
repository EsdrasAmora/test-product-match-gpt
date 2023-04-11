import { client } from "./client";

client.graphql
  .get()
  .withClassName("Product")
  .withFields("category description supplier _additional { distance }")
  .withNearText({ concepts: ["peixe"] })
  .withLimit(2)
  .do()
  .then((res: any) => {
    console.log("good", res);
    console.dir(res.data.Get.Product, { depth: 100 });
  });
// client.graphql
//   .aggregate()
//   .withClassName("Product")
//   .withFields("meta { count }")
//   .do()
//   .then((res: any) => {
//     console.log("good", res);
//     console.dir(res.data.Aggregate.Product, { depth: 100 });
//   });
