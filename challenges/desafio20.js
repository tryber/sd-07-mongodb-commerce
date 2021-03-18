db.getCollection("produtos")
  .updateOne({ nome: "Big Mac" }, { $unset: { curtidas: "" } });
db.getCollection("produtos")
  .find({}, { _id: 0, nome: 1, curtidas: 1 });
