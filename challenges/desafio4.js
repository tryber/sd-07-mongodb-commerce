db.getCollection("produtos")
  .updateMany({ nome: "Big Mac" }, { $currentDate: { ultimaModificacao: true } });
db.getCollection("produtos")
  .find({ nome: "Big Mac" }, { _id: 0, nome: 1 });
