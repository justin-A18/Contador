//valor inicial

let conteo = 0;

//funcion incrementadora
function incremento(){
    conteo++;
    document.getElementById('conteo').innerHTML = conteo;
}

//mandando la funcion al btn
let btnIncremento = document.getElementById('incremento');

btnIncremento.onclick = incremento;


//funcion decrementadora
function decremento(){
    conteo--;
    document.getElementById('conteo').innerHTML = conteo;
}

//mandando la funcion al btn
let btnDecremento = document.getElementById('decremento');

btnDecremento.onclick = decremento;


//funcion reseteo
function reset(){
    conteo = 0;
    document.getElementById('conteo').innerHTML = conteo;
}

//mandando la funcion al btn
let btnReset = document.getElementById('reset');

btnReset.onclick = reset;