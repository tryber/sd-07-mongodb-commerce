db.produtos.updateMany(
  {},
  {
    $set:
    { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] },
  },
  { upsert: true },
);

db.produtos.updateOne(
  { nome: "Big Mac" },
  { $inc: { "vendasPorDia.3": 60 } },
);

db.produtos.updateMany(
  { tags: { $all: ["bovino", "pão"] } },
  { $inc: { "vendasPorDia.6": 120 } },
);

db.produtos.find(
  {},
  { _id: false, nome: 1, vendasPorDia: 1 },
);

/* feito com ajuda do código do @rafaelmguimaraes */
