/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var n1, n2, resultado, operacion;


function pedirOperacion() {

    operacion = prompt("Introduce la operación\n '+' '-' '*' '/' '%'")
    return operacion;

}

function pedirNumero() {

    n1 = prompt("Introduce el numero 1: ");
    n2 = prompt("introduce el numero 2: ");

}

function calculadora(op, num1, num2) {

    if (op === "+")
        resultado = num1 + num2;
    if (op === "-")
        resultado = num1 - num2;
    if (op === "/")
        resultado = num1 / num2;
    if (op === "*")
        resultado = num1 * num2;
    if (op === "%")
        resultado = num1 % num2;
    else (alert("Operación no aceptada"));

    return resultado;

}

pedirOperacion();
pedirNumero();
calculadora(operacion, n1, n2);

alert("El resultado de: " + n1 + " " + operacion + " " + n2 + " es: " + resultado);


