db.produtos.updateOne({ nome: "Quarteirão com Queijo" }, { $pop: { ingredients: -1 } });
db.produtos.find({ }, { nome: 1, ingredients: 1, _id: 0 });
