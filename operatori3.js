let num1 = prompt("Scrivi un numero compreso tra 1 e 5");
let num2 = prompt("Scrivi un numero compreso tra 6 e 10");

num1 = parseInt(num1);
num2 = parseInt(num2);

let somma = num1 + num2;
let differenza = num2 - num1;
let divisione = Math.ceil(num1 / num2);
let moltiplicazione = num1 * num2;
let potenza = Math.pow(num1, num2);

console.log(`Con i numeri da te scelti, i risultati delle varie operazioni sono: somma ${somma}, sottrazione ${differenza}, divisione ${divisione}, moltiplicazione ${moltiplicazione}, potenza ${potenza}`);