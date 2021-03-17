db.produtos.count({ nome: { $regex: /Mc/i } }, { _id: 0, nome: 1 });
