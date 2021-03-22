db.produtos.updateMany(
  {},
  { $set: { valorUnitario: 0.00 } },
);

db.produtos.find(
  {},
  { nome: true, valorUnitario: true, _id: false },
);
