// let numeriEstratti = [];
// let numGiri = 0;
// let doppioni = [];

// for(let i = 0; i < 5; i++){
//     let numeroCasuale = Math.ceil(Math.random() * 90);
//     if(numeriEstratti.includes(numeroCasuale)){
//         //rifai l'estrazione 
//         i--;
//         doppioni.push(numeroCasuale);
//     }else{
//         numeriEstratti.push(numeroCasuale);
//     }
//     numGiri++;
// }

// console.log(numeriEstratti);
// console.log("Cicli necessari: " + numGiri);
// console.log("Doppioni: " + doppioni);



let nomi = ["Dario", "Milo", "Oscar"];

console.log(nomi.includes("Mauro"));
console.log(nomi.indexOf("Mauro")); //-1
console.log(nomi.indexOf("Oscar")); //2
console.log(nomi.indexOf("Milo")); //1
console.log(nomi.indexOf("Dario")); //0

//Soluzione con il while()

// let numeriEstratti = [];
// let numGiri = 0;
// let doppioni = [];

// while(numeriEstratti.length < 40){
//     var numeroCasuale = Math.ceil(Math.random() * 90);
  
//     if(numeriEstratti.indexOf(numeroCasuale) == -1){  
//         numeriEstratti.push(numeroCasuale);
//     }else{
//         doppioni.push(numeroCasuale)
//     }

//     numGiri++;
// }

// console.log(numeriEstratti);
// console.log("Giri necessari: " + numGiri);
// console.log("Doppioni: " + doppioni);


//Soluzione con un set di 90 numeri 
let numeri90 = [];

for(let i = 0; i < 90; i++){
    numeri90.push(i+1);
    // numeri90[i] = i + 1;
}

console.log(numeri90);

let numeriEstratti = [];
let numGiri = 0;

for(let i = 0; i < 90; i++){
    let indiceCasuale = Math.floor(Math.random() * numeri90.length);//0 A 89    
    numeriEstratti.push(numeri90[indiceCasuale]);
    numeri90.splice(indiceCasuale, 1); 
    numGiri++;
}

console.log(numeriEstratti);
console.log(numGiri);


// let colori = ["bianco", "verde", "rosso", "azzurro"];
// colori.splice(1,1);
// console.log(colori);

// //Math.random()
// let numeroACaso = Math.random();

// //Math.floor() arrotonda all'intero inferiore
// //Math.ceil() arrotonda all'intero superiore
// console.log(Math.ceil(numeroACaso * 10));