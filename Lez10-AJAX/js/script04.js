const URL = "http://localhost:3000/posts";

let btnPost = document.querySelector("#btnPost");

let nuovoPost = {
    title: "Java",
    author: "Mauro"
}

function caricaNuovoPost(){

    fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(nuovoPost)
    })
    .then(data =>{ return data.json() })
    .then(response => {
        console.log(response, "registrato");
    })


}

btnPost.addEventListener("click", caricaNuovoPost);