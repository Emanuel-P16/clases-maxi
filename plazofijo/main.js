
// const loginForm = document.getElementById('login-form')



function handleSubmit(evt) {
    const importe = document.getElementById('importe').value
    const plazo = document.getElementById('plazo').value
    const tna = document.getElementById('tna').value

    evt.preventDefault()
    // console.log(loginForm)
    const resultado = (importe * plazo * tna) / 36500
    console.log(resultado)
}