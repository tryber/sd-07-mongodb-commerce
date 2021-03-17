db.produtos.find(
  {
    vendidos: { $mod: [5, 0] },
  },
  {
    name: 1,
    vendidos: 1,
    _id: 0,
  },
);
