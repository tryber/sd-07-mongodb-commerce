db.getCollection("produtos")
  .count({
    nome: { $regex: /mc/i },
  });
