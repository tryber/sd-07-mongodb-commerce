db.getCollection("produtos")
  .updateMany(
    {},
    { $rename: {
      descricao: "descricaoSite",
    },
    },
  );

db.getCollection("produtos")
  .find(
    {},
    {
      nome: true,
      descricao: true,
      descricaoSite: true,
      _id: false,
    },
  );
