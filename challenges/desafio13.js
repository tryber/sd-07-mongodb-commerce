const nutriValue = { "valoresNutricionais.percentual": { $gte: 40 } };
const typeValue = { "valoresNutricionais.tipo": "sódio" };

db.produtos.updateOne({ $and: [typeValue, nutriValue] },
  { $addToSet: { tags: "muito sódio" } });

db.produtos.find({}, { nome: 1, tags: 1, _id: 0 });
