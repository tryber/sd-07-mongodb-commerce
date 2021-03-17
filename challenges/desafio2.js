// Update data unit value
db.produtos.updateMany({}, { $set: { valorUnitario: NumberDecimal("0.00") } });

// Find unit value all product
db.produtos.find({}, { valorUnitario: 1, nome: 1, _id: 0 });
