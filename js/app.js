// let numero1='15';
// let numero2='3';

// console.log(numero1 + numero2);
// console.log(numero1 * numero2);
// console.log(numero1<10 || numero2==3 );
// console.log(numero1<15 && numero2==3 );
// alert ("soy una alerta");

// let a = prompt ("ingresa un valor para a");
// let b = prompt ("ingresa un valor para b");

// let suma = (a+b);
// let multiplo = (a*b);

// console.log(suma);
// console.log(multiplo);

// suma >20 || multiplo >20 ? console.log("Hay un numero mayor a 20"): console.log("Hay un numero menor que 20");

// let suma1 = (suma++);
// let dismunuye1 = (--suma);

// console.log(suma1);
// console.log(dismunuye1);
// //!
// //?
// //* 

/*Clase 2 - Ejercicio 1:
1- Crear 3 variables y agregarles valor numérico a las primeras 2
2- Mostrar en consola la suma, resta, producto y división
3- Observar si son pares o no lo son */
//1
// const var1 = 1;
// const var2 = 2;
// let var3; 
// //2
// let suma = var1 + var2;
// let resta = var1 - var2;
// let prod = var1 * var2;
// let div = var1 / var2;

// console.log(suma);
// console.log(resta);
// console.log(prod);
// console.log(div);
// //3
// var1%2 == 0 ? console.log('var1 es par') : console.log('var1 es impar');
// var2%2 == 0 ? console.log('var2 es par') : console.log('var2 es impar');
// suma%2 == 0 ? console.log('suma es par') : console.log('suma es impar');
// resta%2 == 0 ? console.log('resta es par') : console.log('resta es impar');
// prod%2 == 0 ? console.log('prod es par') : console.log('prod es impar');
// div%2 == 0 ? console.log('div es par') : console.log('div es impar');

// /*Ejercicio 2:
// 1- Agregar valor a la tercer variavle
// 2- Sumarla, multiplicarla y restarla a los resultados anteriores */
// //1
// var3 = 3;
// //2
// console.log(suma + var3);
// console.log(prod * var3);
// console.log(resta - var3);
// // o sino: 
// var3 = 5; //! mofidiqué var3
// suma = suma + var3;
// prod = prod * var3;
// resta = resta - var3;
// console.log(suma);
// console.log(prod);
// console.log(resta);

// //! menos por menos es mas - ejemplo:
// console.log (prod-resta); // 10 - (-6) = 16

/* Challenge 12 
1- Obtener la base y la altura de un triángulo
2- Obtener el radio de un circulo
3- Mostrar en consola el área del triángulo y del circulo
//*! Area del triángrulo: (base x altura) /2
//*! Area del circulo: pi x radio^2 
*/
//1
// let triangleBase = prompt ('Ingrese un número para la base del triángulo');
// let triangleHeight = prompt ('Ingrese un número para la altura del triángulo');
// //2
// let radioCircle = prompt ('Ingrese un número para el radio del circulo');
// //
// let triangleArea = (triangleBase * triangleHeight) / 2; 
// console.log(`El área del triángulo es igual a: ${triangleArea}`);
// let circleArea = 3.14* (Math.pow(radioCircle,2));
// console.log(`El área del circulo es igual a: ${circleArea}`);

// //Un simple string
// console.log('Hola Mundo');
// console.log("Hola Mundo");

// //Escapando a tantas comillas
// console.log('La persona dijo: "Hola Mundo"');
// console.log("La 'persona' dijo: \"Hola Mundo\"");

// //Concatenación de string
// console.log("Hola "+", "+"soy "+"una "+"concatenación");
// let ganador = 'Leo Messi';
// // Concatenar un string con una variable
// console.log('El ganador es: '+ ganador); 
// //Generar un nuevo ganador
// // ganador=prompt('Indique su nombre')
// let premio = '$1000';
// let direccion = 'San Martin 250          '
// console.log('El ganador es: '+ ganador);
// //Concatenación de variable en el medio de un texto
// console.log('El ganador es: '+ ganador + ', y se gano un ' + premio + 'que lo tiene que pasar a rej en: ' + direccion);

// //Template literals
// console.log(`El ganador es: ${ganador}, y se gano un ${premio}, que lo tiene que pasar a retirar en ${direccion}`);

// //metodos utiles
// console.log(direccion.toUpperCase()); //pasar a mayuscula
// console.log(direccion.toLowerCase()); //pasar a minuscula
// console.log(direccion.length); //ver la cantidad de caracteres (propiedad)
// console.log(direccion.charAt(5));//para obtener el caracter segun la posición
// console.log(direccion.substr(0,3)); //El cero es la posición inicial, y el 3 indica la cantidad de caracteres que quiero obtener desde mi posicion inicial
// console.log(direccion.trim()); // Borra todos los espacios del inicio y final de la cadena
// console.log(direccion.includes('San Martin')); //Devuelve un true, si encuentra la cadena especificada en la cadena direccion en este caso.

