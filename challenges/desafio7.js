db.produtos.updateMany(
  {},
  {
    $pull: { ingredientes: { $regex: /\s?cebola.?\s?/ig } }
  },
);

db.produtos.find(
  { ingredientes: { $regex: /\s?cebola.?\s?/ig } },
  { _id: 0, nome: 1, ingredientes: 1 }
);
