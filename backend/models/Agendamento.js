const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Agendamento = db.define('Agendamento', {
    codAgendamento: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    hora: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    idBicicleta: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Bicicleta',
            key: 'codBicicleta'
        }
    },
    idCiclista: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Ciclista',
            key: 'codCiclista'
        }
    }
}, {
    timestamps: false,
    tableName: 'Agendamento'
})

module.exports = Agendamento