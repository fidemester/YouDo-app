//can be deleted
console.log("Console log works!");

//create js element

let InputElement = document.getElementById("todo-text");
let CreateButton = document.getElementById("create-btn");

// create and remove list items, due date

CreateButton.addEventListener("click", event =>{
    event.preventDefault();
    let liElement = document.createElement("li");
    document.body.append(liElement);
    liElement.innerText=InputElement.value;

    let ResetElement = document.createElement("button");
   ResetElement.textContent="Delete"
    liElement.append(ResetElement);
    ResetElement.style.cursor="pointer";

    let dateElement = document.createElement("input");
    dateElement.type="time";
    document.body.append(dateElement);






    // localStorage.setItem("Do list", JSON.stringify(liElement.innerText));

    ResetElement.addEventListener("click", function (){
        liElement.remove();
    })

})

//keyup event + Createbutton available

InputElement.addEventListener("keydown", event =>{
    if(event.target.value.length < 6){
        InputElement.style.border = "2px solid red"}
    else{
        InputElement.style.border = "2px solid green";
        CreateButton.removeAttribute("disabled");
        }
})

