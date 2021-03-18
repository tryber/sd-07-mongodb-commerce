/** @format */

db.produtos.find({ nome: { $regex: /mc/i } });
