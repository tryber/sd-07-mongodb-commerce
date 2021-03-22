db.produtos.updateMany(
  { valorUnitario: { $exist: false } },
  { $set: { valorUnitario: NumberDecimal("0.00") } },
);
