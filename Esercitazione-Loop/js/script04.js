

//il for più ampio regola le righe
for(let i = 1; i < 23; i++){
    let disegno = "";

    //regola le colonne, il numero di * nella singola riga
    for(j = 1; j <= i; j++){
        disegno += " * ";
    }

    console.log("riga" + i + " " +disegno);
}


// let ast = '';

// for(let i = 1; i <= 5; i++){

//     ast += "* ";

//     console.log(ast);
// }

// let asterischi = [];

// for(let i = 0; i < 5; i ++){
//     asterischi.push("*");

//     console.log(asterischi);
// }