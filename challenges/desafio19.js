db.produtos.updateMany(
  {},
  { $rename: {
    descricao: "descricaoSite",
  },
  },
);

db.produtos.find(
  {},
  { _id: false, nome: 1, descricao: 1, descricaoSite: 1 },
);
