fetch("http://localhost:3000/posts")
.then(data =>{return data.json()})
.then(response =>{
    console.log(response);
})