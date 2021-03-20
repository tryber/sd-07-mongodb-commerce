db.articles.createIndex(
  { descricao: "text" },
  { default_language: "portuguese" },
);

db.produtos.countDocuments({ $text: { $search: "frango hamburguer" } });