/*Challenge 13
1- Obtener un número del usuario y mostrar en consola si es par */
// let userNumer = prompt ('Ingrese un número');
// userNumer % 2 == 0 ? console.log('El número ingresado es par') : console.log('El número ingresado es impar');

// EJERCICIO PATOVICA BOLICHE
// let edad = Number(prompt('Cuál es tu edad?'));
// if (isNaN(edad) === false){
//     console.log('Ingresó un dígito númerico :)');
//     if(edad>=18){
//         alert('Disfrute la fiesta');
//     }else{
//         let tutor = prompt('Tenes tutor?');
//         if(tutor.toLowerCase()=='si'){
//             alert('Disfruten la fiesta');
//         }else{
//         alert('Vaya a la casa changuito');
//         }    
//     }
// }
// else{
//     alert('Ingrese un dígito numérico')
//     }

//*CONDICIONALES MULTIPLES - SWITCH
// const provincia = prompt ('De qué provincia sos?');

// switch (provincia){
//     case 'Tucuman':
//         alert('Que rico sanguche de milanga');
//     break;
//     case 'Cordoba':
//         alert('Que buen fernet');
//     break;
//     default:
//         alert('Que provincia aburrida')
// }

/* Challenge 14
1- Pedir 2 números al usuario
2- Mostrar en consola si el primer número es mayor, menor o igual que el segundo.
*/
//  let numero1 = Number(prompt ('Ingrese un número'));
//  let numero2 = Number(prompt ('Ingrese otro número'));

// if (numero1>numero2){
//     alert('Numero1 es mayor que Numero2');
//     console.log('Numero1 es mayor que Numero2');
// }else if (numero1<numero2){
//     alert('Numero1 es menor que Numero2');
//     console.log('Numero1 es menor que Numero2');
// }else{
//     alert('Numero1 y Numero2 son iguales');
//     console.log('Numero1 y Numero2 son iguales');
// }

//* UTILIZANDO SWITCH
// switch (true) {
//     case numero1>numero2 :
//         alert('Numero1 es mayor que Numero2');
//         console.log('Numero1 es mayor que Numero2');
//     break;
//     case numero1<numero2 :
//         alert('Numero1 es menor que Numero2');
//         console.log('Numero1 es menor que Numero2');
//     break;
//     default: 
//         alert('Numero1 y Numero2 son iguales');
//         console.log('Numero1 y Numero2 son iguales');
//     break;
// }

/* EJERCICIO clase 4 JS
1- ingresar 2 numeros
2- si el primero es mayor que el 2do. mostrar la suma de ambos
3- si es menor, mostrar resta del 2do - el 1ero
4- si son iguales, la multiplicacion */

// let num1 = parseFloat(prompt ("ingresa un valor para num1"));
// let num2 = parseFloat(prompt ("ingresa un valor para num2"));
// let suma = (num1 + num2);
// let resta = (num2 - num1);
// let multi = (num1 * num2);

// if (num1 > num2){
//     console.log(suma)
// }else if(num1 < num2){
//     console.log(resta)
// }else {
//     console.log(multi);
// }

//EJ - DECIME TU EDAD Y TE DIGO UN ARTISTA MUSICAL DE TU DECADA
// let edad = Number(prompt('Cuál es tu edad?'));

// switch (true) {
//     case edad>0 && edad<=10:
//         alert('María Elena Walsh');
//     break;
//     case edad>=11 && edad<=20:
//         alert('Paulo Londra');
//     break;
//     case edad>=21 && edad<=30:
//         alert('Red hot chili papers');
//     break;
//     case edad>=31 && edad<=40:
//         alert('Michael Jackson');
//     break;
//     case edad>=41 && edad<=50:
//         alert('Queen');
//     break;
//     case edad>=51 && edad<=60:
//         alert('The Beatles');
//     break;
//     default:
//         alert('Blues, country, Jazz');
//     break;
// }

//EJ - QUÉ DÍA ES HOY?
// let day = new Date().getDay();
// let date = new Date().getDate();
// console.log(`Hoy es ${date} de Julio`);

// switch (true) {
//     case day == 1:
//         aler(`Hoy es Lunes ${date} de Julio`);
//         console.lo(`Hoy es Lunes ${date} de Julio`);    
//     break;
//     case day == 2:
//         alert(`Hoy es Martes ${date} de Julio`);
//         console.log(`Hoy es Martes ${date} de Julio`);    
//     break;
//     case day == 3:
//         alert(`Hoy es Miércoles ${date} de Julio`);
//         console.log(`Hoy es Miércoles ${date} de Julio`);   
//     break;
//     case day == 4:
//         alert(`Hoy es Jueves ${date} de Julio`);
//         console.log(`Hoy es Jueves ${date} de Julio`);    
//     break;
//     case day == 5:
//         alert(`Hoy es Viernes ${date} de Julio`);
//         console.log(`Hoy es Viernes ${date} de Julio`);   
//     break;
//     case day == 6:
//         alert(`Hoy es Sábado ${date} de Julio`);
//         console.log(`Hoy es Sábado ${date} de Julio`);    
//     break;
//     case day == 7:
//         alert(`Hoy es Domingo ${date} de Julio`);
//         console.log(`Hoy es Domingo ${date} de Julio`);    
//     break;
// }


