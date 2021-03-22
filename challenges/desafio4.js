db.produtos.updateOne({ nome: "Big Mac" },
  { $set: { ultimaModificacao: Date() } });

db.produtos.findOne({ ultimaModificacao: { $exists: true } }, { nome: 1, _id: 0 });
