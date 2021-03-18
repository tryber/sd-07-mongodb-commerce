// use("commerce");
db.produtos.updateMany(
  {},
  {
    $rename: { descricao: "descricaoSite" },
  },
);

// use("commerce");
db.produtos.find(
  { },
  { nome: true, descricao: true, descricaoSite: true, _id: false },
);
