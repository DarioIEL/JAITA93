//FOR
let nomi = ["Dario", "Lucia", "Maria", "Paolo", "Pippo"];
//let i = 0; inizializzazione
//i < nomi.length; condizione
//i++; aggiornamento
//i++ operatore di post incremento

for(let i = 0; i < nomi.length; i++){
    console.log(nomi[i]);
}

//1°giro (i = 0; 0 < 5 --> T; 1) { console.log(nomi[0]) }
//2°giro (i = 1; 1 < 5 --> T; 2) { console.log(nomi[1]) }
//...
//5°giro (i = 4; 4 < 5 --> T; 5) { console.log(nomi[4]) } ---> Pippo
//6°giro (i = 5; 5 < 5 --> F; X) XXXXX

//for al contrario 
for(let i = nomi.length - 1; i >= 0; i--){
    console.log(nomi[i]);
}

//tabelline
for(let i = 1; i <= 10; i++){
    console.log(2 * i);
}

///FOR OF tarato per gli array 
for (const nome of nomi) {
    console.log(nome);
}

let numeriLotto = [12, 56, 7, 2, 8];
for(const numero of numeriLotto){
    console.log(numero);
}


///FOR IN tarato per funzionare sugli oggetti 
for (const index in nomi) {
   console.log(nomi[index]);
}

///Foreach, si applica solo agli array 
//array.foreach( elemento =>{ corpo })

nomi.forEach( nome => {
    console.log(nome);
});


//esempio innesto for if
//nei numeriLotto voglio capire chi è pari chi dispari
for(let i = 0; i < numeriLotto.length; i++){
    if(numeriLotto[i] % 2 == 0){
        console.log(numeriLotto[i] + " è pari");
    }else{
        console.log(numeriLotto[i] + " è dispari");
    }
}

console.log("---------------------");

numeriLotto.forEach(numero => {
    if(numero%2 == 0){
        console.log(numero + " è pari");
    }else{
        console.log(numero + " è dispari");
    }
});