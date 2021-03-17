db.produtos.updateMany({ nome: { $not: { $eq: "McChicken" } } }, { $push: { ingredientes: "ketchup" } });

db.produtos.find({}, { _id: false, nome: true, ingredientes: true });
