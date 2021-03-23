db.produtos.updateMany({}, { $pull: { ingredientes: { $all: ["cebola"] } } });

db.produtos.find({}, { _id: false, nome: true, ingredientes: true });
