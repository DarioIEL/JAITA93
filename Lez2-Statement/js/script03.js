let livello = 1;
let msg = "";

switch(livello){

    case 1:
    msg = "Sei al primo livello, hai appena cominciato";
    break;

    case 2:
    msg = "Sei al secondo livello, non ti fermare";
    break;

    case 3:
    msg = "Ultimo livello, con questo vinci il gioco";
    break;

    default:
    msg = "Ciao giocatore, non ho questo livello";
    break;

}

console.log(msg);