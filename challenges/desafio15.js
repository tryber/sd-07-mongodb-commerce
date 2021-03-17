/* eslint-disable linebreak-style */
// Conte quantos produtos contêm Mc no nome, sem considerar letras maiúsculas ou minúsculas.
db.produtos.find(
  { nome: { $regex: /m*MC/i } },
).count();
