db.getCollection("produtos")
  .updateMany({}, { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } });
db.getCollection("produtos")
  .updateOne({ nome: "Big Mac" }, { $set: { "vendasPorDia.3": 60 } });
db.getCollection("produtos")
  .updateOne({ nome: "Big Mac" }, { $set: { "vendasPorDia.6": 120 } });
db.getCollection("produtos")
  .find({}, { _id: 0, nome: 1, vendasPorDia: 1 });
