const Usuario = require("../models/usuario");

// Criar usuário
exports.criar = async (req, res) => {
  try {
    const { nome, email } = req.body;

    if (!nome || !email) {
      return res.status(400).json({ erro: "Nome e email são obrigatórios." });
    }

    const emailValido = /\S+@\S+\.\S+/.test(email);
    if (!emailValido) {
      return res.status(400).json({ erro: "Email inválido." });
    }

    const usuario = new Usuario({ nome, email });
    await usuario.save();

    res.status(201).json(usuario);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ erro: "Email já cadastrado." });
    }
    res.status(500).json({ erro: "Erro ao criar usuário." });
  }
};

// Listar todos os usuários
exports.listar = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ erro: "Erro ao buscar usuários." });
  }
};

// Buscar usuário por ID
exports.buscarPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findById(id);

    if (!usuario) {
      return res.status(404).json({ erro: "Usuário não encontrado." });
    }

    res.json(usuario);
  } catch (err) {
    res.status(400).json({ erro: "ID inválido." });
  }
};

// Atualizar usuário
exports.atualizar = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email } = req.body;

    if (!nome || !email) {
      return res.status(400).json({ erro: "Nome e email são obrigatórios." });
    }

    const emailValido = /\S+@\S+\.\S+/.test(email);
    if (!emailValido) {
      return res.status(400).json({ erro: "Email inválido." });
    }

    const usuario = await Usuario.findByIdAndUpdate(
      id,
      { nome, email },
      { new: true, runValidators: true }
    );

    if (!usuario) {
      return res.status(404).json({ erro: "Usuário não encontrado." });
    }

    res.json(usuario);
  } catch (err) {
    res.status(400).json({ erro: "Erro ao atualizar usuário." });
  }
};

// Deletar usuário
exports.deletar = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findByIdAndDelete(id);

    if (!usuario) {
      return res.status(404).json({ erro: "Usuário não encontrado." });
    }

    res.json({ mensagem: "Usuário deletado com sucesso." });
  } catch (err) {
    res.status(400).json({ erro: "ID inválido." });
  }
};
