let numeri = [484, 64, 56, 89, 32];

let numeroGrande = 0;

for(let i = 0; i < numeri.length; i++){
    if(numeri[i] > numeroGrande){
        numeroGrande = numeri[i];
    }
}

console.log(numeroGrande);
