db.produtos.updateOne(
  {},
  { $push: { tags: { $each: ["tasty", "combo"], $sort: 1 } } },
);

db.produtos.find(
  {},
  { nome: 1, tags: 1, _id: false },
);
