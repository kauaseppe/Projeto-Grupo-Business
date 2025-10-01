const express = require("express");
const mongoose = require("mongoose");
const usuarioRoutes = require("./routes/usuarioRoutes");

const app = express();
app.use(express.json());

// rotas
app.use("/api", usuarioRoutes);

// conexão com MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/clientesDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("✅ Conectado ao MongoDB");
}).catch((err) => {
  console.error("❌ Erro ao conectar ao MongoDB:", err);
});

// iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Backend rodando na porta ${PORT}`);
});
