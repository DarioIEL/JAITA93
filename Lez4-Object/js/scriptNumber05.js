//Number è un oggetto built In
let numero = 345.67; // 3.5 * 10^2 = 340 

let numArrotondato = numero.toFixed(1); //toFixed() approssima le cifre decimali
console.log(numArrotondato);

let numSignificativo = numero.toPrecision(2); //toPrecision stabilisce il  num di cifre significative
console.log(numSignificativo);


let num2 = 4.5325634987638
console.log(num2.toPrecision(3)); //->4.53

let num3 = 8;
console.log(num3.toExponential(3));


//isNaN = isNotANumber
let parola = "ciao";
console.log( isNaN(parola) ); //true

console.log( isNaN(numero) ); //false

//INTERFACCIA NUMBER
let mioNum = "150";
let mioNum2 = "20";

//faccio il cast del dato utilizzando l'interfaccia Number
let somma = Number(mioNum) + Number(mioNum2);
console.log(somma);

//Javascrpit interpreta mioNum e mioNum2 come due numeri nel caso di prodotto o quoziente. Anche in questo però andrebbe castato il dato
let prodotto = Number( mioNum ) * Number(mioNum2);
console.log(prodotto);

let mioNome = "Dario";
console.log(Number(mioNome)); //NaN

