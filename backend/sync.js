const conn = require('./db/conn')
const { Bicicleta, Agendamento, Ciclista } = require('./models/rel')

async function syncDataBase() {
    try {
        await conn.sync({ force: true }) 
        
        console.log('--------------------------------------------------')
        console.log('Banco de dados sincronizado com sucesso')
        console.log('--------------------------------------------------')

    } catch (err) {
        console.error('Erro ao sincronizar o banco:', err)
    } finally {
        await conn.close()
        console.log('Banco fechado')
    }
}

syncDataBase()