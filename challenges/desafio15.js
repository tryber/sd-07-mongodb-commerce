db.produtos.countDocuments({
  nome: { $regex: /\w*Mc\w*/i },
});
