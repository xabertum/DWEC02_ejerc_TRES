/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



/* VARIABLES GLOBALES*/
var n1, n2, resultado, operacion;
var codigo = 5;

/*FUNCIONES*/

function pedirOperacion() {

    operacion = prompt("Introduce la operación\n '+' '-' '*' '/' '%'");

    if (operacion == "+" || operacion == "-" || operacion == "/" || operacion == "%")
        codigo = 1;
    else {
        alert("Operacion no aceptada");
        codigo = 0;
    }

    return operacion;

}

function pedirNumero() {

    n1 = prompt("Introduce el numero 1: ");
    n2 = prompt("introduce el numero 2: ");

}

function calculadora(op, num1, num2) {

    if (op === '+')
        resultado = parseInt(num1) + parseInt(num2);
    if (op === '-')
        resultado = num1 - num2;
    if (op === '/')
        resultado = num1 / num2;
    if (op === '*')
        resultado = num1 * num2;
    if (op === '%')
        resultado = num1 % num2;

    return resultado;

}

/* `MAIN` */

pedirOperacion();

if (codigo != 0) {

    pedirNumero();
    calculadora(operacion, n1, n2);
    alert("El resultado de: " + n1 + " " + operacion + " " + n2 + " es: " + resultado);

}

