//valore assoluto
let a = -5;
let aAbs = Math.abs(a); //5
console.log(aAbs);

//Radice
let b = 64;
console.log(Math.sqrt(b));

//Potenza
let c = 5;
console.log(Math.pow(c,4));

//Ceil e Floor
//Ceil arrotonda all'intero maggiore più vicino
//Floor arrotonda all'intero minore più vicino
let d = 5.12;
console.log(Math.ceil(d)); //6
console.log(Math.floor(d)); //5

//Round arrotonda all'intero maggiore o minore
let e = 5.49;
console.log(Math.round(e));

//Trunc taglia le cifre dopo la virgola
let f = 34.56;
console.log(Math.trunc(f));

//RANDOM: per espandere l'intervallo di numeri casuali devo moltiplicare per l'intervallo stesso
let g = Math.random() * 10;
console.log(g);

//trova un numero casuale da 1 a 10
let h = Math.ceil(Math.random() * 10);
console.log(h);

//trova un numero casuale tra 0 e 9
let i = Math.floor(Math.random() * 10);
console.log(i);