//ESTRUCTURAS ITERATIVAS O REPETITIVAS (BUCLES)
// *WHILE
// AL INGRESAR UN NÚMERO SE DEBEN MOSTRAR EN CONSOLA TODOS LOS NÚMEROS ANTERIORES

// let numero = Number(prompt('ingrese un número'));
// let contador = 0;

// while(contador<numero){
//     console.log(contador);
//     contador++;
// }

//EJ - PORQUÉ LA LUNA ES MAYOR QUE EL SOL?
// let respuestaCorrecta = 'porque sale de noche';
// let intentoUsuario = false;

// while(intentoUsuario === false){
//     let propuesta = prompt('Porqué la luna es mayor que el sol?');
//     if (propuesta === respuestaCorrecta){
//         intentoUsuario = true;  
//         alert('Bien ahí papeeeeeeeeeeeeeeeeeeeeeee');
//     }else{
//         alert('Intentá de nuevo');
//     }
// }

//* DO - WHILE 
// let numero
// do{
//     numero = Number(prompt('ingrese un número'));
// }while(isNaN(numero)===true)

//* FOR
// let numero = prompt('ingresa un número');

// for (let contador = 0; contador < numero; contador++) {
//     console.log(contador);
// }

/*EJERCICIO EN EQUIPO:
1- Recibir 2 valores y la operación a realizar (+,-,*,/)
2- verificar que los valores ingresados no sean NaN, si lo son convertirlos a 0. (pista: isNAN())
3- Con una estructura switch verificar la operación y 
devolver un mensaje con el resultado de la misma
4- Si se ingresa una operación que no está contempalda, devolver mensaje de error
*/
// //1-
// let numero1 = Number(prompt('ingresá un número'));
// let numero2 = Number(prompt('ingresá otro número'));
// let operacion = prompt('ingresá una operación a realizar entre los 2 números anteriores');
// //2-
// if(isNaN(numero1) === true){
//     numero1 = 0;
// }
// if(isNaN(numero2) === true){
//     numero2 = 0;
// }
// console.log(numero1);
// console.log(numero2);
// console.log(operacion);
// //3 y 4-
// switch (operacion) {
//     case '+':
//         alert(`El resultado de la suma es ${numero1+numero2}`);
//         console.log(`El resultado de la suma es ${numero1+numero2}`);
//     break;
//     case '-':
//         alert(`El resultado de la resta es ${numero1-numero2}`);
//         console.log(`El resultado de la resta es ${numero1-numero2}`);
//     break;
//     case '*':
//         alert(`El resultado de la multiplicación es ${numero1*numero2}`);
//         console.log(`El resultado de la multiplicación es ${numero1*numero2}`);
//     break;
//     case '/':
//         alert(`El resultado de la división es ${numero1/numero2}`);
//         console.log(`El resultado de la división es ${numero1/numero2}`);
//     break;
//     default:
//         alert('Error! La operación que ingresaste no es válida')
//         console.log('Error! La operación que ingresaste no válida')
//         break;
// }

/* Crear un promp de la espada en la piedra, en dónde solo 
pueda obtenerla alguien que sea rey y que se llame Arturo*/

// let personaCorrecta = 'Arturo';
// let respuestaNombre = false;
// let soyRey = 'si';
// let nombreUsuario;
// let preguntaRey;

// while(respuestaNombre==false){
//     nombreUsuario = prompt('Cuál es tu nombre?');
//     if(nombreUsuario==personaCorrecta){
//         preguntaRey = prompt('Sos rey?');
//         if(preguntaRey == soyRey){
//             alert('la espada es tuia paper')
//             respuestaNombre==true;
//         }else{
//             alert('Intentá de nuevo')
//         }
//     }else{
//         alert('Vayase a las casa')
//     }
// }
// let nombreCorrecto = 'Arturo';
// let respuestaUsuario = false;
// let intentoUsuario;
// let soyRey = 'si';
// let nombreUsuario;


// while(respuestaUsuario===false){
//     intentoUsuario = prompt('Cuál es tu nombre?');
//     if(intentoUsuario===nombreCorrecto){
//         nombreUsuario = prompt('Sos rey?');
//         if(nombreUsuario === soyRey){
//             alert('Excálibur es tuia sapee');
//             respuestaUsuario=true;
//         }
//     }else{
//         alert('Tomate el palo salame');
//         }   
// }

