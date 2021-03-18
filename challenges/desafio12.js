db.getCollection("produtos")
  .updateMany(
    {},
    { $push: { valoresNutricionais: { $each: [], $sort: { percentual: -1 } } } },
  );

db.getCollection("produtos")
  .find(
    {},
    {
      nome: true,
      valoresNutricionais: true,
      _id: false,
    },
  );
