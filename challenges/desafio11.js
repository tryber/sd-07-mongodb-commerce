// use("commerce");
db.produtos.updateMany(
  {},
  {
    $push:
      {
        tags:
        {
          $each: ["combo", "tasty"],
          $sort: 1,
        },
      },
  },
);

// use("commerce");
db.produtos.find(
  { },
  { nome: true, tags: true, _id: false },
);
