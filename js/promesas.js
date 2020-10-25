
/**
 * Nuestra promesa recive 2 funciones 
 * resolve y reject como su propio nombre lo dice
 * son para resolver o rechazar 
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise
 */

let promesa = new Promise((resolve, reject) => {
    setTimeout( _ => {
        resolve("si funciona")
    }, 2000)
})

promesa.then(message => {
    console.log(message)
})
.then(_ => {
    // encadenamientos de promesas
    console.log("next")
})
.catch(err => {
    console.log(err.toString())
})

let promesaParemetors = milisegundos => new Promise(resolve => {
    setTimeout(_ => {
        resolve(`Estamos esperando ${milisegundos}`)
    }, milisegundos)
})

promesaParemetors(4000).then(message => {
    console.log(message)
}).catch(err => {
    console.log(err.toString())
})

let promesaError = new Promise((resolve, reject) => {
    setTimeout(_ => {
        reject('simulando un error')
    }, 5000)
})

promesaError.then( _ => {
    console.log("esto esta bien")
}).catch(err => {
    console.log(err.toString())
})

// Async await 
const saludo = async _ => {
    const message = await Promise.resolve("Hola amiguitos")
    console.log(message)
}

saludo()

// Async await con api
const getPokemons = async _ => {
    try {
        const url = "https://pokeapi.co/api/v2/pokemon/25"
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)    
    } catch (err) {
        console.log(err.toString())
    }
}

getPokemons()