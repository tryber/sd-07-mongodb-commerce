// use("commerce");
db.produtos.updateMany(
  {
    valoresNutricionais:
    {
      $elemMatch:
      {
        tipo: "sódio",
        percentual: { $gte: 40 },
      },
    },
  },
  { $push: { tags: "muito sódio" } },
);

// use("commerce");
db.produtos.find(
  { },
  { nome: true, tags: true, _id: false },
);
