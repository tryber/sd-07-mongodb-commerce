db.produtos.updateMany(
  { nome: { $nin: ["McChicken"] } },
  { $addToSet:
      {
        ingredientes: { $each: ["ketchup"] },
      },
  },
);
db.produtos.find(
  {},
  { _id: 0,
    nome: 1,
    ingredientes: 1,
  },
);
