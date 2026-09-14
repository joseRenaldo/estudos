const express = require("express");
const usuariosRoutes = require("../routes/usuarios.routes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        mensagem: "API Node.js + Express + Sequelize + Neon"
    });
});

app.use("/usuarios", usuariosRoutes);

module.exports = app;
