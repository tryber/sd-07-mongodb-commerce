// use("commerce");
db.produtos.updateMany(
  {},
  {
    $set:
    { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] },
  },
  { upsert: true },
);

// use("commerce");
db.produtos.updateOne(
  { nome: "Big Mac" },
  { $inc: { "vendasPorDia.3": 60 } },
);

// use("commerce");
db.produtos.updateMany(
  { tags: { $all: ["bovino", "pão"] } },
  { $inc: { "vendasPorDia.6": 120 } },
);

// use("commerce");
db.produtos.find(
  { },
  { nome: true, vendasPorDia: true, _id: false },
);
