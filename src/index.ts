import fs from "fs";
import data from "./old_data.json";

const result = data.map((item: any) => {
  return {
    productId: item.c0,
    category: item.c1,
    description: item.c2,
    supplier: item.c3,
    segments: JSON.parse(item.c4),
  };
});

fs.writeFileSync(
  __dirname + "/products_data_formated.json",
  JSON.stringify(result)
);
