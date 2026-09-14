const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Bicicleta = db.define('Bicicleta', {
    codBicicleta: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    modelo: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    tipo: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    aro: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    idCiclista: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'Bicicleta'
})

module.exports = Bicicleta