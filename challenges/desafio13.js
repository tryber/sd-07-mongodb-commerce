db.produtos.updateMany(
  {
    valoresNutricionais: {
      $elemMatch: {
        percentual: { $gte: 40 },
      },
    },
  },
  {
    $push: {
      tags: "muito sódio",
    },
  },
);
db.produtos.find({}, { _id: 0, nome: 1, tags: 1 });
