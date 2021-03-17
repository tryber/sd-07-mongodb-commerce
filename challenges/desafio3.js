db.getCollection("produtos")
  .updateMany(
    {},
    { $set: { avaliacao: NumberInt("0") } },
  );

db.getCollection("produtos")
  .updateMany(
    { tags: { $all: ["bovino"] } },
    { $inc: { avaliacao: 5 } },
  );

db.getCollection("produtos")
  .updateMany(
    { tags: { $all: ["ave"] } },
    { $inc: { avaliacao: 3 } },
  );

db.getCollection("produtos")
  .find({},
    {
      nome: true,
      avaliacao: true,
      _id: false,
    });
