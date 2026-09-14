const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Usuario = sequelize.define(
    "Usuario",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nome: {
            type: DataTypes.STRING(150),
            allowNull: false
        },

        email: {
            type: DataTypes.STRING(150),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },

        telefone: {
            type: DataTypes.STRING(30),
            allowNull: true
        }
    },
    {
        tableName: "usuarios",
        timestamps: true,
        createdAt: "criado_em",
        updatedAt: "atualizado_em"
    }
);

module.exports = Usuario;