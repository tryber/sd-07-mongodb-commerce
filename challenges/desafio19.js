db.getCollection("produtos")
  .updateMany(
    {},
    { $rename: { nome: "descricaoSite" } },
  );

db.getCollection("produtos")
  .find(
    { },
    { nome: 1, descricao: 1, descricaoSite: 1, _id: 0 },
  );
