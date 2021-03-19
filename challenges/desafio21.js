db.produtos.find({ $where() {
  return this.curtidas > this.vendidos;
},
}, { _id: 0, nome: 1 });