//*SOLUCIÓN CON confirm()
// let nombreCorrecto = 'Arturo';
// let respuestaUsuario = false;
// let intentoUsuario;
// let nombreUsuario;

// while(respuestaUsuario===false){
//     intentoUsuario = prompt('Cuál es tu nombre?');
//     if(intentoUsuario===nombreCorrecto){
//         let soyRey = confirm('Sos rey?');
//         if(soyRey == true){
//             alert('Excálibur es tuia sapee');
//             respuestaUsuario=true;
//         }
//     }else{
//         alert('Tomate el palo salame');
//         }
// }

/*INTELIGENCIA ARTIFICIAL EN UN HOSPITAL
EJ - Un hospital quiere una app en donde el paciente
ponga sus datos, su dolencia, y se determine que estudio
debe realizarse.
//*DOLENCIA: dolor abdominal
//! A TENER EN CUENTA:
A las mujeres embarazadas no se les puede hacer una
tomografia o una placa porque puede tener efectos 
teratogénicos.*/

// let nombre = prompt('Cómo es tu nombre?');
// let pain
// let age = prompt('Cuál es tu edad?');
// let gender

// if(nombre !== ''){
//     pain = prompt('Cuál es tu dolencia?');
//     switch (pain) {
//         case 'dolor de cabeza':
//             alert('tomate un ibuprofeno');
//         break;
//         case 'dolor de espalda':
//             alert('turno al osteopata');
//         break;
//         case 'dolor de garganta':
//             alert('hacete un té con miel');
//         case 'dolor abdominal':
//             gender = prompt('Cuál es tu genero?');
//             if(gender=='femenino'){
//                 let pregnant = prompt('Estás embarazada?');
//                 switch (pregnant) {
//                     case 'si':
//                         alert('taicho');
//                     break;
//                     case 'no':
//                         let confirmacion = prompt('Estás segura?');
//                         if(confirmacion== 'si'){
//                             alert('confiamos en tu palabra. si te moris es culpa tuya')
//                         }else{
//                             alert('esta información es importante! necesitamos realizarte un chequeo para estar seguros');
//                         }
//                     break;
//                     default:
//                         alert('ante la duda, te realizaremos un estudio para estar seguros');
//                     break;
//                 }
//             }else{
//                 alert('te realizaremos una placa');
//                 }
//         break;
//         default:
//             alert('te derivaremos con un profesional');
//         break;
//     }
// }

// //*CREAR UN ARRAY DE LOS DIAS Y MOSTRARLOS UNO POR UNO

// const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado','Domingo'];
// console.log(days.length);

// for(let contador=0; contador<days.length; contador++){
//     console.log(days[contador]);
// }

/* EJERCICIO CLASE DE CONSULTA JS:
1- LA APP PIDE NÚMEROS HASTA QUE APRIETE BOTÓN PARA CANCELAR
2- CUANDO SE CANCELA, DEBE MOSTRAR EN CONSOLA TODOS LOS NÚMEROS INGRESADOS JUNTOS
3- SI INGRESA ALGO QUE NO SEA UN NÚMERO, MOSTRAR ALERT Y SEGUIR PIDIENDO NÚMEROS
*/

// let numero;
// let numerosIngresados = '';

// while(numero !== null){
//     numero = prompt('Ingresá un número');
//     if(isNaN(Number(numero))){
//         alert('Ingresá un dígito numérico')
//     }else{
//         if(numero !== null){
//         numerosIngresados = numerosIngresados + numero;
//     }
//     }
// }
// console.log(numerosIngresados);

//* EJ CLASE DE CONSULTA 
//1- COMPROBAR SI UN DNI INGRESADO ES VALIDO

// let dni = prompt('Ingresá tu número de DNI');

/* EJ 2- CLASE DE CONSULTA JS:
1- LA APP PIDE NÚMEROS HASTA QUE APRIETE BOTÓN PARA CANCELAR
2- CUANDO SE CANCELA, DEBE MOSTRAR EN CONSOLA TODOS LOS NÚMEROS INGRESADOS JUNTOS
3- SI INGRESA ALGO QUE NO SEA UN NÚMERO, MOSTRAR ALERT Y SEGUIR PIDIENDO NÚMEROS
*/

// let numero;
// let numerosIngresados = '';

// while (numero !== null){
//     numero = prompt('Ingresá un número');
//     if(isNaN(numero)== true){
//         alert('Ingresá un dígito numérico');
//     }else{
//         if(numero !== null){
//         numerosIngresados = numerosIngresados + numero;
//         }
//     }
// }
// console.log(numerosIngresados);


//*FUNCIONES
// CALLBACKS
// function hello (nombre) {
//     alert('Hola ' + nombre);    
// }
// function ingreso (funcion) {
//     let nombre = prompt('Ingrese su nombre');
//     funcion(nombre); // De dónde sale *funcion? En qué momento se declaró?
// }
// ingreso(hello);

