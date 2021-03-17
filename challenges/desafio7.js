db.getCollection("produtos")
  .updateMany({}, { $pull: { ingredientes: "cebola" } });
db.getCollection("produtos")
  .find({}, { _id: 0, nome: 1, ingredientes: 1 });
