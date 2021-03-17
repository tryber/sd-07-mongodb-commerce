db.getCollection('produtos')
  .updateMany({}, { $set: { avaliacao: NumberInt("0") } });
db.getCollection('produtos')
  .updateMany({ tags: {$in: ["bovino"]}},{ $set: { avaliacao: NumberInt("5") } });
db.getCollection('produtos')
  .updateMany({ tags: {$in: ["ave"]}},{ $set: { avaliacao: NumberInt("3") } });
db.getCollection('produtos')
  .find({}, { _id: 0, nome: 1, avaliacao: 1, });