// const ingredientesPizza = ['masa', 'queso', 'salsa'];

// function comer (comida) {
//     console.log('Estoy comiendo ' + comida(ingredientesPizza));
// }
// function prepararComida (ingredientes) {
//     let comida = ingredientes.join(', ');
//     return comida;    
// }
// comer(prepararComida);

//EJERCICIO IMC (PESO/ALTURA^2)
// let  eight = Number(prompt('Cuál es tu peso?'));
// let height = (Number(prompt('Cuál es tu altura?'))).toFixed(2);

// function imc (peso, altura) {
//     return (peso / Math.pow(altura,2)).toFixed(2);
// }
// console.log(`Con un peso de ${weight}kg y una alura de ${height}mts, tu IMC es de ${imc(weight, height)}.`);

//EJERCICIO CALCULADORA
// let num1 = Number(prompt('Ingrese un número'));
// let op = prompt("Ingrese una operacion (Suma +, Resta -, Multiplicación * o División /)");
// let num2 = Number(prompt('Ingrese un número'));

// function calculadora (numero1, numero2, operacion) {
//     if(isNaN(num1) || isNaN(num2)){
//         alert('Ingresá un digito numérico');
//     }
//     switch (operacion) {
//         case '+':
//         return numero1+numero2;
//         case '-':
//         return numero1-numero2;
//         case '*':
//         return numero1*numero2;
//         case '/':
//         return numero1/numero2;
//         default:
//             alert('Ingrese una operación válida ('+', '-', '*' o '/')');
//         break;
//     }
// }
// console.log(`El resultado de la operación es ${calculadora(num1, num2, op)}`);

// EJERCICIO PIEDRA PAPEL O TIJERA
// let opciones = ['piedra', 'papel', 'tijera'];

// function bot () {
//     let jugada = Math.round(Math.random()*2);
//     alert(`El bot jugó ${opciones[jugada]}`);
//     console.log(`El bot jugó ${opciones[jugada]}`);
//     return jugada;
// }
// function player () {
//     let jugada = prompt('Piedra, papel o tijera?');
//     jugada = opciones.indexOf(jugada);
//     console.log(`Vos jugaste ${opciones[jugada]}`);
//     return jugada;
// }
// function definicion (usuario, pc) {
//     switch (true) {
//         case usuario===pc:
//             alert('ES UN EMPATE');
//             console.log('ES UN EMPATE');
//         break;
//         case usuario===0 && pc===1:
//             alert('PERDISTE! Papel envuelve la piedra.');
//             console.log('GANA EL BOT! Papel envuelve la piedra.');
//         break;
//         case usuario===0 && pc===2:
//             alert('GANASTE! Piedra rompe tijera.');
//             console.log('GANASTE! Piedra rompe tijera');
//         break;
//         case usuario===1 && pc===0:
//             alert('GANASTE! Papel envuelve la piedra.');
//             console.log('GANASTE! Papel envuelve la piedra.');
//         break;
//         case usuario===1 && pc===2:
//             alert('PERDISTE! Tijera corta papel.');
//             console.log('GANA EL BOT! Tijera corta papel.');
//         break;
//         case usuario===2 && pc===0:
//             alert('PERDISTE! Piedra rompe tijera.');
//             console.log('GANA EL BOT! Piedra rompe tijera.');
//         break;
//         case usuario===2 && pc===1:
//             alert('GANASTE! Tijera corta papel.');
//             console.log('GANASTE! Tijera corta papel.');
//         break;
//     }
// }

// function juego () {
//     definicion(player(), bot());    
// }


//EJERCICIO TIRAR DADOS
// let tirados = '';
// let tiros = 0;
// let dado1;
// let dado2;

// function opcionesTiro () {
//     dado1 = Math.round((Math.random()*5)+1);
//     dado2 = Math.round((Math.random()*5)+1);
//     alert(`Resultado: ${dado1} y ${dado2}`);
//     console.log((`Ultimo tiro: ${dado1} y ${dado2}`));
//     console.log(`Acumulado: ${tirados = tirados + `${dado1} ${dado2} `}`);
//     console.log(`Cantidad de tiros: ${tiros = tiros +1}`);
//     return (dado1, dado2);
// }

// function dados () {
//     opcionesTiro();
// }

//EJERCICIO CARRITO DE COMPRAS
/* Armemos un carrito de compras que permita al usuario:
1- Agregrar productos
2- Mostrar carrito completo
3- Buscar productos en el carrito
4- Filtrar productos que coincidan con una palabra, parte de ella o una letra
5- Eliminar un producto */

// let carrito = [];

//*AGREGAR PRODUCTO CON WHILE? REVISAR
// function agregarProducto(){
//     let producto;
//     do{
//     producto = prompt('Ingresá aquí tu producto');
//     carrito.push(producto);
//     alert(`Agregaste: -${producto} a tu carrito`);
//     console.log(`Agregaste: ${producto} a tu carrito de compras`);
//     }while(producto!==null){
//         alert(`Agregaste ${carrito.length} productos a tu carro`)
//     }
// }

