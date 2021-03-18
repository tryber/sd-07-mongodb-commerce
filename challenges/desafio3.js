// creates evaluation field
db.produtos.updateMany({}, { $set: { avaliacao: NumberInt("0") } });

// Increase more 5
db.produtos.update({ tags: { $in: ["bovino"] } }, { $inc: { avaliacao: 5 } });
//
db.produtos.update({ tags: { $in: ["ave"] } }, { $inc: { avaliacao: 3 } });
//
db.produtos.find({}, { nome: 1, avaliacao: 1, _id: 0 });
