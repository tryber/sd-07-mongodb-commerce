db.getCollection("produtos")
  .updateMany(
    { nome: { $not: { $eq: "McChicken" } } },
    { $addToSet: { ingredientes: "ketchup" } },
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
