// Referência do createIndex e do .count(): https://github.com/tryber/sd-07-mongodb-commerce/blob/vladimirrchagas-project-mongodb-commerce/challenges/desafio17.js

db.produtos.createIndex(
  { descricao: "text" },
  { default_language: "portuguese" },
);
db.produtos.count(
  {
    $text: { $search: "frango hamburguer" },
  },
);
