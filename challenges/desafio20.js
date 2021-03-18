db.produtos.updateMany(
  {},
  { $unset: { curtidas: 1 } },
);

db.produtos.find(
  { },
  { nome: 1, curtidas: 1, _id: 0 },
);
