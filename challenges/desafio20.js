db.produtos.update(
  { nome: "Big Mac" },
  { $unset: { curtidas: 1 } },
);

db.produtos.find(
  {},
  { _id: false, nome: 1, curtidas: 1 },
);
