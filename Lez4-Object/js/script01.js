//Notazione letterale
//chiave: valore

let user = {
    name: "Pippo",
    lastname: "Baudo",
    age: 90,

    conduciSanremo: function(){
        return "Sto conducendo il festival di Sanremo";
    }
}

//Accedo alle prop
console.log("Il nome dello user è : " + user.name + " " + user.lastname);

console.log(user.conduciSanremo());


let admin = {
    username: "Megatron79",
    password: "1234",
    role: "Admin",

    //senza function ma sempre con le () è la versione compatta del metodo
    gestisciAccount(){
        //il this fa riferimento all'oggetto admin
        this.role = "Basic";
    },

    modificaPassword(nuovaPassword){
        this.password = nuovaPassword;
    }
}

admin.gestisciAccount();
console.log(admin.role);

admin.modificaPassword("5678");
console.log(admin.password);