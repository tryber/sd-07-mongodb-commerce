db.produtos.updateMany(
  { nome: "Big Mac" },
  { $currentDate: {
    ultimaModificacao: { $type: "date" },
  },
  },
);

db.produtos.find(
  { nome: "Big Mac" },
  { nome: 1, _id: 0 },
);
