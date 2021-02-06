//can be deleted
console.log("Console log works!");
let form
let InputElement = document.getElementById("todo-text");

let CreateButton = document.getElementById("create-btn")

let UlElement = document.getElementById("ul-element")

CreateButton.addEventListener("click", event =>{
    event.preventDefault();
    console.log(InputElement.value);
    let liElement = document.createElement("li");
    document.body.append(liElement);
    liElement.innerText=InputElement.value;

    let buttonElement = document.createElement("button")
    buttonElement.textContent="Delete"
    liElement.append(buttonElement);
    console.log(buttonElement);
    buttonElement.addEventListener("click", function (){
        liElement.remove();
    })
})




