
// Primera forma instanciado a la clase object 
const laptop = new Object()
laptop.marca = "Apple"
laptop.memoria = "16gb"
laptop.discoDuro = "1TB"

console.log(laptop)

const carro = {
    marca: 'Nissan',
    mode: 'versa',
    anio: 2020
}

console.log(carro)

class Persona {

    constructor(nombre, apellido, edad) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }

}

const persona = new Persona("Linder", "Hassinger", 20)

console.log(persona)

// Object.create 

const Avion = {
    vuela: true,
    mostrarSiVuela: function() {
        console.log(this.vuela)
    }
}

const avionAmarillo = Object.create(Avion)
avionAmarillo.mostrarSiVuela()

const avionRojo = Object.create(Avion)
avionRojo.vuela = false
avionRojo.mostrarSiVuela()

// Eliminar propiedades de un objeto
const peliculas = new Object()
peliculas.marvel = "Avengers"
peliculas.dc = "Batman"
peliculas.accion = "Duro de matar"

// propiedad delete 
delete peliculas.marvel
console.log(peliculas)

// Comparar objetos

const marca = {
    nombre: 'apple'
}

const marcaCopioa = {
    nombre: 'apple'
}

// Porque dos objetos nunca son iguales asi tengan 
// las mismas propiedades
console.log(marca === marcaCopioa)

const marca2 = {
    nombre: 'apple'
}

const marcaCopioa2 = marca2
console.log("Se esta asigando marca2 a macaCopia2 como referencia")
console.log(marca2 === marcaCopioa2)
