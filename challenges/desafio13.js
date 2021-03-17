const valorNpercentual = { "valoresNutricionais.percentual": { $gte: 40 } };
const valorNtipo = { "valoresNutricionais.tipo": "sódio" };

db.produtos.updateOne(
  {
    $and: [valorNtipo, valorNpercentual],
  },
  { $addToSet: { tags: "muito sódio" } },
);

db.produtos.find({}, { nome: 1, tags: 1, _id: 0 });
