db.getCollection("produtos")
  .updateMany(
    {},
    { $push: { vendasPorDia: { $each: [0, 0, 0, 0, 0, 0, 0] } } },
  );

db.getCollection("produtos")
  .updateOne(
    { nome: "Big Mac" },
    { $inc: { "vendasPorDia.3": 60 } },
  );

db.getCollection("produtos")
  .updateMany(
    { tags: { $all: ["bovino", "pão"] } },
    { $inc: { "vendasPorDia.6": 120 } },
  );

db.getCollection("produtos")
  .find(
    {},
    {
      nome: true,
      vendasPorDia: true,
      _id: false,
    },
  );
