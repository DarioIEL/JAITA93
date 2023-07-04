//funzioni con parametri 
function calcolaArea(altezza, base){
    let area = base * altezza;
    console.log("L'area vale: " + area);
}

//quando richiamo una funzione con parametri sono obbligato a fornire il valore dei parametri
calcolaArea(4,6);


///---funzione parametrica con una restituizione (RETURN) -----

function calcolaVolume(base, altezza, profondita){
    
    let volume = base * altezza * profondita;
    return volume;
}

console.log( calcolaVolume(4,5,6) );

//oppure
//dentro la var mioVolume registro il valore di restituzione della funzione calcolaVolume
let mioVolume = calcolaVolume(5,6,7);
console.log(mioVolume);


//oppure
//posso dichiarare una var volume poiché quella della riga 16 è una var locale, quindi "invisibile" all'esterno;
let volume = calcolaVolume(6,7,8);
console.log(volume);