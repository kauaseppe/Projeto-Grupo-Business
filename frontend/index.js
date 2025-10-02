const express = require("express");
const path = require("path");
const axios = require("axios");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const API_URL = "http://localhost:3000/api";

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/criar", (req, res) => {
  res.render("criarUsuario", { erro: null });
});

app.post("/criar", async (req, res) => {
  try {
    const { nome, email } = req.body;
    await axios.post(`${API_URL}/usuarios`, { nome, email });
    res.redirect("/buscar");
  } catch (error) {
    res.render("criarUsuario", { erro: error.response?.data?.erro || "Erro ao cadastrar usuário." });
  }
});

app.get("/buscar", async (req, res) => {
  try {
    const { data: usuarios } = await axios.get(`${API_URL}/usuarios`);
    res.render("buscarUsuario", { usuarios, erro: null });
  } catch (error) {
    res.render("buscarUsuario", { usuarios: [], erro: "Erro ao buscar usuários." });
  }
});

app.get("/detalhe/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { data: usuario } = await axios.get(`${API_URL}/usuarios/${id}`);
    res.render("detalheUsuario", { usuario, erro: null });
  } catch (error) {
    res.render("detalheUsuario", { usuario: null, erro: "Usuário não encontrado." });
  }
});

app.get("/editar/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { data: usuario } = await axios.get(`${API_URL}/usuarios/${id}`);
    res.render("editarUsuario", { usuario, erro: null });
  } catch (error) {
    res.redirect("/buscar?erro=Usuário não encontrado");
  }
});

app.post("/editar/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email } = req.body;
    await axios.put(`${API_URL}/usuarios/${id}`, { nome, email });
    res.redirect("/buscar");
  } catch (error) {
    res.render("editarUsuario", { usuario: { _id: req.params.id, nome: req.body.nome, email: req.body.email }, erro: "Erro ao atualizar usuário" });
  }
});

app.post("/deletar/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await axios.delete(`${API_URL}/usuarios/${id}`);
    res.redirect("/buscar");
  } catch (error) {
    res.redirect("/buscar?erro=Erro ao excluir usuário");
  }
});

const PORT = 4000;
app.listen(PORT, () => console.log(`🌐 Frontend rodando na porta ${PORT}`));
