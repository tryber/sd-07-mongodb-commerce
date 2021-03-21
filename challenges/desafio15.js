db.produtos.countDocuments(
  {
    nome: {
      $regex: /\w*mc\w*/i,
    },
  },
);
