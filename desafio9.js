db.produtos.updateOne({ nome: "Cheddar McMelt" }, { $pop: { ingredients: 1 } });
db.produtos.find({ }, { nome: 1, ingredients: 1, _id: 0 });
db.produtos.updateMany({ tags: { $all: ["bovino", "pão"] } }, { $inc: { "vendasPorDia.6": 120 } });
db.produtos.find({ }, { nome: 1, vendasPorDia: 1, _id: 0 });
