// use("commerce");
db.produtos.updateOne(
  { nome: "Quarteirão com Queijo" },
  { $pop: { ingredientes: -1 } },
);

// use("commerce");
db.produtos.find(
  { },
  { nome: true, ingredientes: true, _id: false },
);
