db.getCollection("produtos").updateMany(
  {},
  {
    $set: { avaliacao: NumberInt("0") },
  },
);

db.getCollection("produtos").updateMany(
  { tags: "bovino" },
  { $inc: { avaliacao: 5, "metrics.orders": 1 } },
);

db.getCollection("produtos").updateMany(
  { tags: "ave" },
  { $inc: { avaliacao: 3, "metrics.orders": 1 } },
);

db.getCollection("produtos").find(
  {},
  {
    nome: 1,
    avaliacao: 1,
    _id: 0,
  },
);
