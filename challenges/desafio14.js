db.produtos.updateMany(
  {
    valoresNutricionais: {
      $elemMatch: {
        tipo: "sódio",
        $and: [
          {
            percentual: {
              $gte: 20,
            },
          },
          {
            percentual: {
              $lt: 40,
            },
          },

        ],

      },
    },
  },
  {
    $addToSet: {
      tags: "contém sódio",
    },
  },
);

db.produtos.find({}, {
  nome: 1,
  tags: 1,
  _id: 0,
});
