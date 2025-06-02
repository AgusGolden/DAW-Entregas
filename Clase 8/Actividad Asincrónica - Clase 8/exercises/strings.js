// Pregunta 4: Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
let texto = "Desarrollo y Arquitectura Web";
let textoMayuscula = texto.toUpperCase();
console.log("Texto en mayúscula: " + textoMayuscula);


// Pregunta 5: Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando 
// el resultado en una nueva variable (utilizar substring).
let texto2 = "Desarrollo y Arquitectura Web";
let primerosCincoCaracteres = texto2.substring(0, 5);
console.log("Primeros 5 caracteres: " + primerosCincoCaracteres);


// Pregunta 6: Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el 
// resultado en una nueva variable (utilizar substring).
let texto3 = "Desarrollo y Arquitectura Web";
let ultimosTresCaracteres = texto3.substring(texto3.length - 3);
console.log("Últimos 3 caracteres: " + ultimosTresCaracteres);


// Pregunta 7: Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las 
// demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
let texto4 = "desarrollo y Arquitectura Web";
let primeraLetra = texto4.substring(0, 1).toUpperCase();
console.log("Primera letra en mayúscula: " + primeraLetra);
let restoTexto = texto4.substring(1).toLowerCase();
console.log("Resto del texto en minúscula: " + restoTexto);


// Pregunta 8: Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio 
// en blanco y guardarla en una variable (utilizar indexOf).
let texto5 = "Desarrollo y Arquitectura Web";
let posicionPrimerEspacio = texto5.indexOf(" ");
console.log("Posición del primer espacio en blanco: " + posicionPrimerEspacio);


// Pregunta 9: Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos 
// de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en 
// minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
let texto6 = "dESARROLLOS aRQUITECTURAS";
let textoReescrito = texto6.substring(0, 1).toUpperCase() +
    texto6.substring(1, texto6.indexOf(" ") + 1).toLowerCase() +
    texto6.substring(texto6.indexOf(" ") + 1, texto6.indexOf(" ") + 2).toUpperCase() +
    texto6.substring(texto6.indexOf(" ") + 2).toLowerCase();
console.log("Texto reescrito: " + textoReescrito);