db.getCollection("produtos")
  .updateMany({}, { $set: { criadoPor: "Ronald McDonald" } });

db.getCollection("produtos")
  .find({}, { _id: 0, nome: 1, criadoPor: 1 });
