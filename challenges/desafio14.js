db.produtos.updateMany(
  {
    $and: [
      {
        valoresNutricionais: {
          $elemMatch: { tipo: "sódio", percentual: { $gt: 20 } },
        },
      },
      {
        valoresNutricionais: {
          $elemMatch: { tipo: "sódio", percentual: { $lt: 40 } },
        },
      },
    ],
  },
  {
    $push: {
      tags: {
        $each: ["contém sódio"],
      },
    },
  },
  { upsert: true },
);

db.produtos.find({}, { _id: 0, nome: 1, tags: 1 });
