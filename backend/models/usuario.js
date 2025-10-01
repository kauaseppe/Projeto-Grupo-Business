const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  data_criacao: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Usuario", usuarioSchema);
