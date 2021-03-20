db.produtos.updateMany({}, { $set: { criadorpor: "Ronald McDonald" } },
);
db.produtos.find({}, {_id: false, nome: true, criadoPor: true });
