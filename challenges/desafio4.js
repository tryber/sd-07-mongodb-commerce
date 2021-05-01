db.produtos.updateMany({}, { $currentDate: { ultimaModificacao: true } });

db.produtos.find({ ultimaModificacao: { $exists: true }}, { _id: false, nome: true });
