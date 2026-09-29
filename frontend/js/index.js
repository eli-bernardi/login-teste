let verLogin = document.getElementById('verLogin')
let token = localStorage.getItem('token')
let nome = localStorage.getItem('nome')


function Logout() {

    if (token) {
        verLogin.innerHTML = `<a href="#" id="btn_logout">Logout</a>&emsp;`
        verLogin.innerHTML += `<span class="titulo-menu">Olá, ${nome}</span>`

        btn_logout.addEventListener('click', (e) => {
            e.preventDefault()
            localStorage.clear()
            location.reload()
        })

    } else {

    }
}

Logout()