function esPar(numero) {
    return numero % 2 === 0;
}

console.log(esPar(9));


const triple = (n) => n * 3;

console.log(triple(5));







function saludar(nombre) {
    console.log("Hola, " + nombre);
}

let resultado = saludar("Ana");
console.log(resultado);






function restar(a, b) {
    return a - b;
}

console.log(restar(10, 4));


const restar2 = (a, b) => a - b;

console.log(restar2(10, 4));


function cuadrado(n) {
    return n * n;
}

let resultadoCua = cuadrado(5);

console.log(resultadoCua);


function despedirse() {
    console.log("¡Chau!");
}

despedirse();






function areaRectangulo(base, altura) {
    return base * altura;
}

console.log(areaRectangulo(10, 5));
console.log(areaRectangulo(8, 4));







function esMayorDeEdad(edad) {
    return edad >= 18;
}

console.log(esMayorDeEdad(20));
console.log(esMayorDeEdad(15));








function calcularSubtotal(precios) {
    let suma = 0;

    for (let precio of precios) {
        suma += precio;
    }

    return suma;
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

console.log("subtotal:", subtotal);
console.log("iva:", iva);
console.log("total:", total);

/* subtotal es 400, iva 52 y total: 452 */