
var arregloNombres = [ "Luis", "Diana", "Omar", "Paola"];
console.log ( arregloNombres[2] );

arregloNombres[2] = "Rosa";
console.log ( arregloNombres[2] );

delete arregloNombres[2] ;
console.log ( arregloNombres) ;

console.log ( "La cantidad de elementos en el arreglo es: " + arregloNombres.length );

arregloNombres.push ( "Cristina" );
console.log ( arregloNombres );

arregloNombres.pop(); 
console.log ( arregloNombres );

arregloNombres.splice ( 0, 1,"Cristina" );
console.log ( arregloNombres );

arregloNombres.splice (2,1);
console.log (arregloNombres);

/*
Ejercicio
Realiza un programa que lea por teclado
5 notas/calificaciones
y muestre el promedio de estas. 
*/
const prompt = require( 'prompt-sync' )();
var calificaciones = [];
calificaciones [0] =prompt("Dame la primera calificacion: " );
//console.log (calificaciones[0]);
calificaciones [1] =prompt("Dame la segunda calificacion: " );
calificaciones [2] =prompt("Dame la tercera calificacion: " );
calificaciones [3] =prompt("Dame la cuarta calificacion: " );
calificaciones [4] =prompt("Dame la quinta calificacion: " );

var calif1 = calificaciones[0];
var calif2 = calificaciones[1];
var calif3 = calificaciones[2];
var calif4 = calificaciones[3];
var calif5 = calificaciones[4];

var resultado = (parseInt(calif1) +  parseInt (calif2) + parseInt (calif3) + parseInt (calif4) + parseInt (calif5)) / 5 ;
            
console.log (resultado);

var concatenaN1 = [ "Hola" , "Buenas" , "Tardes"] ;
var concatenaN2 = [ "Adios" , "Buenas" , "Noches"] ;

console.log ( concatenaN1.concat ( concatenaN2 ) ) ;