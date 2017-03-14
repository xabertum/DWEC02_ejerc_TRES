/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function pedirOperacion () {
    
    var operacion = prompt ("Introduce la operación\n '+' '-' '*' '/' '%'")
    
    return operacion;
    
}



function pedirNumero() {

    var n1 = prompt("Introduce el numero 1: ");
    var n2 = prompt("introduce el numero 2: ");

}

function suma(n1, n2) {

    return n1 + n2;
}

function resta(n1, n2) {
    return n1 - n2;
}

function multiplicacion(n1, n2) {
    return n1 * n2;
}

function division(n1, n2) {
    return n1 / n2;
}

function modulo(n1, n2) {
    return n1 % n2;
}


pedirOperacion();
pedirNumero();
