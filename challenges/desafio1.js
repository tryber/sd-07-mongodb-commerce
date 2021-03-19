// Insert data created by
db.produtos.updateMany({}, { $set: { criadoPor: "Ronald McDonald" } });

// Find name and product creator
db.produtos.find({}, { criadoPor: 1, nome: 1, _id: 0 });
