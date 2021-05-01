db.produtos.updateMany({ nome: { $ne: "McChicken" } }, { $addToSet: { ingredientes: "Ketchup" } });

db.produtos.find({}, { _id: false, nome: true, ingredientes: true });
