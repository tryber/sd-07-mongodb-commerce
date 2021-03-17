// Crie uma query que faça a criação de um
// índice do tipo text no campo descricao com o idioma padrão portuguese.""

db.produtos.createIndex({ descricao: "text" }, { default_language: "portuguese" });

db.produtos.find(
  {
    $text: { $search: "frango hamburguer", $language: "portuguese" },
  },
);
