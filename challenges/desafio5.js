db.produtos.updateMany(
  { nome: { $nin: ["McChicken"] } },
  { $addToSet: { ingredientes: "ketchup" },
  },
);

db.produtos.find(
  {},
  { _id: false, nome: 1, ingredientes: 1 },
);
