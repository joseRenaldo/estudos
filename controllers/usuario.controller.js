const usuariosService = require("../services/usuarios.service");

async function listar(req, res) {
    const usuarios = await usuariosService.listar();

    res.json(usuarios);
}

async function buscarPorId(req, res) {
    const usuario = await usuariosService.buscarPorId(req.params.id);

    if (!usuario) {
        return res.status(404).json({
            erro: "Usuário não encontrado"
        });
    }

    res.json(usuario);
}

async function criar(req, res) {
    const usuario = await usuariosService.criar(req.body);

    res.status(201).json(usuario);
}

async function atualizar(req, res) {
    const usuario = await usuariosService.atualizar(
        req.params.id,
        req.body
    );

    if (!usuario) {
        return res.status(404).json({
            erro: "Usuário não encontrado"
        });
    }

    res.json(usuario);
}

async function remover(req, res) {
    const removido = await usuariosService.remover(req.params.id);

    if (!removido) {
        return res.status(404).json({
            erro: "Usuário não encontrado"
        });
    }

    res.status(204).send();
}

module.exports = {
    listar,
    buscarPorId,
    criar,
    atualizar,
    remover
};