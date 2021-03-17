// Crie uma query que faça a remoção do último ingrediente no sanduíche Cheddar McMelt.
// Crie uma query que retorne o nome e ingredientes de todos os documentos.
db.produtos.updateMany(
  { nome: "Cheddar McMelt" },
  { $pop: {
    ingredientes: 1,
  },
  },
);

db.produtos.find(
  { },
  { _id: false, nome: true, ingredientes: true },
);
