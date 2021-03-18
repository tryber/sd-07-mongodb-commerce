db.produtos.updateMany({ nome: { $in: ["Big Mac", "Quarteirão com Queijo"] } }, { $addToSet: { ingredients: "bacon" } });
db.produtos.find({ }, { nome: 1, ingredients: 1, _id: 0 });
