let dataOggi = new Date();
console.log(dataOggi);

let dataInizioCorso = new Date("Jun 13, 2023 09:00:00");
console.log(dataInizioCorso);

let giornoInizioCorso = dataInizioCorso.getDate();
let meseInizioCorso = dataInizioCorso.getMonth() + 1;
let annoInizioCorso = dataInizioCorso.getFullYear();

console.log(giornoInizioCorso+"/"+meseInizioCorso+"/"+annoInizioCorso);



