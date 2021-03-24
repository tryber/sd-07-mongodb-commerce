db.produtos.count(
  { nome: { $regex: /m*Mc/ } },
);
