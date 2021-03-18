// use("commerce");
db.produtos.createIndex(
  { descricao: "text" },
  { default_language: "portuguese" },
);

// use("commerce");
db.produtos.countDocuments(
  {
    $text: { $search: "frango hamburguer" },
  },
);
