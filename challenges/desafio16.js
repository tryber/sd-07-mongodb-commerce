/* eslint-disable linebreak-style */
// Conte quantos produtos têm 4 ingredientes.
db.produtos.find(
  { ingredientes: { $size: 4 } },
).count();
