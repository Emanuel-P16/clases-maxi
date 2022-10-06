const API_URL = "https://pokeapi.co/api/v2/pokemon/ditto"
const API_URLB = "https://pokeapi.co/api/v2/pokemon/"


const getPokemon = async () => {
    const resp = await fetch(API_URL)
    // console.log(resp)
    const respData = await resp.json();
    console.log(respData)
    console.log(respData.name)
    const div = document.getElementById("poke")
    div.innerHTML = respData.name
    const newdiv = document.createElement('div')
    newdiv.classList.add('newdiv')
    newdiv.innerHTML = "hola"
    div.appendChild(newdiv)

    return respData
}

const getAllPokemon = async () => {
    const resp = await fetch(API_URLB)
    const respData = await resp.json()
    console.log(respData.results)

    respData.results.map((x) => {
        console.log(x)
        return x
    })
}

getAllPokemon()


