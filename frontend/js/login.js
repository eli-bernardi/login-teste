let res = document.getElementById('res')
let btn = document.getElementById('btn')

btn.addEventListener('click', (e) => {
    e.preventDefault()

    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value

    let valores = {
        email: email,
        senha: senha,
    }

    fetch(`http://localhost:3000/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(valores)
    }).then(res => res.json())
        .then(dados => {
            res.innerHTML = ``
            res.innerHTML += `<p>${dados.message}</p>`

            if (dados.token) {
                localStorage.setItem('token', dados.token)
                localStorage.setItem('nome', dados.nome)

                location.href = '../index.html'
            }
        })
        .catch((err) => {
            console.error('Erro no cadastro', err)
            res.innerHTML += `Erro na operação`
        })
})