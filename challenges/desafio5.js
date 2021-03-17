db.produtos.updateMany(
  {
    $or: [
      { nome: "Big Mac" },
      { nome: "Quarteirão com Queijo" },
      { nome: "Cheddar McMelt" },
      { nome: "Extra Chicken" },
    ],
  },
  { $addToSet: {
    ingredientes: "ketchup",
  },
  },
);

db.produtos.find(
  { },
  { nome: 1, ingredientes: 1, _id: 0 },
);
