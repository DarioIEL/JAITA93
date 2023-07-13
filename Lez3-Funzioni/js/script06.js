const DEMO = document.getElementById("demo"); //<p id="demo"></p>
const BTN = document.getElementById("btn");
const BTNCOLOR = document.getElementById("btnColor");

function inviaTweet(){
    let messaggio = document.getElementById("messaggio").value;

    if(messaggio == ""){
        DEMO.innerHTML = "Non hai scritto niente !!"
    }else{
        DEMO.innerHTML = "<p>" + messaggio + "</p>";
    }
    
    //per cancellare ciò che scrivo nella textarea
    document.getElementById("messaggio").value = "";

}

function cambiaColore(){
    //il metodo setAttribute setta un attributo
    // DEMO.setAttribute("class", "txtBlue");

    if(DEMO.hasAttribute("class")){
        DEMO.removeAttribute("class")
    }else{
        DEMO.setAttribute("class", "txtBlue");
    }
}

//  ATT: le funzioni degli event Listener non hanno le parentesi tonde, MAI !!!
//oggettoHTML.addEventListener("evento", funzione);

BTN.addEventListener("click", inviaTweet);
BTNCOLOR.addEventListener("click", cambiaColore);

