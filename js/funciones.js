
/* 
Las funciones son uno de los bloques de construcción fundamentales en JavaScript. 
Una función en JavaScript es similar a un procedimiento — un conjunto de instrucciones 
que realiza una tarea o calcula un valor, pero para que un procedimiento califique 
como función, debe tomar alguna entrada y devolver una salida
*/

//function miHolaMundo() {
//    alert("Hola Mundo")
//}

const miHolaMundo = _ => console.log("Hola Mundo")

miHolaMundo()

// Paremtros de una funcion

function multiplicar(a, b) {
    return a * b
}

console.log(multiplicar(5, 6))

function multiplicadorNumeros(multiplicador, ...numeros) {
    return numeros.map(numero => multiplicador * numero)
}

console.log(multiplicadorNumeros(3, 5, 6, 7))

console.log('%c funciones anonimas', 'background: #fff; color: #f01')

const ejemploFuncion = function(x, y) {
    console.log("Funcion anonima")
    console.log(x*y)
}

ejemploFuncion(4, 5)

console.log('%c funciones flecha', 'background: #fff; color: #f01')

const celulares = ['iphone 11', 'samsung s9', 'moto g9']

const funcionNormal = celulares.map(function (celular) {
    console.log(celular)
})

console.log('%c funciones flecha ejemplo', 'background: #fff; color: #f01')

const functionFlecha = celulares.map(celular => console.log(celular))


//functionFlecha()

//funcionNormal()

// Tipo

const sinParametros = _ => {
    console.log("Funcion flecha sun parametros")
}

const inOneLine = _ => console.log("en una linea")

// EL RETURN ES POR DEFAULT
const unSoloParametroInOnLine = numero => numero

const unSoloParametro = numero => {
    return numero
}

const variosParametros = (a, b, c, d) => {
    return a * b * c * d
}

console.log(unSoloParametroInOnLine(9))

console.log(variosParametros(1, 2, 3, 4))

console.log('%c funciones anidadas', 'background: #fff; color: #f01')

/**
 * Como funciona la function padre recibe 2 parametros a y b
 * dentro tenemos la funciona hija que recibe solo un parametro x
 * y la funcion padre invoca a la funcion hija lo cual pasa la siguiente
 * entra 2 y square devulve 4 porque lo que hace es multiplar el numero
 * al entrar 3 devulve 9
 * y finalmente la funcion padre suma los valores que le devulve la funcion hija
 * 
 */
function addSquares(a, b) {
    function square(x) {
      return x * x
    }
    return square(a) + square(b)
  }

  a = addSquares(2, 3)
  console.log(a)

  console.log('%c funciones predifinidas', 'background: #fff; color: #f01')

  /**
   * La funciones predifinidas son las que JS no provee por ejemplo
   * parseInt()
   * parseFloat()
   * isNaN() 
   * unEscape()
   * https://desarrolloweb.com/articulos/705.php
   */