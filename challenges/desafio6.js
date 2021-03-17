db.produtos.updateMany(
  {
    $or: [
      {
        nome: "Big Mac",
      },
      {
        nome: "Quarteirão com Queijo",
      },
    ],
  },
  {
    $addToSet: {
      ingredientes: {
        $each: ["bacon"],
      },
    },
  },
);

db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });
