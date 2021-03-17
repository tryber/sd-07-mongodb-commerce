//1.
db.produtos.updateMany({}, { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } });
/////2.
db.produtos.updateOne(
  { nome: "Big Mac" },
  { $push: { vendasPorDia: { $each: [60], $position: 3 } } }
);
db.produtos.updateOne(
    { nome: "Big Mac" },
    { $pop: { vendasPorDia: 1 } }
  );
/////3.
db.produtos.updateOne(
  { tags: { $all: ["bovino", "pão"] } },
  { $push: { vendasPorDia: { $each: [120], $position: 6 } } }
);
db.produtos.updateOne(
  { tags: { $all: ["bovino", "pão"] } },
  { $pop: { vendasPorDia: 1 } }
);
/////4.
db.produtos.find({}, { _id: 0, nome: 1, vendasPorDia: 1 });