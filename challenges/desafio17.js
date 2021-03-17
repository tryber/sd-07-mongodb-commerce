db.produtos.createIndex({ descricao: "text" });

db.produtos.find({
  $text: { $search: "frango hamburguer", $language: "none", $caseSensitive: false },
}).count();
