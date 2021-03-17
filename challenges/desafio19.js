/* eslint-disable linebreak-style */
// Crie uma query que faça a renomeação do campo descricao para descricaoSite
// em todos os documentos.
// Crie uma query que retorne o nome, descricao e descricaoSite de todos os documentos.
db.produtos.updateMany(
  { },
  { $rename: { descricao: "descricaoSite" } },
);

db.produtos.find(
  { },
  { _id: false, nome: true, descricaoSite: true, descricao: true },
);
