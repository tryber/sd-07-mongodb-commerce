db.produtos.updateMany({
},
{
  $addToSet: {
    tags: {
      $each: ["combo", "tasty"],
    },
  },
});
