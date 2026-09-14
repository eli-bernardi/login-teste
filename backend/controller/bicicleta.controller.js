const Bicicleta = require('../models/Bicicleta')

const cadastrar = async (req, res) => {
    const valores = req.body
    console.log(valores)

    if (!valores.modelo || !valores.tipo || !valores.aro || !valores.idCiclista) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' })
    }

    try {
        await Bicicleta.create(valores)

        res.status(201).json({ message: 'Operação concluída com sucesso!' })
    } catch (err) {
        console.error('Erro na operação:', err)

        res.status(500).json({ message: 'Erro na operação' })
    }
}

const listar = async (req, res) => {
    try {
        const bicicletas = await Bicicleta.findAll()
        res.status(200).json(bicicletas)
    } catch (err) {
        console.error('Erro ao listar bicicletas:', err)
        res.status(500).json({ message: 'Erro ao listar bicicletas' })
    }
}

module.exports = { cadastrar, listar }