db.produtos.updateMany(
  { nome: { $exists: true, $in: ["Big Mac", "Quarteirão com Queijo"] } },
  {
    $push: {
      ingredientes: "bacon",
    },
  },
  { upsert: true },
);

db.produtos.find({}, { _id: 0, ingredientes: 1, nome: 1 });
