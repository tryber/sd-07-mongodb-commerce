db.produtos.find({ $expr: { $gt: ["$curtidas", "$vendidos"] } }).projection({ _id: 0, nome: 1 });
