db.produtos.updateMany({}, { $pull: { ingredientes: { $in: ["cebola"] } } });

db.produtos.find({})
  .projection({ _id: 0, nome: 1, ingredientes: 1 });
