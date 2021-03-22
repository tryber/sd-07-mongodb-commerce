db.produtos.updateMany(
  { nome: { $ne: "McChicken" } },
  { $push: { ingredientes: "ketchup" } },
);

db.produtos.find(
  {},
  { _id: false, nome: true, ingredientes: true },
);
