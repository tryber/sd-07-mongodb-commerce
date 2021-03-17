db.produtos.updateMany(
  { $nor:
    [
      { nome: "McChicken" },
      { ingredientes: "ketchup" },
    ],
  },
  { $push: { ingredientes: "ketchup" } },
);

db.produtos.find(
  {},
  {
    _id: 0,
    ingredientes: 1,
  },
);
