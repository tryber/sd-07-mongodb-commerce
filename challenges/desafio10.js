//
db.produtos.updateMany({}, { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } });
// 
db.produtos.updateOne(
  { nome: "Big Mac" },
  { $push: { vendasPorDia: { $each: [60], $position: 3 } } }
);
// 
db.produtos.updateOne(
    { tags:{$in: ["bovino", "pão"]} },
    { $push: { vendasPorDia: { $each: [120], $position: 7 } } }
  );

// 
b.produtos.find({}, { nome: 1, _id: 0, vendasPorDia: 1 });


