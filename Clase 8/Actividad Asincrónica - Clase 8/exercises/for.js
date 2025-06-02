// Pregunta 19: Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta 
// utilizando cada una de las palabras.
let palabras = ["javascript", "HTML", "cSS", "Python", "java"];
for (let i = 0; i < palabras.length; i++) {
    alert(palabras[i]);
}


// Pregunta 20: Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
let palabras2 = ["javascript", "HTML", "cSS", "Python", "java"];
let comparacion;
for (let i = 0; i < palabras2.length; i++) {
    comparacion = palabras2[i].substring(0, 1).toUpperCase() + palabras2[i].substring(1);  
    if (palabras2[i] != comparacion) {
        alert("Palabra modificada: " + comparacion + "\nPalabra original: " + palabras2[i]); 
    } 
}


// Pregunta 21: Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for 
// para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.
let sentence = "";
// no se especifica cual es el punto a), por lo que voy a utilizar el array del punto anterior...
let palabras3 = ["javascript", "HTML", "cSS", "Python", "java"];
for (let i = 0; i < palabras3.length; i++) {
    if (i == palabras3.length - 1) {
        sentence += palabras3[i];
    } else {
        sentence += palabras3[i] + " - ";
    }
}
console.log("Cadena completa: " + sentence);


// Pregunta 22: Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al 
// final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola 
// del navegador el array final (utilizar console.log)
let array = [];
for (let i = 0; i < 10; i++) {
    array.push(i);
}
console.log("Array final: ", array);