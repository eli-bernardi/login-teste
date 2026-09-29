let res = document.getElementById('res')
let btn = document.getElementById('btn')

btn.addEventListener('click', (e) => {
    e.preventDefault()

    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    let cpf = document.getElementById('cpf').value
    let endereco = document.getElementById('endereco').value
    let telefone = document.getElementById('telefone').value

    let valores = {
        nome: nome,
        email: email,
        senha: senha,
        cpf: cpf,
        endereco: endereco,
        telefone: telefone
    }

    fetch(`http://localhost:3000/ciclista`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(valores)
    }).then(res => res.json())
        .then(dados => {
            res.innerHTML = ``
            res.innerHTML += `<p>${dados.message}</p>`
        })
        .catch ((err) => {
            console.error('Erro no cadastro', err)
            res.innerHTML += `Erro na operação`
        })
})