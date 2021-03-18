db.getCollection("produtos")
  .updateMany(
    {},
    { $push: { tags: { $each: ["combo", "tasty"], $sort: 1 } } },
  );

db.getCollection("produtos")
  .find(
    {},
    {
      nome: true,
      tags: true,
      _id: false,
    },
  );
