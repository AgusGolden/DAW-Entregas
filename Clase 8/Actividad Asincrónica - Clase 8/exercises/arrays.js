// Pregunta 10: Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", 
// "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("Mes 5: " + meses[5-1]);
console.log("Mes 11: " + meses[11-1]);


// Pregunta 11: Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort)
let meses2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("Meses ordenados alfabéticamente: " + meses2.sort());


// Pregunta 12: Agregar un elemento al principio y al final del array (utilizar unshift y push)
let meses3 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"].sort();
meses3.unshift("Inicio");
meses3.push("Fin");
console.log("Meses con los elementos al principio y al final del array: " + meses3);


//Pregunta 13: Quitar un elemento del principio y del final del array (utilizar shift y pop).
let meses4 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"].sort();
meses4.unshift("Inicio"); // acomodo el array para que quede igual que el de la pregunta 12
meses4.push("Fin"); // acomodo el array para que quede igual que el de la pregunta 12
meses4.shift();
meses4.pop();
console.log("Eliminamos lo agregado anteriormente: " + meses4);


// Pregunta 14: Invertir el orden del array (utilizar reverse).
let meses5 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"].sort();
meses5.reverse();
console.log("Meses en orden inverso: " + meses5);


// Pregunta 15: Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
let meses6 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"].join("-");
console.log("Meses unidos por guiones: " + meses6);


// Pregunta 16: Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice)
let meses7 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let mesesCopia = meses7.slice(5-1, 11);
console.log("Copia del array de meses desde Mayo hasta Noviembre: " + mesesCopia);