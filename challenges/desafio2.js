db.produtos.updateMany(
  { valorUnitario: { $exists: true } },
  { $set: { valorUnitario: NumberDecimal("0.00") } },
);

db.produtos.find(
  { valorUnitario: { $exists: true } },
  { _id: 0, nome: 1, valorUnitario: 1 },
);