// function agregarProducto(){
//     let producto = prompt('Ingresá aquí tu producto');
//     if(producto.length==0){
//         alert('Te olvidaste el producto pai')
//     }else{
//     carrito.push(producto);
//     alert(`Agregaste a tu carrito: ${producto}`);
//     console.log(`Agregaste a tu carrito: ${producto}`);
//     console.log(carrito);
//     }
// }

// function mostrarCarrito(){
//     if(carrito.length===0){
//         alert('Todavía no agregaste ningún producto')
//     }else{
//     alert(`Los productos de tu carrito son: \n- ${carrito.join('\n- ')}`);
//     console.log(`Los productos de tu carrito son: \n- ${carrito.join('\n- ')}`);
//     }
// }

// function buscarProducto (){
//     let productoBuscado = prompt('Buscar producto en carrito:');
//     if(carrito.includes(productoBuscado)){
//         alert(`${productoBuscado} si se encuentra en tu carrito`)
//         console.log(`${productoBuscado} si se encuentra en tu carrito`);
//     }else{
//         alert(`${productoBuscado} no se encuentra en tu carrito`)
//         console.log(`${productoBuscado} no se encuentra en tu carrito`);
//     }
// }

// function filtrarEnCarrito (){
//     let productoFiltrado = prompt('Filtrar búsqueda:');
//     let filtrar = carrito.filter(producto=>producto.includes(productoFiltrado));
//     if(filtrar.length===0){
//         alert(`No hay coincidencias de búsqueda con ${productoFiltrado}`);
//     }else{
//         alert(`Las coincidencias de filtro son:\n- ${filtrar.join('\n- ')}`);
//         console.log(`Las coincidencias de filtro son:\n- ${filtrar.join('\n- ')}`);
//     }
// }
// function eliminarProducto(){
//     let productoAEliminar = prompt('Qué producto querés eliminar?');
//     let posicion = carrito.indexOf(productoAEliminar);
//     if(posicion===-1){ //? por qué -1?
//         alert(`No hay coincidencias con ${productoAEliminar}`);
//     }else{
//     carrito.splice(posicion, 1);
//     alert(`El producto ${productoAEliminar} se borró correctamente. Los productos de tu carrito son:\n- ${carrito.join('\n- ')}` );
//     console.log(`El producto ${productoAEliminar} se borró correctamente. Los productos de tu carrito son:\n- ${carrito.join('\n- ')}` );
//     }
// }

//MEJORAR:
// unificar mayúsculas y minusulas en el prompt
// mostrar lista de productos en alert y dar la opcion de borrar 
// con un número en vez del nombre


//!

//*Challenge 15:
/*Crear un algoritmo por el cual se simule el lanzamiento de dos dados
PISTA: Math.random()
*/

//!SUMPLE:
// let tirados = [];
// let tiros = 0;
// let dado1;
// let dado2;

// function dados () {
//     dado1 = Math.round(Math.random()*6+1);    
//     dado2 = Math.round(Math.random()*6+1);
//     tiros = 0;
//     tirados = [];
//     alert(`Dados ${dado1} ${dado2}`);
//     console.log(`Dados ${dado1} ${dado2}`)
//     console.log(`Acumulado: ${tirados = tirados + `${dado1} ${dado2} `}`);
//     console.log(`Cantidad de tiros: ${tiros = tiros +1}`);
//     return (`${dado1}, ${dado2}`);
// }
// dados()

// let tirados = [];
// let tiros = 0;
// let dado1;
// let dado2;

// function dados () {
//     dado1 = Math.round((Math.random()*5)+1);
//     dado2 = Math.round((Math.random()*5)+1);
//     alert(`Resultado: ${dado1} y ${dado2}`);
//     console.log((`Ultimo tiro: ${dado1} y ${dado2}`));
//     console.log(`Acumulado: ${tirados = tirados + `${dado1} ${dado2} `}`);
//     console.log(`Cantidad de tiros: ${tiros = tiros +1}`);
//     return (dado1, dado2);
// }

// function dados () {
//     opcionesTiro();
// }
// dados()

//!VERSION ULTRA PRO:
// let numeroDado;
// let acumulados = [];
// let cantidadTiros = 0;

// let uno = 0;
// let dos = 0;
// let tres = 0;
// let cuatro = 0;
// let cinco = 0; 
// let seis = 0;

// function dado () {
//     cantidadTiros = cantidadTiros+1;
//     numeroDado = Math.round(Math.random()*6+1);
//     acumulados.push(numeroDado);
//     switch (numeroDado) {
//         case 1:
//             uno = uno+1;
//         break;
//         case 2:
//             dos = dos+1;
//         break;
//         case 3:
//             tres = tres+1;
//         break;
//         case 4:
//             cuatro = cuatro+1;
//         break;
//         case 5:
//             cinco = cinco+1;
//         break;
//         case 6:
//             seis = seis+1;
//         break;
//         default:
//         break;
//     }

