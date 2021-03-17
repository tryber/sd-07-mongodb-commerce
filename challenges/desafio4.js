db.produtos.updateOne(
  { nome: { $regex: /big mac/i } },
  {
    $set: { ultimaModificacao: Date() },
  },
);

db.produtos.find(
  { ultimaModificacao: { $exists: true } },
  { _id: 0, nome: 1 },
);
