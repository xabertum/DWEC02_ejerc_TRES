

/* VARIABLES GLOBALES*/
var n1, n2, resultado, operacion, codigo;


/*FUNCIONES*/

/**
 * Solicita y guarda la operación introducida por el usuario.
 * 
 * @returns {operacion}
 */
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

/**
 * Guarda en las variables n1, n2, el numero introducido por el usuario.
 * 
 * @returns {undefined}
 */
function pedirNumero() {

    n1 = prompt("Introduce el numero 1: ");
    n2 = prompt("introduce el numero 2: ");

}

/**
 * Realiza los calculos en funcion de la operación seleccionada
 * 
 * @param {type} op
 * @param {type} num1
 * @param {type} num2
 * @returns {Number|resultado|calculadora.num1|calculadora.num2|num1|num2}
 */

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

