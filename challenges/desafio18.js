db.produtos.createIndex({ descricao: "text" });

db.produtos.countDocuments(
  { $text: { $search: "\"feito com\"" } },
);
