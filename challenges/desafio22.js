db.produtos.find(
  {
    vendidos: { $mod: [5, 0] },
  },
  { _id: false, nome: 1, vendidos: 1 },
);
