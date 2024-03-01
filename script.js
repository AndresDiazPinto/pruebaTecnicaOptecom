/*funcion que calcula el area del triangulo*/

function calcularAreaTriangulo(base, altura) {
  // Fórmula para calcular el área de un triángulo: (base * altura) / 2
  return (base * altura) / 2;
}

// Ejemplo de uso de la función
const base = 20;
const altura = 9;
const area = calcularAreaTriangulo(base, altura);
console.log(
  "El área del triángulo con base",
  base,
  "y altura",
  altura,
  "es:",
  area
);

/*funcion que calcula el area de un circulo*/

function calcularAreaCirculo(radio) {
  // Fórmula para calcular el área de un círculo: pi * radio^2
  const areac = Math.PI * radio ** 2;
  return areac;
}

// Ejemplo de uso de la función
const radio = 3;
const areac = calcularAreaCirculo(radio);
console.log("El área del círculo con radio", radio, "es:", areac);
