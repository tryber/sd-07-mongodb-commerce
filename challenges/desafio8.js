db.produtos.updateOne({ nome: "Quarteirão com Queijo" }, { $pop: { ingredientes: -1 } });

db.produtos.find({})
  .projection({ _id: 0, nome: 1, ingredientes: 1 });
