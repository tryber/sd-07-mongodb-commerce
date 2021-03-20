db.produtos.updateMany({}, { $push: { vendasPorDia: { $each: [0, 0, 0, 0, 0, 0, 0] } } });
db.produtos.updateMany({ nome: "Big Mac" }, { $inc: { "vendasPorDia[2]": 60 } });
db.produtos.updateMany({ tags: { $elemMatch: { $eq: { $in: ["bovino", "pão"] } } } }, { $inc: { "vendasPorDia[6]": 120 } });
db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });
