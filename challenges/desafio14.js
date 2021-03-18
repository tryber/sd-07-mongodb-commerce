db.produtos.updateMany(
  {
    valoresNutricionais: {
      $elemMatch: {
        $and: [{ tipo: "sódio" }, { percentual: { $gt: 20, $lt: 40 } }],
      },
    },
  },
  { $addToSet: { tags: { $each: ["contém sódio"] } } },
);

db.produtos.find(
  {
    $and: [
      { "valoresNutricionais.tipo": "sódio" },
      { "valoresNutricionais.percentual": { $gt: 20, $lt: 40 } },
    ],
  },
  { nome: 1, tags: 1, _id: 0 },
);
