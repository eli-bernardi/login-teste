const Agendamento = require('../models/Agendamento')

const cadastrar = async (req, res) => {
    req.body = valores
    console.log(valores)

    try {
        await Agendamento.create(valores)
        res.status(201).json({ message: 'Operação concluída com sucesso' })
    } catch (err) {
        console.err('Erro na operação', err)
        res.status(500).json({ message: 'Erro na operação com sucesso' })
    }
}

module.exports = { cadastrar, listarOrdenado, atualizar }