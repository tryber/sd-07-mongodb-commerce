db.produtos.insertMany({}, { $set: { criadoPor: "Ronald McDonald" } }, { upsert: true });

db.produtos.find({ _id: false, nome: true, criadoPor: true });
