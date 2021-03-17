// use("commerce");
db.produtos.updateMany(
  { nome: { $in: ["Big Mac", "Quarteirão com Queijo"] } },
  { $push: { ingredientes: "bacon" } },
);

// use("commerce");
db.produtos.find(
  { },
  { nome: true, ingredientes: true, _id: false },
);
