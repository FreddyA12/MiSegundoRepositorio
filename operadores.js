//operador +

var operandoN1 = 5000;
var operandoN2 = 10000;
var resultado = operandoN1 + operandoN2;
console.log (resultado);

//operador *

var operandoN3 = 12;
var operandoN4 =  2;
var resultado2 = operandoN3 * operandoN4;
console.log (resultado2);

//operador /
var resultado3 = operandoN2 / operandoN1;
console.log ("El resultado de tu division es:" + resultado3);

//operador ++

resultado3++;
console.log ("Incrementando la variable resultado3:" + resultado3 )

//operadores de asignacion

//operador =

operandoN1 = operandoN2
console.log ( operandoN1);

//operador +=

operandoN3 += operandoN4;
//operandoN3 = operandoN3 + operandoN4 
console.log ( operandoN3);

//operadores de comparacion

var numeroComparacion1 = 5;
var numeroComparacion2 = "5";

//mismo valor - true
var resultadoComparacion = (numeroComparacion1 == numeroComparacion2);
console.log ( resultadoComparacion);

//mismo valor, mismo tipo - true

var resultadoComparacion = (numeroComparacion1 === numeroComparacion2);
console.log ( resultadoComparacion);

//diferente valor - true
var resultadoComparacion = (numeroComparacion1 != numeroComparacion2);
console.log ( resultadoComparacion);

//diferente valor,diferente tipo - true

var resultadoComparacion = (numeroComparacion1 !== numeroComparacion2);
console.log ( resultadoComparacion);

//operadores logicos

var oplogicoN1 = 5;
var oplogicoN2 = 20;
var oplogicoN3 = 30;

//operador && "and" o "Y"

var resultadoOperadorLogico = ( oplogicoN1 < oplogicoN2) && (oplogicoN2 < oplogicoN3);
console.log ( "El resultado del operador && es " + resultadoOperadorLogico );

//operador || "or" o "O"

var resultadoOperadorLogicoO = ( oplogicoN1 < oplogicoN2) || (oplogicoN2 > oplogicoN3);
console.log ( "El resultado del operador or es " +resultadoOperadorLogicoO );

//operador negacion!

var resultadoOperadorLogicN = !resultadoOperadorLogicoO;
console.log ( "El resultado del operador negacion es " +resultadoOperadorLogicN);