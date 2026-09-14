const Bicicleta = require('./Bicicleta')
const Ciclista = require('./Ciclista')
const Agendamento = require('./Agendamento')

Ciclista.hasMany(Bicicleta, {
    foreignKey: 'idCiclista',
    as: 'bicicletas',
    onDelete: 'CASCADE'
})

Bicicleta.belongsTo(Ciclista, {
    foreignKey: 'idCiclista',
    as: 'ciclista',
    allowNull: false
})

Bicicleta.hasMany(Agendamento, {
    foreignKey: 'idBicicleta',
    as: 'agendamentos',
    onDelete: 'CASCADE'
})

Agendamento.belongsTo(Bicicleta, {
    foreignKey: 'idBicicleta',
    as: 'bicicleta',
    allowNull: false
})
Ciclista.hasMany(Agendamento, {
    foreignKey: 'idCiclista',
    as: 'agendamentos',
    onDelete: 'CASCADE'
})

Agendamento.belongsTo(Ciclista, {
    foreignKey: 'idCiclista',
    as: 'ciclista',
    allowNull: false
})

module.exports = { Bicicleta, Ciclista, Agendamento }