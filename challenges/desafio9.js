db.produtos.updateOne({ nome: { $eq: "Cheddar McMelt" } }, { $pop: { ingredientes: 1 } });

db.produtos.find({ }, { _id: false, nome: true, ingredientes: true });
