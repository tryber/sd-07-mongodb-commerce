// Crie uma query que adicione o campo valorUnitario em todos os documentos em que esse
// campo não existe e atribua a ele o valor "0.00", com o tipo NumberDecimal.
// Crie uma query que retorne o nome e valorUnitario de todos os produtos.
db.produtos.updateMany(
  { },
  { $addToSet: {
    valorUnitario: NumberDecimal("0.00"),
  },
  },
  { upsert: true },
);

db.produtos.find(
  { },
  { _id: false, nome: true, valorUnitario: true },
);
