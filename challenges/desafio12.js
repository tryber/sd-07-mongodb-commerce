db.getCollection("produtos")
  .updateMany(
    {},
    { $push: { valoresNutricionais: { $each: [], $sort: { percentual: -1 } } } },
    { upsert: true },
  );
db.getCollection("produtos")
  .find({}, { _id: 0, nome: 1, valoresNutricionais: 1 });
