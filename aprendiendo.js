 //comentario
        /*
        bloque de comentario
        */

/*variables*/
var num1 = 26;
var num2 = 14;

/*operadores artimeticos*/

var suma = num1 + num2;
var resta = num1 - num2;
var multi = suma * resta;
var divi = multi/suma;
var mod = 26 % 6;

/*comparaciones*/
num1 == 14;
// retorna false

/*operador logico*/
(num1>num2) && (suma != resta)

var isadult=(num1 == 18)? "adulto" : "joven";
document.write(isadult);
/*CONDICIONALES*/

if(num1 > num2){
    document.write("el numero 1 es mayor que el numero 2");
}else if(num1 == num2){
    document.write("el numero 1 y el numero 2 son iguales");
}else{
    document.write("el numero 2 es mayor que el numero 1");
}


switch(num1){
    case 1:
    document.write("caso 1");
    case 2:
    document.write("caso 2");
    case 3:
    document.write("caso 3");
    default:
    document.write("caso default");
}

var color = "black";
switch(color){
    case "red":
    document.write("color red");
    case "blue":
    document.write("color blue");
    case "black":
    document.write("color black");
    default:
    document.write("otro color");
}

/*ciclos*/


for(i=1 ; i<=5;i++){
    document.write(i + "<br />");
}

var i2 = 2;
for(; i2<=5;i2++){
    document.write(i2 + "<br />");
}

var i = 0;
for(; i<=5;){
    document.write(i);
    i++;
}

while (i<=10) {
    document.write(i);
    i++;
}

do {
    document.write(i);
    if(i == 10){
        break;
    }
    i++;
} while (i<=25);

do {
    document.write(i);
    if(i == 11){
        continue;
    }
    i++;
} while (i<=25);