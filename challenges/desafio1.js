db.getCollection("produtos")
  .updateMany(
    {},
    { $set: { criadoPor: "Ronald McDonald" } },
  );

db.getCollection("produtos")
  .find(
    {},
    {
      criadoPor: true,
      nome: true,
      _id: false,
    },
  );
