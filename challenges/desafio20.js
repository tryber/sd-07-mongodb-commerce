db.produtos.updateOne(
  { nome: { $eq: "Big Mac" } },
  { $unset: { curtidas: 1 } },
);

db.produtos.find(
  {},
  { nome: 1, curtidas: 1, _id: false },
);
