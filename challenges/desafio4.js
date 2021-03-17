db.produtos.updateMany(
  { },
  { $set: {
    avaliação: NumberInt("0"),
  },
  },
);

db.produtos.find(
  { },
  {
    nome: 1,
    avaliação: 1,
    _id: 0,
  },
);
