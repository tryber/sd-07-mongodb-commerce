// db.movies2.updateOne(
//   { title: "Batman", "cast.character": "Coringa" },
//   { $push: { "cast.$.actor": ["Heath Ledger"] } }
// );

db.produtos.updateMany(
  { "valoresNutricionais.2.percentual": { $gte: 40 } },
  { $push: { tags: "muito sódio" } }
);

db.produtos.find({}, { _id: 0, nome: 1, tags: 1 });
