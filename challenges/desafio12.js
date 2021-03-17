// use("commerce");
db.produtos.updateMany(
  {},
  {
    $push:
    {
      valoresNutricionais:
      {
        $each: [],
        $sort: { percentual: -1 },
      },
    },
  },
);

// use("commerce");
db.produtos.find(
  { },
  { nome: true, valoresNutricionais: true, _id: false },
);
