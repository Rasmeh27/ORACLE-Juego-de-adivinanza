let secretNumber = 0;
let intentos = 0;
// Creando array para que no se generen numeros repetidos, sino que se almacenen aqui. 
let listaNumeroSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;

}

function verificarIntento() {
    let numberUser = parseInt(document.getElementById('valueUser').value);

    if (numberUser === secretNumber) { //Utilizando operadores ternarios
        asignarTextoElemento('p', `acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')

    } else { //Realizando una llamada a otra funcion desde condiciones
        if (numberUser > secretNumber) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        clearBox();
    }
    return;
}

function clearBox() {
    let valueBox = document.getElementById('valueUser');
    valueBox.value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor((Math.random()) * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    // Si ya sorteamos todos los numeros
    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los elementos, gracias por jugar!')
    } else {
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
            // Este else lo que indica, que va a realizar un push al array los numeros que sean generados. 
        } else {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    // Si el numero generado esta incluido en la lista, hacemos una operacion, si no hacemos otra. 

    // Lo que hace el include es que recorre todo nuestro arreglo, y nos dice si ya existe
    // y retorna un valor booleano.

    // la recursividad de esta funcion es que cuando se genere un numero, y no se encuentre en el array
    // sea anclado al array y salga como valor para la adivinanza, pero si este valor se encuentra en el 
    // lo que es que genera otro y realiza el mismo procedimiento.  
};

function condicionesInciales() {
    asignarTextoElemento('h1', 'Adivina el numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    secretNumber = generarNumeroSecreto();
    intentos = 1;

};

function restartGame() {
    // Limpiar la caja
    clearBox();
    // indicar mensaje de incio de intervalo de numeros
    condicionesInciales();
    // Generar el numero aleatorio
    // Inicializar el numero de intentos
    // Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condicionesInciales();