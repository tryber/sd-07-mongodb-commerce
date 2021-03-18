// use("commerce");
db.produtos.updateOne(
  { nome: "Big Mac" },
  {
    $unset: { curtidas: "" },
  },
);

// use("commerce");
db.produtos.find(
  { },
  { nome: true, curtidas: true, _id: false },
);
