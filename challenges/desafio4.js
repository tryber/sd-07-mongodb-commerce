db.getCollection("produtos")
  .updateOne(
    { nome: "Big Mac" },
    { $set: { ultimaModificacao: Date() } },
  );

db.getCollection("produtos")
  .find(
    { ultimaModificacao: { $exists: true } },
    { nome: true, _id: false },
  );
