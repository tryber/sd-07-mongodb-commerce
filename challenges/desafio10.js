const weekDays = Array(7).fill(0);

db.produtos.updateMany({}, { $set: { vendasPorDia: weekDays } });

db.produtos.updateOne({ nome: "Big Mac" }, { $inc: { "vendasPorDia.3": 60 } });

db.produtos.updateMany({ tags: { $in: ["bovino", "pão"] } }, { $inc: { "vendasPorDia.6": 120 } });

db.produtos.find({}, { nome: 1, vendasPorDia: 1, _id: 0 }).pretty();
