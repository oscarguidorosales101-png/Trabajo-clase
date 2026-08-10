function esPar(numero) {
  return numero % 2 === 0;
}

console.log(esPar(9)); /* falso */




const triple = (n) => n * 3;

console.log(triple(5)); /* 15 */




function saludar(nombre) {
  console.log("Hola, " + nombre);
}
let resultado = saludar("Ana");
console.log(resultado); /* hola, Ana */





function restar(a, b) {
    return a - b;
}

console.log(restar(10, 4)); // 6




const restar2 = (a, b) => a - b;

console.log(restar2(10, 4)); // 6



function cuadrado(n) {
    return n * n;
}

let resultado = cuadrado(5);
console.log(resultado); // 25




function areaRectangulo(base, altura) {
    return base * altura;
}

console.log(areaRectangulo(10, 5));
console.log(areaRectangulo(8, 4));  /* si mal no estoy, daria 52 */






function esMayorDeEdad(edad) {
    return edad >= 18;
}

console.log(esMayorDeEdad(20));
console.log(esMayorDeEdad(15)); /* verdadero y ffalso, obvio que el de arriba es V y abajo F. Espero que sea asi  */





function calcularSubtotal(precios) {
    return precios.reduce((suma, precio) => suma + precio, 0);
}

function calcularIVA(subtotal) {
    return subtotal * 0.13;
}

function calcularTotal(subtotal, iva) {
    return subtotal + iva;
}

let precios = [100, 250, 50];

let subtotal = calcularSubtotal(precios);
let iva = calcularIVA(subtotal);
let total = calcularTotal(subtotal, iva);

console.log("Subtotal:", subtotal);
console.log("IVA:", iva);
console.log("Total:", total);




function restar(a, b) {
    return a - b;
}

const restar2 = (a, b) => a - b;

return n * n;

despedirse();

function areaRectangulo(base, altura) {
    return base * altura;
}

function esMayorDeEdad(edad) {
    return edad >= 18;
}

/* subtotal es 400 seria , iva  52 y total: 452 */