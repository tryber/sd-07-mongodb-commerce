db.getCollection("produtos")
  .updateMany(
    { valoresNutricionais: {
      $elemMatch: {
        tipo: "sódio",
        percentual: { $gte: 40 },
      },
    } },
    { $push: { tags: "muito sódio" } },
  );

db.getCollection("produtos")
  .find(
    {},
    {
      nome: true,
      tags: true,
      _id: false,
    },
  );
