db.getCollection("produtos")
  .updateMany(
    {},
    { $pull: { ingredientes: "cebola" } },
  );

db.getCollection("produtos")
  .find(
    {},
    {
      nome: true,
      ingredientes: true,
      _id: false,
    },
  );
