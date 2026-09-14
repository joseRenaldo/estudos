const Usuario = require("../models/usuario");

async function listar() {
    return Usuario.findAll({
        order: [["id", "ASC"]]
    });
}

async function buscarPorId(id) {
    return Usuario.findByPk(id);
}

async function criar(dados) {
    return Usuario.create(dados);
}

async function atualizar(id, dados) {
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
        return null;
    }

    await usuario.update(dados);

    return usuario;
}

async function remover(id) {
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
        return false;
    }

    await usuario.destroy();

    return true;
}

module.exports = {
    listar,
    buscarPorId,
    criar,
    atualizar,
    remover
};