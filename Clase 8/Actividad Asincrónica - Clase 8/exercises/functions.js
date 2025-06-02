// Pregunta 23: Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar 
// el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
function suma(a, b) {
    return a + b;
}
let resultado = suma(5, 10);
console.log("Resultado de la suma: " + resultado);


// Pregunta 24: A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, 
// mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
function sumaConValidacion(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        alert("Error: uno de los parámetros no es un número.");
        return NaN;
    }
    else {
        return a + b;
    }
}
let resultado2 = sumaConValidacion(5, "a");
console.log("Resultado de la suma: " + resultado2);


// Pregunta 25: Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
function validateInteger(num) {
    return Number.isInteger(num);
}
let numero = 10;
console.log("¿Es un número entero? " + validateInteger(numero)); // true


// Pregunta 26: A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya 
// decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
// no se especifica cual es el punto 6b) en el ejercicio, por lo que voy a utilizar la funcion suma del punto 24...
function sumaConValidaciones(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        alert("Error: uno de los parámetros no es un número.");
        return NaN;
    }
    else {
        if (!Number.isInteger(a)){
            alert("Error: el primer número no es entero. Se redondeará el valor.");
            a = Math.round(a);
        } if (!Number.isInteger(b)) {
            alert("Error: el segundo número no es entero. Se redondeará el valor.");
            b = Math.round(b);
        }
        return a + b;
    }
}
let resultado3 = sumaConValidaciones(5.3, 10.6);
console.log("Resultado de la suma: " + resultado3);


// Pregunta 27: Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo 
// siga funcionando igual.
// no se especifica cual es el punto 6b) en el ejercicio, por lo que voy a utilizar la funcion del punto anterior...
function sumaConValidaciones2(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        alert("Error: uno de los parámetros no es un número.");
        return NaN;
    }
    else {
        a = redondearValor(a);
        b = redondearValor(b);
        return a + b;
    }
}
function redondearValor(numero){
    if (!Number.isInteger(numero)) {
        alert("El número no es entero. Se redondeará el valor.");
        numero = Math.round(numero);
    }
    return numero;
}
let resultado4 = sumaConValidaciones2(5.3, 10.6);
console.log("Resultado de la suma: " + resultado4);