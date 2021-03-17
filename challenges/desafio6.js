//
db.produtos.updateMany(
  { nome: { $in: ["Big Mac", "Quarteirão com Queijo"] } },
  {
    $push: {
      ingredientes: { $each: ["ketchup"], $position: -1 },
    },
  }
);

//
db.produtos.find({}, { nome: 1, _id: 0, ingredientes: 1 });
