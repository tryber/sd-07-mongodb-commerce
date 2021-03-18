db.getCollection("produtos")
  .updateOne(
    { nome: "Big Mac" },
    { $unset: { curtidas: "" } },
  );

db.getCollection("produtos")
  .find(
    {},
    {
      nome: true,
      curtidas: true,
      _id: false,
    },
  );
