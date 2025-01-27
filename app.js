
let NumeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 20;
console.log(NumeroSecreto);

//Función llamada de html, definimos {}encapsular acción
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
}
function verificarIntento(){
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
 
 // console.log(NumeroSecreto);
  if (numeroDeUsuario === NumeroSecreto){
    asignarTextoElemento('p',`¡Felicidades! Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else{
    //El usuario no aceertó.
    if(numeroDeUsuario > NumeroSecreto){
        asignarTextoElemento('p','Ops el número secreto es MENOR');
    } else{
        
            asignarTextoElemento('p','Ops el número secreto es MAYOR');
    }
    intentos ++;
    limpiarCaja();
  }
  return;

}
function limpiarCaja() {
   document.querySelector('#valorUsuario').value = '';
   
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    // si ya sorteamos todos los numero
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento ('p', 'Todos los números posibles han sido sorteados');
    } else {

   // si el numero generado esta incluido en la lista
   if (listaNumerosSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();

   } else {
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
   }
}
}

function condicionesIniciales (){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    NumeroSecreto = generarNumeroSecreto();
    intentos =1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    condicionesIniciales();
    // indicar mensaje de ininio numeros 1 al 10
    //genear numero aleatorio
    // inicializar el numero de intentos
 document.querySelector('#reiniciar').setAttribute('disabled','true');
    //deshabilita boton de nuevo juego
   

}
condicionesIniciales();