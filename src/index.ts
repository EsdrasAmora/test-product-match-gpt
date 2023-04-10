import fs from "fs";

const result = JSON.parse(
  fs.readFileSync(__dirname + "/products_data.json").toString()
).map((item: any) => {
  return {
    id: item.c0,
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
