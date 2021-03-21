db.getCollection("produtos")
  .updateMany({ nome: { $ne: "McChicken" } }, { $addToSet: { ingredientes: "ketchup" } }, {
  });
db.getCollection("produtos")
  .find({}, { _id: 0, nome: 1, ingredientes: 1 });
