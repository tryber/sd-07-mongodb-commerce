db.produtos.updateMany(
  { nome: "Quarteirão com Queijo" },
  { $unset: { "ingredientes.0": true } },
);

db.produtos.find(
  {},
  { _id: false, nome: true, ingredientes: true },
);
