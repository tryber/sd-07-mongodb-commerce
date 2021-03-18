// https://docs.mongodb.com/manual/reference/operator/query/type/
// https://github.com/tryber/sd-06-mongodb-commerce/pull/103/files

db.produtos.updateOne(
  { nome: "Big Mac" },
  { $currentDate: { ultimaModificacao: { $type: "date" } } },
);

db.produtos.find({ ultimaModificacao: { $exists: 1 } }, { _id: 0, nome: 1 });
