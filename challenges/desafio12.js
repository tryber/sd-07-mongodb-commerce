db.produtos.updateMany(
  {},
  { $push: {
    valoresNutricionais: {
      $each: [],
      $sort: { percentual: -1 }, // feito com ajuda do código @rafaelmguimaraes
    },
  } },
);

db.produtos.find(
  {},
  { _id: false, nome: 1, valoresNutricionais: 1 },
);
