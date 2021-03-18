db.produtos.updateMany({}, { $pull: { ingredients: "cebola" } });
db.produtos.find({ }, { nome: 1, ingredients: 1, _id: 0 });
