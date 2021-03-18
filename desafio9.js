db.produtos.updateOne({ nome: "Cheddar McMelt" }, { $pop: { ingredients: 1 } });
db.produtos.find({ }, { nome: 1, ingredients: 1, _id: 0 });
