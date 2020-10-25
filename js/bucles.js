
/* 
    @Bucles
    Los bucles son una forma rapida y sencilla de hacer algo 
    repetidamente, hoy veremos los siguientes tipos de bucles
    - for
    - do While
    - while
    - for in
    - for of
    - map
    - filter
*/

window.onload = _ => {

    // Expresion inicial
    // Expresion condicional
    // Expresion de actualizacion

    console.log('%c for', 'background: #fff; color: #f01');

    for (let i=0; i<5; i++) {

        if (i % 2 == 0) {
            document.querySelector('#container').innerHTML += 
            `
            <div class="child">
                ${i}
            </div>
            `
        }
    }

    for (let i=11; i<20; i++) {
        
        document.querySelector('#container').innerHTML += 
        `
        <div class="child">
            ${i}
        </div>
        `
    }

    // Do while VS while
    // https://pbs.twimg.com/media/DuP34l7XgAApQmq.jpg

    console.log('%c do while ', 'background: #fff; color: #f01');
    let con = 0
    do {
        // Accion a ejecutar al menos una vez
        console.log(con)
        con++
        // jugar con la condicion 0 y 10
    } while(con < 0); // la condicion se evalua al final

    console.log('%c while ', 'background: #fff; color: #f01');

    let contador = 0
    // primero se evalua la condicion 
    while (contador < 0) {
        // y luego recien se ejecuta la accion 
        console.log(contador)
        contador++
    }

    // For in 
    // Estructura de for in
    // for (variable in objeto) {
    //    intruccion
    // }

    console.log('%c for...in ', 'background: #fff; color: #f01');

    const objeto = {
        'first_name': 'Linder',
        'last_name': 'Hassinger',
        'age': 20
    }

    for (let user in objeto) {
        console.log(`${user} => ${objeto[user]}`)
    }

    console.log('%c for...of ', 'background: #222; color: #af1');

    const nombres = ['Pepe', 'Carlos', 'Juan', 'Victor']

    for (let nombre of nombres) {
        console.log(nombre)
    }

    const objetoCarros = [
        {
            'marca': 'BMW',
            'anio': '2020',
            'modelo': 'M2',
            'cilindros': 4
        },
        {
            'marca': 'Mercedes',
            'anio': '2010',
            'modelo': 'GLA',
            'cilindros': 4
        },
        {
            'marca': 'Audi',
            'anio': '2010',
            'modelo': 'Q8',
            'cilindros': 6
        }
    ]

    console.log('%c map', 'background: #222; color: #af1');

    objetoCarros.map(objetoCarro => {
        //console.log(objetoCarro.marca)
        //console.log(objetoCarro.anio)
        //console.log(objetoCarro.modelo)
        console.log(objetoCarro)
    })

    console.log('%c filter', 'background: #222; color: #af1');

    const newCars = objetoCarros.filter(objetoCarros => objetoCarros.anio === '2010')
    console.log(newCars)

    console.log('%c reduce', 'background: #222; color: #af1');

    const valoresParaSumar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    valoresParaSumar.reduce((a, b) => {
        console.log(a + b)
    })
}