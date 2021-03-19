db.produtos.updateMany({
}, {
  $addToSet: {
    tags: { $each: ["combo", "tasty"],
      $sort: 1,
    } },
});
