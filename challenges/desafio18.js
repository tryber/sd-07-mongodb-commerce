db.produtos.createIndex(
  { descricao: "text" },
  { default_language: "portuguese" },
);

db.produtos.countDocuments({
  $text: {
    $search: "\"feito com\"",
    $language: "portuguese",
    $caseSensitive: false,
  },
});
