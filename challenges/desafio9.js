db.getCollection("produtos")
  .updateMany(
    { nome: "Cheddar McMelt" },
    { $pop: { ingredientes: 1 } },
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
