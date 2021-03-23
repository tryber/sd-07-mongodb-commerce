// Referência do each e sort: https://github.com/tryber/sd-07-mongodb-commerce/blob/moraisgabri-mongodb-commerce/challenges/desafio11.js

db.produtos.updateMany(
  {},
  {
    $push: {
      tags: {
        $each: ["combo", "tasty"],
        $sort: 1,
      },
    },
  },
);

db.produtos.find(
  {},
  { _id: 0, nome: 1, tags: 1 },
);