// //?COMO HACER PARA EJECUTARLO FUERA DE LA FUNCION Y QUE SE VAYA ACTUALIZANDO SOBRE EL MISMO?
// console.log(`Número dado: ${numeroDado}\nCantidad de tiros: ${cantidadTiros}\nAcumulados: ${acumulados.join(' - ')}`);
// console.log(`1: ${uno} - ${((uno/cantidadTiros)*100).toFixed(2)} %`);
// console.log(`2: ${dos} - ${((dos/cantidadTiros)*100).toFixed(2)} %`);
// console.log(`3: ${tres} - ${((tres/cantidadTiros)*100).toFixed(2)} %`);
// console.log(`4: ${cuatro} - ${((cuatro/cantidadTiros)*100).toFixed(2)} %`);
// console.log(`5: ${cinco} - ${((cinco/cantidadTiros)*100).toFixed(2)} %`);
// console.log(`6: ${seis} - ${((seis/cantidadTiros)*100).toFixed(2)} %`);

// //!DOCUMENT.GETELEMENTBYID ?????????? INVESTIGAR
// // let aMostrar = `
// // <h2>Cara ${numeroDado}</h2>
// // <h2>Cantidad de tiros ${cantidadTiros}</h2>
// // <h2>Cantidad y (%) de veces que salio una cara</h2>
// // <h3>Cara 1 cantidad ${uno} - ${((uno/cantidadTiros)*100).toFixed(2)} %</h3>
// // <h3>Cara 2 cantidad ${dos} - ${((dos/cantidadTiros)*100).toFixed(2)} %</h3>
// // <h3>Cara 3 cantidad ${tres} - ${((tres/cantidadTiros)*100).toFixed(2)} %</h3>
// // <h3>Cara 4 cantidad ${cuatro} - ${((cuatro/cantidadTiros)*100).toFixed(2)} %</h3>
// // <h3>Cara 5 cantidad ${cinco} - ${((cinco/cantidadTiros)*100).toFixed(2)} %</h3>
// // <h3>Cara 6 cantidad ${seis} - ${((seis/cantidadTiros)*100).toFixed(2)} %</h3>
// // <br>
// // <p>Historial</p>
// // <p>${acumulados.join(' - ')}</p>
// // `;
// // document.getElementById('resultado').innerHTML = aMostrar;
// }

//*Challenge 16:
/*Pedir al usuario un número, y mostrar por consola la tabla de ese número. 
Ejemplo: El usuario ingresa 5. En la consola se imprime lo siguiente:
La tabla del 5 es:
5x1=5
5x2=10
5x3=15
5x4=20
5x5=25
5x6=30
5x7=35
5x8=40
5x9=45
5x10=50
*/
// let numero = prompt('Ingresá un número:');
// let tablaNumero = '';

// for (let i = 1; i<=10 ; i++) {
//     tablaNumero = numero*i;
//     console.log(`${numero} x ${i} = ${tablaNumero}`);
// }


//*Challenge 17:
//El usuario ingresa un DNI. Comprobar que sea válido, es decir, que tenga 
//7 u 8 dígitos y que no sea todos ceros

// let dni = prompt('Ingresá tu número de DNI:');

// if(dni.length >= 7 && dni.length <= 8 && dni !== 0){
//     console.log(dni);
// }else{
//     console.error('Documento Inválido');
// }



//*Challenge 18:
/*Pedirle números al usuario hasta que el usuario aprete el botón de cancelar.
Verificar que lo ingresado por el usuario sea un número válido (avisar por alert si no lo es).
Al apretar cancelar, se deben mostrar todos los números juntos.
EJEMPLO:
1. Me pide un número
2. Ingreso un 15
3. Me pide otro número
4. Ingreso la palabra Diego
5. Me dice que no es un número válido
6. Ingreso un 23
7. Me pide otro número
8. Apreto cancelar
9. En consola se muestra '1523'
10. No me pide más números
*/

// *Challenge 19:
// Armar un piedra papel o tijeras, donde el jugador juegue contra un bot.
//*hacer con mas funciones. en vez de switch true. hacerlo con las posiciones del array ?
// let opciones = ['piedra', 'papel', 'tijera'];
// let totalUsuario = 0;
// let totalBot = 0;


