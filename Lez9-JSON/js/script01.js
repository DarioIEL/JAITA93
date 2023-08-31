//creo un obj in JS con notazione letterale
let studente = {
    nome: "Dario",
    cognome: "Mennillo",
    mail: "dario.mennillo@mail.it",
    eta: 34,
    id: 1
}

console.log(studente);

//traduco il mio obj in un JSON [JavaScript Object Notation] (notazione a stringa)
//da questo momento in poi posso "inviare" questa stringa presso un endopoint di un'altra tecnologia
let studenteJSON = JSON.stringify(studente);

console.log(studenteJSON);

///////////////////////////////////////////////////////////////////////////
//Funziona anche con istanze create da funzioni Costruttore
function Docente(id, nome, cognome, materie){
    this.id = id;
    this.nome = nome;
    this.cognome = cognome;
    this.materie = materie;
}

let docente = new Docente(1, "Milo", "Spandre", [
    {
        idMat: 0,
        nomeMat: "HTML",
        ore: 56 
    },
    {
        idMat: 1,
        nomeMat: "CSS",
        ore: 38
    }
] );

console.log(docente);


let docenteJSON = JSON.stringify(docente);

console.log(docenteJSON);


/////////////////////////////////////////
function User (id, nickname, role, info, data){
    this.id = id;
    this.nickname = nickname;
    this.role = role;
    this.info = info;
    this.data = data;
}

let user = new User(2, "Pippo2000", "Admin",[
    {nome: "Pippo",
    cognome: "Rossi",
    accountAssociati: 4,
    coloriPreferiti: ["azzurro", "verde", "rosso", "bianco"]},
    {
    nomeAlt : "Giuseppe",
    cognomeAlt: "Rosso",
    accountAssociati: 3,
    coloriPreferiti: ["rosa", "giallo", "verde", "nero"]
    }]
, "29/08/23");


console.log(user);


///////////////////////////////
//"Ricevo" un JSON per trasformarlo in un oggetto di JS

let adminJSON = '{"nome": "Anna", "role": "Admin", "id": 0, "attivo": true}';

console.log(adminJSON);

//Trasformo questa string in un obj di tipo JS
let admin = JSON.parse(adminJSON);

console.log(admin);
console.log(admin.nome);
console.log(admin.role);

//"Mappo" l'oggetto per poter avere i suggerimenti e non programmare al buio
function AdminOBJ(nome, role, id, attivo){
    this.nome = nome;
    this.role = role,
    this.id = id;
    this.attivo = attivo
}

let mioAdminObj = new AdminOBJ(admin.nome, admin.role, admin.id, admin.attivo);

console.log(mioAdminObj.nome);
console.log(mioAdminObj.id);