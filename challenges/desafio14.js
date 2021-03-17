db.produtos.updateMany(
  // {$and: [{"valoresNutricionais.tipo": "sódio"},{"valoresNutricionais.percentual": {$gte: 40}}]},
  {
    $addToSet: { tags: "contém sódio" },
  },
);
