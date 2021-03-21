db.produtos.updateMany({
  $and: [
    { nome: { $ne: "McChicken" } },
    { ingredientes: { $nin: ["ketchup"] } },
  ],
}, { $push: { ingredientes: "ketchup" } });
db.produtos.find({}, { _id: false, nome: true, ingredientes: true });
