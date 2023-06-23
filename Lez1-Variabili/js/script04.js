let txt = "Benvenuti al corso JaIta93";

//1. le stringhe sono 0-based.
//2. Anche lo spazio è un carattere

let lunghezzaTxt = txt.length;
console.log(lunghezzaTxt);

let carattere0 = txt.charAt(0);
console.log(carattere0);

let carattereUlt = txt.charAt(txt.length - 1);
console.log(carattereUlt);

//metodi per ricerca
//indexOf mi restituisce l'indice nel quale si trova quella stringa o quel carattere alla prima occorrenza
let search1 = txt.indexOf("corso"); 
console.log(search1);

let search2 = txt.indexOf("e"); //1
console.log(search2);

//all'ultima occorrenza
let search3 = txt.lastIndexOf("e"); //4
console.log(search3);

//posso anche cercare un pattern
let search4 = txt.indexOf(" c");
console.log(search4);

//metodi per il taglio 
let stringa = "Questo corso terminerà con un Projectwork";

let taglio1 = stringa.slice(3,15);
console.log(taglio1);

let taglio2 = stringa.substring(3,15);
console.log(taglio2);

//metodi per la sostituzione
let stringa2 = "Edge è il miglior browser al mondo !!";
let rep = stringa2.replace("Edge", "Chrome");
console.log(rep);

let upp = rep.toUpperCase();
console.log(upp);

let low = rep.toLowerCase();
console.log(low);

//Metodi per scomposizione in array

let parola = "Dario";

//il metodo split trasforma una stringa in un array
let parolaArr = parola.split(""); //"" vuol dire splittare ogni singolo carattere
console.log(parolaArr);

let frase = "Provo con una frase qualunque";
let fraseArr = frase.split("");
console.log(fraseArr);

let fraseArr2 = frase.split(" ");
console.log(fraseArr2);

let fraseArr3 = frase.split("r");
console.log(fraseArr3);

//esempio
let nomeFile = "carta di identità.pdf";
let nomeFileArr = nomeFile.split(" ");
console.log(nomeFileArr);
//ricompongo il nomeFile mettendo l' underscore _
let nomeFileOK = nomeFileArr.join("_");
console.log(nomeFileOK);

//esempio2
let nomeFile2 = "patente di guida.jpg";
let nomeFileOK2 = nomeFile2.split(" ").join("_"); //posso utilizzare metodi uno dopo l'altro
console.log(nomeFileOK2);

//esempio 3 - data la seguente stringa scrivila al contrario
let miaFrase = "ciao a tutta la classe del corso";
let fraseAlContrario = miaFrase.split("").reverse().join("");

console.log(fraseAlContrario);

let miaFrase2 = "i topi non avevano nipoti";
let fraseAlContrario2 = miaFrase2.split("").reverse().join("");
console.log(fraseAlContrario2);

//esercizio1:
//elabora uno script per fare la seguente manipolazione:
//oggi sono a lezione -> Oggi Sono A Lezione
//uppercase della prima lettera di ogni singola parola


let frase2 = "Domani non sono a lezione e faccio un giro in moto";

let frase2Arr = frase2.split(" ");
console.log(frase2Arr);

let nuovaFrase = ""
for(let i = 0; i < frase2Arr.length; i++){
    // console.log(frase2Arr[i][0].toUpperCase());
    let inizialeMaius = frase2Arr[i][0].toUpperCase();
    let restoParola = frase2Arr[i].substring(1);
    nuovaFrase +=  inizialeMaius + restoParola + " ";
    
    //oppure
    let rep = frase2Arr[i].replace(frase2Arr[i][0], frase2Arr[i][0].toUpperCase());
    console.log(rep);
}

console.log(nuovaFrase);

let mioNome = "Leonardo";
//voglio estrarre un pezzo del tuo nome -> il nome senza l'iniziale

console.log( mioNome.substring(1) );

//esercizio2:
//elabora uno script per estrarre l'estensione di un file
//"immagineBG.jpg" -> "L'estensione del file è jpg";

let nomeFile3 = "immagineBG.jpg";

let estensione = nomeFile3.split(".").pop();
console.log("L'estensione del file è: " + estensione);


//esercizio 3