// function bot () {
//     let jugada = Math.round(Math.random()*2);
//     alert(`El bot jugó ${opciones[jugada]}`);
//     console.log(`El bot jugó ${opciones[jugada]}`);
//     return jugada;
// }
// function player () {
//     let jugada = prompt('Piedra, papel o tijera?');
//     jugada = opciones.indexOf(jugada);
//     console.log(`Vos jugaste ${opciones[jugada]}`);
//     return jugada;
// }
// function definicion (usuario, pc) {
//     switch (true) {
//         case usuario===pc:
//             alert('ES UN EMPATE \nUsuario: '+ totalUsuario + ' Bot: ' + totalBot);
//             console.log('ES UN EMPATE');
//         break;
//         case usuario===0 && pc===1:
//             totalBot = totalBot + 1;
//             alert('PERDISTE! \nPapel envuelve la piedra. \nUsuario: '+ totalUsuario + ' Bot: ' + totalBot);
//             console.log('GANA EL BOT! Papel envuelve la piedra.');
//         break;
//         case usuario===0 && pc===2:
//             totalUsuario = totalUsuario + 1;
//             alert('GANASTE! \nPiedra rompe tijera. \nUsuario: '+ totalUsuario + ' Bot: ' + totalBot);
//             console.log('GANASTE! Piedra rompe tijera');
//         break;
//         case usuario===1 && pc===0:
//             totalUsuario = totalUsuario + 1;
//             alert('GANASTE! \nPapel envuelve la piedra. \nUsuario: '+ totalUsuario + ' Bot: ' + totalBot);
//             console.log('GANASTE! Papel envuelve la piedra.');
//         break;
//         case usuario===1 && pc===2:
//             totalBot = totalBot + 1;
//             alert('PERDISTE! \nTijera corta papel. \nUsuario: '+ totalUsuario + ' Bot: ' + totalBot);
//             console.log('GANA EL BOT! Tijera corta papel.');
//         break;
//         case usuario===2 && pc===0:
//             totalBot = totalBot + 1;
//             alert('PERDISTE!\nPiedra rompe tijera. \nUsuario: '+ totalUsuario + ' Bot: ' + totalBot);
//             console.log('GANA EL BOT! Piedra rompe tijera.');
//         break;
//         case usuario===2 && pc===1:
//             totalUsuario = totalUsuario + 1;
//             alert('GANASTE! \nTijera corta papel. \nUsuario: '+ totalUsuario + ' Bot: ' + totalBot);
//             console.log('GANASTE! Tijera corta papel.');
//         break;
//     }
// //!RESULTADO AL MEJOR DE 5:
// console.log(totalUsuario);
// console.log(totalBot);
// if(totalUsuario == 3){
//     alert('GANASTE LA PARTIDA!\nTotal Usuario: '+ totalUsuario + 'Total Bot: ' + totalBot)
// }
// if(totalBot == 3){
//     alert('PERDISTE!\nTotal Usuario: '+ totalUsuario + 'Total Bot: ' + totalBot)
// }
// }

// function juego () {
//     definicion(player(), bot());    
// }

//*Challenge 20:
//CARRITO DE COMPRAS
/* Armemos un carrito de compras que permita al usuario:
1- Agregrar productos
2- Mostrar carrito completo
3- Buscar productos en el carrito
4- Filtrar productos que coincidan con una palabra, parte de ella o una letra
5- Eliminar un producto */

// //1
let producto;
let carrito = [];

function agregarProducto () {
    while (producto !== null) {
    producto = prompt('Agregá un producto a tu carrito de compras');
        if(producto !== null){
        carrito.push(producto.toLowerCase().trim());
        console.log('Agregaste ' + producto);
    }
    }
}

function mostrarCarrito () {
    alert(carrito);
    console.log(carrito);
}

function buscarProducto (){
    let productoBuscado = (prompt('Buscar producto en carrito:').toLowerCase().trim());
    console.log(`${productoBuscado} se encuentra en tu carrito? ${carrito.includes(productoBuscado)}`);

    //     alert(`${productoBuscado} si se encuentra en tu carrito`)
    //     console.log(`${productoBuscado} si se encuentra en tu carrito`);
    // }else{
    //     alert(`${productoBuscado} no se encuentra en tu carrito`)
    //     console.log(`${productoBuscado} no se encuentra en tu carrito`);
    }


function filtrarEnCarrito () {
    let productoFiltrado = (prompt('Filtrar producto en carrito:').toLowerCase().trim());
    let filtrar = carrito.filter(producto=>producto.includes(productoFiltrado.toLowerCase().trim())); 
    //? si o si va el includes en el filter?
    console.log(filtrar);
}

function eliminarProducto () { // hacer que funcione con filtrando y no solo con la palabra exacta
    let eliminarEnCarrito = (prompt('Qué producto querés eliminar?').toLowerCase().trim());
    let posicion = carrito.indexOf(eliminarEnCarrito);
    if (posicion === -1){
        alert('Te olvidase de escribir muñeco');
    }else{
        let borrado = carrito.splice(posicion, 1);
        console.log(`Los productos de tu carrito son:\n- ${carrito.join('\n- ')}`);
        console.log(`Articulo borrado: ${borrado}`);
    }
}