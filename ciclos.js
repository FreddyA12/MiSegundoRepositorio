//Ciclos - While 
var contadorN1 = 5;
var contadorN2 = 30

/*while ( contadorN2 < 20 ) {
    console.log ("Numero de Iteracion: " + contadorN2);
    contadorN2 ++;
};
*/

while ( contadorN1 < 10 && contadorN2 >20 ) {
    console.log ("ContadorN1: " + contadorN1 + " ContadorN2 " + contadorN2 );
    contadorN1 ++;
    contadorN2 --;
};


//Ciclos do-while

var condicion = "Hola" ;
var contadorN3 = 0;

do{
    console.log ("Entraste al ciclo do while ");
    if (contadorN3 == 2 ){
        condicion = "Adios" ;
        console.log ( "Saliste del ciclo do While")
    }
    contadorN3++;

}while ( condicion == "Hola" );

var condicionN2 = 25;
do{
    console.log ("Valor: " + condicionN2 );
    condicionN2 -= 5 ;

}while ( condicionN2 >= 5 );

/*Ejercicio do While
Crear un programa que lea tantos numeros 
comos se quiera hasta que se reciba un cero,
y se mostrara un resultado, que sera la suma
de todos los numeros ingresados
*/

const prompt = require('prompt-sync')();

var recibeNumero;
var suma = 0;

do{
    var recibeNumero = prompt("Dame un numero a sumar: ");

    suma = suma + parseInt(recibeNumero);

}while (recibeNumero !=0 );
console.log ( "La suma total es: " + suma );

/*
while (recibeNumero !=0 ){
    var recibeNumero = prompt("Dame un numero a sumar: ");
    suma = suma + parseInt(recibeNumero);
}
console.log ( "La suma total es: " + suma );
*/
