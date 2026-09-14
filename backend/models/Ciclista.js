const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Ciclista = db.define('Ciclista', {
    codCiclista: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    senha: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    cpf: {
        type: DataTypes.STRING(14),
        allowNull: false,
    },
    endereco: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    celular: {
        type: DataTypes.STRING(14),
        allowNull: false,
    }
}, {
    timestamps: false,
    tableName: 'Ciclista'
})

module.exports = Ciclista