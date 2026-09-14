require("dotenv").config();

const app = require("./app");
const sequelize = require("../config/database");

// Importa os models para que o Sequelize os conheça
require("../models/usuario");

const PORT = process.env.PORT || 3000;

async function start() {
    try {
        await sequelize.authenticate();

        console.log("Banco de dados conectado.");

        await sequelize.sync();

        console.log("Models sincronizados.");

        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Erro ao iniciar aplicação:", error);
        process.exit(1);
    }
}

start();