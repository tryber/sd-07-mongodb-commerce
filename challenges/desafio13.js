db.getCollection("produtos")
  .updateMany(
    { valoresNutricionais: { $elemMatch: {
      tipo: "sódio", percentual: { $gte: 40 },
    } } },
    { $addToSet: { tags: "muito sódio" } },
    { upsert: true },
  );
db.getCollection("produtos")
  .find({}, { _id: 0, nome: 1, tags: 1 });
