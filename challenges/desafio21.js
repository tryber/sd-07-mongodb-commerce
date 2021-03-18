db.getCollection("produtos")
  .find(
    { $expr: { $gt: ["$curtidas", "$vendidos"] } },
    {
      nome: true,
      _id: false,
    },
  );
