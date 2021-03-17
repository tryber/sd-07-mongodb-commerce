db.produtos.updateMany({},
  { $set: { avaliacao: NumberInt("0") } });

db.produtos.updateMany(
  { tags: { $elemMatch: "bovino" } },
  { $inc: { avaliacao: 2 } },
);

db.produtos.updateMany(
  { tags: { $elemMatch: "ave" } },
  { $inc: { avaliacao: 3 } },
);

db.produtos.find({}, { _id: 0, nome: 1, avaliacao: 1 });
