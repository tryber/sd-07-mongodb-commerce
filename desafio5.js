db.produtos.updateMany(
  { nome: { $not: { $regex: /McChiken/ } } },
  { $addToSet: { ingredientes: "ketchup" } },
);

db.produtos.find(
  {},
  { nome: 1, ingredientes: 1, _id: false },
);
