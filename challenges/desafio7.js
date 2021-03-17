// use("commerce");
db.produtos.updateMany(
  {},
  { $pull: { ingredientes: "cebola" } },
);

// use("commerce");
db.produtos.find(
  { },
  { nome: true, ingredientes: true, _id: false },
);
