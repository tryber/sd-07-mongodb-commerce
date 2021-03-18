//
db.produtos.updateOne(
  { nome: "Big Mac" },
  { $set: { ultimaModificacao: Date() } },
);

//
db.produtos.find({}, { nome: 1, _id: 0, ultimaModificacao: 1 });
