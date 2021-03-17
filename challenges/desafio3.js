// creates evaluation field
db.produtos.updateMany({}, { $set: {avaliacao: NumberInt("0")}});

// Increase more 5
db.produtos.update({tags:{$in: ["bovino"]}},
  {$inc: {avaliacao: 5}}
)