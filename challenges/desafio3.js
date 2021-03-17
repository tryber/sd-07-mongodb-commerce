db.produtos.updateMany(
  { },
  { $set: {
    avaliação: NumberInt("0"),
  },
  },
);

db.produtos.updateMany(
  { tags: "bovino" },
  { $inc: { avaliação: 5 } },
);

db.produtos.updateMany(
  { tags: "ave" },
  { $inc: { avaliação: 3 } },
);

db.produtos.find(
  { },
  {
    nome: 1,
    avaliação: 1,
    _id: 0,
  },
);
