db.produtos.updateMany({},
  { $set: { criadoPor: "Ronald McDonald" } });

db.produtos.find({})
  .projection({ _id: 0, nome: 1, criadoPor: 1 });
