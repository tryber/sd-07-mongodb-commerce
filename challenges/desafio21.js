db.produtos.find({ $where: function () {
  return this.curtidas > this.vendidos;
},
}, { _id: 0, nome: 1 });
