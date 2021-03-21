db.produtos.updateOne({ nome: "Cheddar McMelt" }, { $pop: { ingredientes: 1 } });

db.produtos.find({})
  .projection({ _id: 0, nome: 1, ingredientes: 1 });
