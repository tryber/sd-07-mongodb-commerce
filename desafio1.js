db.produtos.updateMany(
  { },
  { $push: {
    criadoPor: "Ronald McDonald",
  },
  },
  { upsert: true },
);

db.produtos.find(
  { },
  { _id: false, nome: true, criadoPor: true },
);
