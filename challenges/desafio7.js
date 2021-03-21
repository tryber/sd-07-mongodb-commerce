db.produtos.updateMany(
  {},
  { $pull: { ingredientes: { $in: ["cebola"] } },
  },
);

db.produtos.find(
  {},
  { _id: false, nome: 1, ingredientes: 1 },
);
