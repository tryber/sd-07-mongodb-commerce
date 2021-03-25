db.produtos.updateMany(
  { nome: { $ne: "McChiken" } },
  { $addToSet:{ ingredientes:  "ketchup" } },
);

db.produtos.find(
  {},
  { nome: 1, ingredientes: 1, _id: false },
);
