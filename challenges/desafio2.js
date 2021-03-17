db.getCollection("produtos")
  .updateMany(
    { valorUnitario: { $exists: false } },
    { $set: { valorUnitario: NumberDecimal("0.00") } },
  );

db.getCollection("produtos")
  .find({},
    {
      nome: true,
      valorUnitario: true,
      _id: false,
    });
