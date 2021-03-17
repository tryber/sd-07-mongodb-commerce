db.produtos.updateMany(
  {
    $and: [
      { "valoresNutricionais.2.percentual": { $lt: 40 } },
      { "valoresNutricionais.2.percentual": { $gt: 20 } },
    ],
  },
  { $push: { tags: "contém sódio" } }
);

db.produtos.find({}, { _id: 0, nome: 1, tags: 1 });
